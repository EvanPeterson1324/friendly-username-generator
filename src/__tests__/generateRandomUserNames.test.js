const { generateRandomUsername } = require('../generateRandomUserNames');

describe(('username generation tests'), () => {
  it('should generate a random username with no options', () => {
    const username = generateRandomUsername();
    expect(username).toEqual(expect.any(String))
  })

  it('should generate username if options object has no keys', () => {
    const username = generateRandomUsername({});

    expect(username).toEqual(expect.any(String))
  })

  it('should remove the hyphen if options.useHyphen option is false', () => {
    const usernameWithoutHyphen = generateRandomUsername({ useHyphen: false })

    expect(usernameWithoutHyphen).toEqual(expect.any(String))
    expect(usernameWithoutHyphen.includes('-')).toBe(false)
  })

  it('should remove numbers if options.useRandomNumber is false', () => {
    const usernameWithoutNumber = generateRandomUsername({ useRandomNumber: false })
    const matchNumbersRegex = /[0-9]/g
    
    expect(usernameWithoutNumber).toEqual(expect.any(String))
    expect(usernameWithoutNumber.match(matchNumbersRegex)).toBe(null)
  })

  it('should throw error if non-object is passed as options', () => {
    expect(() => generateRandomUsername('this is wrong! throw error')).toThrowError('options must be an object')
  })

  it('should throw error if useHyphen option is not a boolean', () => {
    expect(() => generateRandomUsername({ useHyphen: 'huehuehue' })).toThrowError(`options.useHyphen must be a boolean, got string instead.`)
  })
});
