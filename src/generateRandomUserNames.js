const adjectives = require('./adjectives');
const animals = require('./animals');

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomItemFromArray = (array) => getRandomNumber(0, array.length - 1);

const generateRandomUsername = () => {
	return adjectives[getRandomItemFromArray(adjectives)]
	  + "-"
	  + animals[getRandomItemFromArray(animals)]
	  + getRandomNumber(0, 999)
}

module.exports = {
  generateRandomUsername,
}
