(function () {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function () {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function (ans) {
    if (ans === 'exit') {
      console.log('You have just interrupted the game!');
    } else {
      var answ = parseInt(ans);
      if (answ === this.correct) {
        console.log('Correct answer!');
        corrAnsCounter += 1;
      } else {
        console.log('Wrong answer. Try again :)');
        incorrAnsCounter += 1;
      }
    }
  };

  Question.prototype.logScore = function () {
    console.log('Your score:\n' + corrAnsCounter + '-correct answers\n' + incorrAnsCounter + '-incorrect answers ');
  };

  var q1 = new Question('Is JavaScript the coolest programming language in the world?',
    ['Yes', 'No'],
    0);

  var q2 = new Question('What is the name of this course\'s teacher?',
    ['John', 'Micheal', 'Jonas'],
    2);

  var q3 = new Question('What does best describe coding?',
    ['Boring', 'Hard', 'Fun', 'Tediuos'],
    2);

  var questions = [q1, q2, q3];

  var corrAnsCounter = 0;
  var incorrAnsCounter = 0;

  (function eternalQuiz() {
    do {
      var n = Math.floor(Math.random() * questions.length);
      questions[n].displayQuestion();
      var answer = (prompt('Please select the correct answer.'));
      questions[n].checkAnswer(answer);
      questions[n].logScore();
    } while (answer !== 'exit');
  })();
})();
