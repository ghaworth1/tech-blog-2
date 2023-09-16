const router = require('express').Router();
const { Project, User } = require('../models');
const sequelize = require('../config/connection');


router.get('/', async (req, res) => {
  try {
    // get all
  const dbPostData = await Post.findAll({ 
      attributes: ['id', 'title', 'content', 'created_at'],           
      include: [
          {
              model: Comment,
              attributes: ['id', 'comment', 'post_id', 'user_id', 'created_at'],
              include: {
                  model: User,
                  attributes: ['username'],
              },
          },
          {
              model: User,
              attributes: ['username'],
          },
      ],
      order: [['created_at', 'DESC']],
  })
  // Serialize data retrieved
  const posts = dbPostData.map((post) => post.get({ plain: true }));
  console.log(posts)
  // Respond with template to render along with date retrieved
  res.render('homepage', 
      { posts, 
      loggedIn: req.session.loggedIn, 
      username: req.session.username,
      userId: req.session.userId });
} catch (err) {
  res.status(500).json(err);
}
});

//login
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

//signup
router.get("/signup", (req, res) => {
  res.render("signup");
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;