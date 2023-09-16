// RESTful Route Model Template
//dont forget to change model name!
const router = require("express").Router();
const Comment = require("../../models");

const Model = Comment;

//get template
router.get('/', async (req, res) => {
  try {
    const commentData = await Model.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Post,
          attributes: ["id"],
        },
      ],
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get by id
router.get('/:id', async (req, res) => {
  const results = await Model.findByPk(req.params.id).catch((err) => {res.json(err) });
  res.status(200).json({ results });
});

//post
router.post('/', async (req, res) => {
  try {
    console.log("comment posted");
    const newData = await Model.create({
      comment_body: req.body.comment_body,
      post_id: req.body.post_id,
      user_id: req.body.user_id,
    });

    res.status(200).json(newData);
  
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//put
router.put('/:id', async (req, res) => {
  try {
    const updatedData = await Model.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

  if (!updatedData[0]) {
    res.status(400).json({ message: "COMMENT ID NOT FOUND" });
    return;
  }

  console.log("comment updated");
  res.status(200).json(updatedData);
} catch (err) {
  console.error(err);
  res.status(500).json(err);
}
});

//delete
router.delete('/:id', async (req, res) => {
  try {
    const removedData = await Model.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!removedData) {
      res.status(404).json({ message: "COMMENT ID NOT FOUND" });
      return;
    }
    console.log("comment deleted")
    res.status(200).json(removedData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;