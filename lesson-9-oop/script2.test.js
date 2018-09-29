var isPal = require('./script2');

describe('isPal function tests', () => {
  it('Anna is a palindrome', () => {
    expect(isPal('Anna')).toBe(true)
  });

  it('А роза упала на лапу Азора is a palindrome', () => {
    expect(isPal('А роза упала на лапу Азора')).toBe(true)
  });

  it('Вася isn\'t a palindrome', () => {
    expect(isPal('Вася')).toBe(false)
  });

  it('12321 is a palindrome', () => {
    expect(isPal('12321')).toBe(true)
  });

  it('123212 isn\'t a palindrome', () => {
    expect(isPal('123212')).toBe(false)
  });
});
