const generateRandomUsername = require('../index');

describe('index test suite', () => {
    it('should export a single function', () => {
        expect(generateRandomUsername).toEqual(expect.any(Function))
    })
})
