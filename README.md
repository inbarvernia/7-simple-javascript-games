# 7 Simple JavaScript Games Code-Along

This repo contains code written following along with Ania Kubów's YouTube tutorial [Learn JavaScript by Building 7 Games](https://youtu.be/lhNdUVh3qCc).

Each game is contained as a separate folder within this repo. To play the games, clone the repo locally, then simply open the `index.html` page for the game you want to play in a browser of your choice.

## 1. Memory Game

At present, the code follows exactly from the tutorial (with the exception of some variables I've named differently, and instances of `var` changed to `let`); however, in coding it I've noticed some areas for improvement, which I may tackle in the future (or create a new memory game separately with the improvements in place):
- Most pressingly, there is an issue in functionality, which is that when cards are "removed" (by replacing them with a white image) after being matched correctly, they are still clickable, and can still get flipped and matched; this also causes a further issue whereby the same pair can be "matched" multiple times, which also causes a problem with the win condition, where if the same pair is matched six time, the user gets the message saying that all cards have been matched. It might be possible to simply replace the white images with `div`s, or otherwise change the code so that the `flipCard` function only works on cards that have the 'back' image.
- Some parts of the code in `app.js` can be refactored and made DRYer (e.g. having separate arrays for `cardsChosen` and `cardsChosenId` seems redundant, and can probably be a single array of objects instead, the `optionOneId` and `optionTwoId` inside `checkForMatches` similarly feel superfluous).
- Some additional functionality could be nice: potentially a reset button, so that a new game can be restarted without having to refresh the page; potentially users could set different levels of difficulty (with more or fewer cards), or choose from different card themes.
- The alerts can be a bit annoying - perhaps a message could appear in the browser instead, like the score and win message.
- Of course the styling is extremely basic and can be made much more impressive.

The beautiful scenery images were taken from [Lorem Picsum](https://picsum.photos/) (the numbers in the file names are the ID numbers for the images on the website)
