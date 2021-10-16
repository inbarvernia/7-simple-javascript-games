
// Card options:
// All images taken from https://picsum.photos/
const cardArray = [
  {
    name: '658',
    img: 'images/658.jpg'
  },
  {
    name: '658',
    img: 'images/658.jpg'
  },
  {
    name: '1015',
    img: 'images/1015.jpg'
  },
  {
    name: '1015',
    img: 'images/1015.jpg'
  },
  {
    name: '1016',
    img: 'images/1016.jpg'
  },
  {
    name: '1016',
    img: 'images/1016.jpg'
  },
  {
    name: '1019',
    img: 'images/1019.jpg'
  },
  {
    name: '1019',
    img: 'images/1019.jpg'
  },
  {
    name: '1037',
    img: 'images/1037.jpg'
  },
  {
    name: '1037',
    img: 'images/1037.jpg'
  },
  {
    name: '1039',
    img: 'images/1039.jpg'
  },
  {
    name: '1039',
    img: 'images/1039.jpg'
  }
];

const grid = document.querySelector('.grid');

// Create board:
for (let i = 0; i < cardArray.length; i ++) {
  let card = document.createElement('img');
  card.setAttribute('src', 'images/back.png');
  card.setAttribute('data-id', i);
  // card.addEventListener('click', flipCard);
  grid.appendChild(card);
}
