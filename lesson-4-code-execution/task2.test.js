var multiplyNumeric = require('./task2');

describe('function multiplyNumeric test', () => {
  it('multiply numbers in object', () => {
    var image = {
      width: 100,
      height: 400,
      title: 'Cool image'
    };
    expect(multiplyNumeric(image)).toEqual({width: 200, height: 800, title: 'Cool image'});
  });
});
