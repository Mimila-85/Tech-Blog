const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      // Choose a randle user to the posts created to seed the database.
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  await Comment.bulkCreate(commentData);
  // for (const comment of commentData) {
  //   await Comment.create({
  //     ...comment,
  //     // Choose a randle user to the comment created to seed the database.
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
