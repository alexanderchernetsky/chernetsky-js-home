var defineTheBestEmployee = require('./task1');

var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};

test('who completed more tasks than others', () => {
  expect(defineTheBestEmployee(tasksCompleted)).toBe('Anton');
});

var tasksCompleted2 = {
  'Gena': 0,
  'Anna': 39,
  'Alex': 121,
  'John': 99
};

test('who completed more tasks than others', () => {
  expect(defineTheBestEmployee(tasksCompleted2)).toBe('Alex');
});