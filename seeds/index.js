const seedUsers = require('./users');
const seedPosts = require('./posts');
const seedComments = require('./comments');

const sequelize = require("../config/connection");

const seedDB = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedPosts();
  await seedComments();
  process.exit(0);
};

seedDB();