const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

// associations

  //user can have multiple Posts
User.hasMany(Post, {
  foreignKey: 'user_id'
});

  //user can have multiple Comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

  //posts can only belong to one User
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

  //comments can only belong to one User
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

  //comments can also only belong to one Post
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});





Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };