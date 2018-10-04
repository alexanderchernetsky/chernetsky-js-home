'use strict';

function miniQuiz() {
  function Question(someQuest, answers, correctAnswer) {
    this.quest = someQuest;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  var question1 = new Question('The Beatles were an English rock band formed in?', ['1-Paris', '2-Minsk', '3-New York', '4-Liverpool'], 4);
  var question2 = new Question('Who was the first heavy metal band?', ['1-Metallica', '2-Iron Maiden', '3-Black Sabbath', '4-Judas Priest'], 3);
  var question3 = new Question('Who is the Metallica frontman?', ['1-Lars Ulrich', '2-James Hetfield', '3-John Lennon', '4-Elvis Presley'], 2);

  var questArray = [question1, question2, question3];

  function randomDiap(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
  }

  var questionNumber = randomDiap(0, (questArray.length - 1));

  Question.prototype.printQuestionToConsole = function () {
    console.log('Question ' + (questionNumber + 1) + ': ' + this.quest + ' ' + this.answers);
  };

  questArray[questionNumber].printQuestionToConsole();

  var userAnswer = prompt('Please type the number of correct answer');

  Question.prototype.checkUserAnswer = function () {
    userAnswer = Number(userAnswer);
    if (userAnswer === this.correctAnswer) {
      console.log('You are right!');
    } else if (userAnswer === 0) {
      console.log('You didn\'t answer the question!');
    } else {
      console.log('You aren\'t right!');
    }
  };

  questArray[questionNumber].checkUserAnswer();
}

miniQuiz();
