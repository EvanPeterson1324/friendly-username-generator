const adjectives = require('./adjectives');
const animals = require('./animals');

export type Options = {
  useHyphen?: boolean,
  useRandomNumber?: boolean
}

export const getRandomNumber = (min: number, max: number) => (Math.floor(Math.random() * (max - min + 1)) + min);

const getRandomItemFromArray = (array: Array<any>) => getRandomNumber(0, array.length - 1);

const defaultOptions: Options = {
  useHyphen: true,
  useRandomNumber: true
}

export const generateUsername = (options: Options = {}) => {
  
  const newOptions = { ...defaultOptions, ...options } // Make sure default options are always set
  
  const randomAdjective: string = adjectives[getRandomItemFromArray(adjectives)]
  const randomAnimal: string = animals[getRandomItemFromArray(animals)]
  const randomNumber: number = getRandomNumber(0, 999)
  let username = `${randomAdjective}-${randomAnimal}${randomNumber}` 

  if (!newOptions.useHyphen){
    username = username.replace('-', '')
  }

  if (!newOptions.useRandomNumber) {
    const matchNumbersRegex = /[0-9]/g
    username = username.replace(matchNumbersRegex, '')
  }

  return username;
}
