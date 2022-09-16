const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    text: 'fdsafdfsfadsf dsafdsafdsdf sdfds afda',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    text: 'fdsafdfsfadsf dsafdsafdsdf sdfds afda',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    text: 'fdsafdfsfadsf dsafdsafdsdf sdfds afda',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    text: 'fdsafdfsfadsf dsafdsafdsdf sdfds afda',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    text: 'fdsafdfsfadsf dsafdsafdsdf sdfds afda',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    text: 'fdsafdfsfadsf dsafdsafdsdf sdfds afda',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    text: 'fdsafdfsfadsf dsafdsafdsdf sdfds afda',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    text: 'fdsafdfsfadsf dsafdsafdsdf sdfds afda',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    text: 'fdsafdfsfadsf dsafdsafdsdf sdfds afda',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    text: 'fdsafdfsfadsf dsafdsafdsdf sdfds afda',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    text: 'fdsafdfsfadsf dsafdsafdsdf sdfds afda',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    text: 'fdsafdfsfadsf dsafdsafdsdf sdfds afda',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    text: 'fdsafdfsfadsf dsafdsafdsdf sdfds afda',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    text: 'fdsafdfsfadsf dsafdsafdsdf sdfds afda',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    text: 'fdsafdfsfadsf dsafdsafdsdf sdfds afda',
    user_id: 3
  },
  {
    title: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
    text: 'fdsafdfsfadsf dsafdsafdsdf sdfds afda',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    text: 'fdsafdfsfadsf dsafdsafdsdf sdfds afda',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    text: 'fdsafdfsfadsf dsafdsafdsdf sdfds afda',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    text: 'fdsafdfsfadsf dsafdsafdsdf sdfds afda',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    text: 'fdsafdfsfadsf dsafdsafdsdf sdfds afda',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
