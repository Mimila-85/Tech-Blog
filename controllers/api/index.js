const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const editPostRoutes = require('./editPostRoutes');
const commentRoutes = require('./commentRoutes');


router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/edit-post', editPostRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
