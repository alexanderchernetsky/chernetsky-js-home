var defineTheBestEmployee = require('./task1');

var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};

describe('function defineTheBestEmployee test', () => {
  it('who completed more tasks than others', () => {
    expect(defineTheBestEmployee(tasksCompleted)).toBe('Anton');
  });
});

var tasksCompleted2 = {
  'Gena': 0,
  'Anna': 39,
  'Alex': 121,
  'John': 99
};

describe('function defineTheBestEmployee test', () => {
  it('who completed more tasks than others', () => {
    expect(defineTheBestEmployee(tasksCompleted2)).toBe('Alex');
  });
});

var tasksCompleted3 = {};

describe('function defineTheBestEmployee test', () => {
  it('who completed more tasks than others', () => {
    expect(defineTheBestEmployee(tasksCompleted3)).toBe('empty object');
  });
});