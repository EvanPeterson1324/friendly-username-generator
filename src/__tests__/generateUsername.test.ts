import { generateUsername } from '../generateUsername'

describe(('username generation tests'), () => {
  it('should generate a random username with no options', () => {
    const username = generateUsername();
    expect(username).toEqual(expect.any(String))
  })

  it('should generate username if options object has no keys', () => {
    const username = generateUsername({});
    console.log('no keys', username)
    expect(username).toEqual(expect.any(String))
  })

  it('should remove the hyphen if options.useHyphen option is false', () => {
    const usernameWithoutHyphen = generateUsername({ useHyphen: false })

    expect(usernameWithoutHyphen).toEqual(expect.any(String))
    expect(usernameWithoutHyphen.includes('-')).toBe(false)
  })

  it('should remove numbers if options.useRandomNumber is false', () => {
    const usernameWithoutNumber = generateUsername({ useRandomNumber: false })
    const matchNumbersRegex = /[0-9]/g
    
    expect(usernameWithoutNumber).toEqual(expect.any(String))
    expect(usernameWithoutNumber.match(matchNumbersRegex)).toBe(null)
  })

  // it('should throw error if non-object is passed as options', () => {
  //   expect(() => generateUsername('this is wrong! throw error')).toThrowError('options must be an object')
  // })

  // it('should throw error if useHyphen option is not a boolean', () => {
  //   expect(() => generateUsername({ useHyphen: 'huehuehue' })).toThrowError(`options.useHyphen must be a boolean, got string instead.`)
  // })

  // it('should throw error if useRandomNumber is false', () => {
  //   expect(() => generateUsername({ useRandomNumber: 1 })).toThrowError(`options.useRandomNumber must be a boolean, got number instead.`)
  // })

  it('should set defaults when options are explicitly passed', () => {
    const usernameWithDefaultOptions = generateUsername({})
    const matchNumbersRegex = /[0-9]/g

    expect(usernameWithDefaultOptions).toEqual(expect.any(String))
    expect(usernameWithDefaultOptions.match(matchNumbersRegex)).not.toBe(null)
    expect(usernameWithDefaultOptions.includes('-')).toBe(true)
  })
});
