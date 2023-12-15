const words = [
  'apple', 'happy', 'music', 'tiger', 'night',
  'water', 'money', 'plant', 'paper', 'table',
  'queen', 'lemon', 'snake', 'cloud', 'house',
  'chair', 'earth', 'beach', 'dream', 'fruit',
  'magic', 'robot', 'music', 'world', 'baker',
  'laser', 'smile', 'watch', 'knife', 'juice',
  'ocean', 'ghost', 'space', 'peace', 'dream',
  'heart', 'beard', 'socks', 'solar', 'waste',
  'happy', 'fairy', 'crane', 'saint', 'tiger',
  'photo', 'cycle', 'guide', 'wrist', 'beard',
  'crown', 'stone', 'music', 'green', 'sheep',
  'arrow', 'panda', 'sugar', 'bunny', 'money',
  'flame', 'plant', 'candy', 'water', 'fruit',
  'house', 'light', 'table', 'apple', 'crane',
  'pizza', 'chess', 'queen', 'paper', 'robot',
  'watch', 'night', 'dream', 'magic', 'cloud',
  'chair', 'smile', 'snake', 'earth', 'house',
  'lemon', 'music', 'night', 'world', 'knife',
  'money', 'water', 'plant', 'table', 'queen',
  'happy', 'robot', 'apple', 'night', 'chair',
  'dream', 'cloud', 'snake', 'money', 'music',
  'earth', 'beach', 'water', 'paper', 'table',
  'fruit', 'magic', 'robot', 'table', 'music',
  'night', 'chair', 'dream', 'water', 'money',
  'apple', 'beach', 'paper', 'earth', 'queen',
  'snake', 'happy', 'cloud', 'knife', 'fruit',
  'robot', 'world', 'chair', 'night', 'magic',
  'green', 'water', 'money', 'table', 'plant',
  'smile', 'dream', 'earth', 'cloud', 'knife',
  'apple', 'beard', 'snake', 'robot', 'table',
  'chair', 'magic', 'queen', 'night', 'water',
  'paper', 'plant', 'fruit', 'dream', 'music',
  'money', 'earth', 'house', 'happy', 'knife',
  'beach', 'cloud', 'pizza', 'photo', 'heart',
  'lemon', 'world', 'chair', 'magic', 'table',
  'water', 'night', 'queen', 'snake', 'apple',
  'robot', 'dream', 'earth', 'cloud', 'music',
  'chair', 'knife', 'money', 'house', 'night',
  'plant', 'happy', 'table', 'paper', 'world',
  'beard', 'fruit', 'magic', 'queen', 'snake',
  'water', 'dream', 'robot', 'beach', 'earth',
  'chair', 'smile', 'house', 'knife', 'cloud',
  'night', 'money', 'apple', 'world', 'music',
  'magic', 'table', 'paper', 'plant', 'snake',
  'green', 'chair', 'dream', 'queen', 'knife',
  'house', 'robot', 'cloud', 'money', 'night',
  'earth', 'water', 'music', 'apple', 'happy',
  'beach', 'world', 'table', 'fruit', 'smile',
  'magic', 'plant', 'chair', 'dream', 'robot',
  'knife', 'night', 'snake', 'water', 'money',
  'cloud', 'queen', 'paper', 'house', 'earth',
  'beard', 'table', 'green', 'fruit', 'apple',
  'magic', 'chair', 'night', 'robot', 'dream',
  'money', 'water', 'music', 'cloud', 'beach',
  'table', 'snake', 'happy', 'knife', 'paper',
  'plant', 'earth', 'queen', 'house', 'world',
  'dream', 'chair', 'music', 'night', 'magic',
  'water', 'beard', 'apple', 'money', 'robot',
  'knife', 'snake', 'house', 'table', 'earth',
  'cloud', 'plant', 'queen', 'night', 'dream',
  'green', 'paper', 'beach', 'music', 'smile',
  'chair', 'magic', 'fruit', 'robot', 'world',
  'money', 'apple', 'knife', 'cloud', 'night',
  'water', 'house', 'earth', 'table', 'dream',
  'queen', 'snake', 'music', 'robot', 'chair',
  'magic', 'money', 'beard', 'night', 'cloud',
  'earth', 'happy', 'plant', 'table', 'knife',
  'snake', 'world', 'water', 'queen', 'dream',
  'robot', 'music', 'chair', 'magic', 'beach',
  'night', 'paper', 'house', 'earth', 'fruit',
  'apple', 'cloud', 'money', 'knife', 'table',
  'water', 'dream', 'snake', 'robot', 'night',
  'queen', 'chair', 'world', 'music', 'magic',
  'house', 'earth', 'beach', 'knife', 'plant',
  'paper', 'water', 'cloud', 'night', 'dream',
  'apple', 'robot', 'snake', 'money', 'table',
  'magic', 'beard', 'queen', 'chair', 'smile',
  'earth', 'music', 'night', 'world', 'house',
  'fruit', 'knife', 'robot', 'plant', 'paper',
  'water', 'dream', 'table', 'snake', 'magic',
  'cloud', 'beard', 'money', 'queen', 'apple',
  'chair', 'night', 'robot', 'earth', 'knife',
  'table', 'music', 'water', 'dream', 'house',
  'snake', 'magic', 'cloud', 'beach', 'queen',
  'night', 'paper', 'chair', 'money', 'plant',
  'robot', 'world', 'table', 'earth', 'apple',
  'dream', 'music', 'knife', 'beard', 'cloud',
  'snake', 'magic', 'night', 'money', 'chair',
  'house', 'water', 'queen', 'robot', 'table',
  'earth', 'dream', 'fruit', 'beach', 'music',
  'plant', 'cloud', 'knife'
];

const randomIndex = Math.floor(Math.random() * words.length);
export const randomWord = words[randomIndex];