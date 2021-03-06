export const emojinames = ["angry", "happy", "sad", "love", "laugh", "like"];

//returns a random element of emoji names
export const randomEmoji = () => {
  return emojinames[Math.floor(Math.random() * Math.floor(6))];
};

function clearResults() {
  this.results = {
    angry: {},
    sad: {},
    happy: {},
    laugh: {},
    like: {},
    love: {},
  };
}

//numbers are the time in ms between the vibrations, in order
//on ios vibrations are fixed length, always 400ms
//function kinda starts getting wierd when the separation times are low (<500)

// ENCODING 1 - neutral encoding
const happy1 = [600];
const sad1 = [600, 600];
const angry1 = [600, 600, 600];
const love1 = [600, 600, 600, 600];
const laugh1 = [600, 600, 600, 600, 600];
const like1 = [600, 600, 600, 600, 600, 600];

// ENCODING 2 - intuitive encoding
const happy2 = [600, 600, 600];
const sad2 = [800, 1400, 2000];
const angry2 = [1200, 1200, 1200];
const love2 = [600, 600];
const laugh2 = [1200, 600, 600, 1200, 600, 600];
const like2 = [600];

export const results = {
  angry: {},
  sad: {},
  happy: {},
  laugh: {},
  like: {},
  love: {},
};

export const patternDict = {
  angry1: angry1,
  sad1: sad1,
  happy1: happy1,
  laugh1: laugh1,
  like1: like1,
  love1: love1,
  angry2: angry2,
  sad2: sad2,
  happy2: happy2,
  laugh2: laugh2,
  like2: like2,
  love2: love2,
};

//emoji images
const angryimg = require('./images/angry.png');
const sadimg = require('./images/sad.png');
const happyimg = require('./images/yay.png');
const laughimg = require('./images/laugh.png');
const likeimg = require('./images/like.png');
const loveimg = require('./images/love.png');
export const imageDict = {
  angry: angryimg,
  sad: sadimg,
  happy: happyimg,
  laugh: laughimg,
  like: likeimg,
  love: loveimg,
};

//emoji gestures
export const gestureDict = {
  angry1: "down quickly",
  sad1: "down slowly",
  happy1: "up slowly",
  laugh1: "up quickly",
  like1: "right quickly",
  love1: "left quickly",
  angry2: "up quickly",
  sad2: "right quickly",
  happy2: "left quickly",
  laugh2: "down quickly",
  like2: "left slowly",
  love2: "right slowly",
};
