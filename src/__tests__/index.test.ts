import { 
  generateUsername
 } from '../../';

describe('exports test suite', () => {
  it('should export a single function called generateUsername', () => {
    expect(generateUsername).toEqual(expect.any(Function))
  })
})
