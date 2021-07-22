// Import all models
const Post = require('./Post');
const User = require('./User');




// Create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});
  
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

// Export all models
module.exports = { User, Post };