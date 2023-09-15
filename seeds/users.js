const User = require('../models');

const userdata = [
  {
    username: 'xX_Slayer_Xx',
    email: 'typical_gamer@hotmail.com',
    password: 'abcd1234'
  },
  {
    username: 'bmwFan',
    email: 'fiveSeries@cars.com',
    password: 'password123'
  },
  {
    username: 'MacTheDog',
    email: 'goodBoi@doggy.com',
    password: 'woofwoof123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;