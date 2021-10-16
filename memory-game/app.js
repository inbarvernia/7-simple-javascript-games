
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

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');
const resultDisplay = document.getElementById('result');
let cardsChosen = [];
let cardsChosenId = [];
const matchesFound = [];

// Create board:
for (let i = 0; i < cardArray.length; i ++) {
  let card = document.createElement('img');
  card.setAttribute('src', 'images/back.png');
  card.setAttribute('data-id', i);
  card.addEventListener('click', flipCard);
  grid.appendChild(card);
}

// Check for matches:
function checkForMatch() {
  const cards = document.querySelectorAll('img');
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  if (cardsChosen[0] === cardsChosen[1]) {
    alert('You found a match!');
    cards[optionOneId].setAttribute('src', 'images/white.png');
    cards[optionTwoId].setAttribute('src', 'images/white.png');
    matchesFound.push(cardsChosen);
  } else {
    alert('Sorry, try again!')
    cards[optionOneId].setAttribute('src', 'images/back.png');
    cards[optionTwoId].setAttribute('src', 'images/back.png');
  }
  cardsChosen = [];
  cardsChosenId = [];
  resultDisplay.textContent = matchesFound.length;
  if (matchesFound.length === cardArray.length/2) {
    resultDisplay.textContent = 'Congratulations! You matched them all!'
  }
}

// Flip selected card:
function flipCard() {
  let cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute('src', cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    // delays the reaction so that player has time to see cards first
    setTimeout(checkForMatch, 500)
  }
}
