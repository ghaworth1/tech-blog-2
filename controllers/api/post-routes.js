//don't forget to change the model name!
const router = require("express").Router();
const Post = require("../../models");

const Model = Post;
//get template
router.get('/', async (req, res) => {
  const results = await Model.findall().catch((err) => {res.json(err) });
  res.status(200).json({ results });
});

//get by id
router.get('/:id', async (req, res) => {
  const results = await Model.findByPk(req.params.id).catch((err) => {res.json(err) });
  res.status(200).json({ results });
});

//post
router.post('/', async (req, res) => {
  try {
    const newData = await Model.create(req.body);
    res.status(200).json({newData});
  } catch (err) {
    res.status(400).json(err);
  }
});

//put
router.put('/:id', async (req, res) => {
  try {
    const updatedData = await Model.update( req.body, { where: { id: req.params.id } } );
    res.status(200).json({updatedData});
  } catch {
    res.status(400).json(err);
  }
});

//delete
router.delete('/:id', async (req, res) => {
  try {
    const removedData = await Model.destroy( { where: { id: req.params.id } } );
    res.status(200).json({removedData});
  } catch {
    res.status(400).json(err);
  }
});

module.exports = router;