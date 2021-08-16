const adjectives = require('./adjectives');
const animals = require('./animals');

const getRandomNumber = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);

const getRandomItemFromArray = (array) => getRandomNumber(0, array.length - 1);

const defaultOptions = {
  useHyphen: true,
  useRandomNumber: true
}

const checkOptions = (options = {}) => {
  if (typeof options !== 'object') {
    throw new Error('options must be an object')
  }

  const propertyExists = (property) => (typeof options[property] !== 'undefined')

  if (propertyExists('useHyphen') && (typeof options.useHyphen !== 'boolean')) {
    throw new Error(`options.useHyphen must be a boolean, got ${typeof options.useHyphen} instead.`)
  }

  if (propertyExists('useRandomNumber') && (typeof options.useRandomNumber !== 'boolean')) {
    throw new Error(`options.useRandomNumber must be a boolean, got ${typeof options.useRandomNumber} instead.`)
  }
}

const generateRandomUsername = (options = defaultOptions) => {

  checkOptions(options) // Input Validation
  
  // Construct username
  const randomAdjective = adjectives[getRandomItemFromArray(adjectives)]
  const randomAnimal = animals[getRandomItemFromArray(animals)]
  const randomNumber = getRandomNumber(0, 999)
  let username = `${randomAdjective}-${randomAnimal}${randomNumber}` 

  if (!options.useHyphen){
    username = username.replace('-', '')
  }

  if (!options.useRandomNumber) {
    const matchNumbersRegex = /[0-9]/g
    username = username.replace(matchNumbersRegex, '')
  }

  return username;
}

module.exports = {
  generateRandomUsername,
  getRandomNumber,
}
