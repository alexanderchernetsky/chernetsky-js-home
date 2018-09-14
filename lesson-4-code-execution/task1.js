'use strict';

var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};

var tasksCompleted2 = {
  'Anna': 35,
  'Serg': 35,
  'Elena': 35,
  'Anton': 35
};

var tasksCompleted3 = {
  'Gena': 0,
  'Anna': 39,
  'Alex': 121,
  'John': 99
};

var tasksCompleted4 = {};

function defineTheBestEmployee(obj) {
  function isEmpty(obj) {
    for (var key in obj) {
      return false;
    }
    return true;
  }
  if (!isEmpty(obj)) {
    var maxTasks = 0;
    var maxName = '';
    for (var name in obj) {
      if (maxTasks < obj[name]) {
        maxTasks = obj[name];
        maxName = name;
      }
    }
    return maxName;
  } else {
    return 'empty object';
  }
}

console.log(defineTheBestEmployee(tasksCompleted));
console.log(defineTheBestEmployee(tasksCompleted2));
console.log(defineTheBestEmployee(tasksCompleted3));
console.log(defineTheBestEmployee(tasksCompleted4));
module.exports = defineTheBestEmployee;
