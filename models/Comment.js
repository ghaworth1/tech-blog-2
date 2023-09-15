// Create a new Sequelize model
class Post extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { 
        isEmail: true 
      },
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [8] },
    },
  },
  
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;