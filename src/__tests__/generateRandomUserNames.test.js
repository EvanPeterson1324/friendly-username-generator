const { generateRandomUsername } = require('../generateRandomUserNames');

describe(('username generation tests'), () => {
  it('should generate a random username', () => {
    const randomUsername = generateRandomUsername();
    expect(randomUsername).toEqual(expect.any(String))
  })
});
