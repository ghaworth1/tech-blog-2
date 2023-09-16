
// const seedUsers = require('./users');
// const seedPosts = require('./posts');
// const seedComments = require('./comments');

// const sequelize = require("../config/connection");

// const seedDB = async () => {
//   await sequelize.sync({ force: true });
//   await seedUsers();
//   await seedPosts();
//   await seedComments();
//   process.exit(0);
// };

// seedDB();

const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

const userData = require("./users.json");
const postData = require("./posts.json");
const commentData = require("./comments.json");

// Seeds database with user data, blogPost data, and comment data
const seedDbase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const comments = await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDb();