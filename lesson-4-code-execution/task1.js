'use strict';

var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};

function defineTheBestEmployee(obj) {
  var maxTasks = 0;
  var maxName = '';
  for (var name in obj) {
    if (maxTasks < obj[name]) {
      maxTasks = obj[name];
      maxName = name;
    }
  }
  return maxName;
}

module.exports = defineTheBestEmployee;
