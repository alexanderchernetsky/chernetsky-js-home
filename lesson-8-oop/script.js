'use strict';

function myQuiz() {
  function Question(someQuest) {
    this.quest = someQuest;
    this.answer = [1, 2, 3, 4];
    this.correctAnswer = 3;
  }

  var question1 = new Question('The Beatles were an English rock band formed in? 1-New York 2-Minsk 3-Liverpool 4-Paris');
  var question2 = new Question('Who was the first heavy metal band?? 1-Metallica 2-Iron Maiden 3-Black Sabbath 4-Judas Priest');
  var question3 = new Question('Who is the Metallica frontman? 1-Lars Ulrich 2-John Lennon 3-James Alan Hetfield 4-Elvis Presley');

  var questArray = [question1, question2, question3];

  Question.prototype.printQuestionToConsole = function () {
    console.log(this.quest);
  };

  question1.printQuestionToConsole();

  var userAnswer = prompt('Please type the number of correct answer');

  Question.prototype.checkUserAnswer = function () {
    userAnswer = Number(userAnswer);
    if (userAnswer === this.correctAnswer) {
      console.log('You are right!');
    } else {
      console.log('You aren\'t right!');
    }
  };

  question1.checkUserAnswer();
}

myQuiz();
