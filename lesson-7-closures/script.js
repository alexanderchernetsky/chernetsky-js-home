'use strict';

var sum = function (a) {
  return function (b) {
    return a + b;
  };
};

console.log(sum(1)(2));
console.log(sum(5)(-1));

var interviewQuestion = function (jobTitle) {
  return function (name) {
    if (!jobTitle || !isNaN(parseInt(jobTitle))) {
      return false;
    }
    if (!name || !isNaN(parseInt(name))) {
      return false;
    }
    var question;
    if (jobTitle === 'designer') {
      question = name + ' can you please explain what UX design is?';
    } else if (jobTitle === 'teacher') {
      question = 'What subject do you teach ' + name + '?';
    } else {
      question = 'Hello ' + name + ', what do you do?';
    }
    return question;
  };
};

console.log(interviewQuestion('designer')('John'));
console.log(interviewQuestion('teacher')('John'));
console.log(interviewQuestion('plumber')('John'));

module.exports = interviewQuestion;
