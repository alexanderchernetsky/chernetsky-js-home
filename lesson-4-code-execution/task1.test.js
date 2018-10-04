var defineTheBestEmployee = require('./task1');

describe('function defineTheBestEmployee test', () => {
  it('who completed more tasks than others', () => {
    var tasksCompleted = {
      'Anna': 29,
      'Serg': 35,
      'Elena': 1,
      'Anton': 99
    };
    expect(defineTheBestEmployee(tasksCompleted)).toBe('Anton');
  });

  it('who completed more tasks than others', () => {
    var tasksCompleted2 = {
      'Gena': 0,
      'Anna': 39,
      'Alex': 121,
      'John': 99
    };
    expect(defineTheBestEmployee(tasksCompleted2)).toBe('Alex');
  });

  it('what will happen if the object is empty', () => {
    var tasksCompleted3 = {};
    expect(defineTheBestEmployee(tasksCompleted3)).toBe('empty object');
  });
});
