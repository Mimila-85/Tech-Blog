const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.put('/:id', withAuth, async (req, res) => {
  try {
    const updateData = await Post.update({
      ...req.body,
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!updateData) {
      // Client error response 404 - Not found
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }
    // Sucess response 200 - OK
    res.status(200).json(updateData);
  } catch (err) {
    // Client error response 400 - Bad request
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      // Client error response 404 - Not found
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }
    // Sucess response 200 - OK
    res.status(200).json(postData);
  } catch (err) {
    // Server error response 500 - Internal Server Error
    res.status(500).json(err);
  }
});

module.exports = router;
