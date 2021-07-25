// Require Post model
const { Post } = require('../models');

// Create data to be entered into model, using proper formatting
const postdata = [
    {
      title: 'Example 1',
      content: 'Donec posuere metus vitae ipsum.',
      user_id: 10
    },
    {
      title: 'Example 2',
      content: 'Morbi non quam nec dui luctus rutrum.',
      user_id: 8
    },
    {
      title: 'Example 3',
      content: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
      user_id: 1
    },
    {
      title: 'Example 4',
      content: 'Nunc purus.',
      user_id: 4
    },
    {
      title: 'Example 5',
      content: 'lorem ipsum delray is gay ?',
      user_id: 7
    },
    {
      title: 'Example 6',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      user_id: 4
    },
    {
      title: 'Example 7',
      content: 'In hac habitasse platea dictumst.',
      user_id: 1
    },
    {
      title: 'Example 8',
      content: 'Morbi non quam nec dui luctus rutrum.',
      user_id: 1
    },
];

// Create variable to hold and create data
const seedPosts = () => Post.bulkCreate(postdata);
  
module.exports = seedPosts;