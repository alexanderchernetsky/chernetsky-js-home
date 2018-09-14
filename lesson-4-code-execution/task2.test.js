var multiplyNumeric = require('./task1');

var image = {
  width: 100,
  height: 400,
  title: 'Cool image'
};

test('multiply only numbers', () => {
  expect(multiplyNumeric(image)).toEqual({width: 200, height: 800, title: 'Cool image'});
});
