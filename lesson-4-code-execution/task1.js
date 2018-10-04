'use strict';

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

module.exports = defineTheBestEmployee;
