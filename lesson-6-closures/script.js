'use strict';

var johnExpenses = {
  bills: [124, 48, 268, 180, 42], // dollars
  calcTip: function () {
    this.tips = [];
    this.paidAmounts = [];
    for (var i = 0; i < this.bills.length; i++) {
      if (this.bills[i] <= 50) {
        this.tips.push(0.2 * this.bills[i]);
        this.paidAmounts.push(0.2 * this.bills[i] + this.bills[i]);
      }
      if (this.bills[i] > 50 && this.bills[i] <= 200) {
        this.tips.push(0.15 * this.bills[i]);
        this.paidAmounts.push(0.15 * this.bills[i] + this.bills[i]);
      }
      if (this.bills[i] > 200) {
        this.tips.push(0.1 * this.bills[i]);
        this.paidAmounts.push(0.1 * this.bills[i] + this.bills[i]);
      }
    }
    return 0;
  }
};

johnExpenses.calcTip();

console.log(johnExpenses.tips);
console.log(johnExpenses.paidAmounts);

var markExpenses = {
  bills: [77, 375, 110, 45], // dollars
  calcTip: function () {
    this.tips = [];
    this.paidAmounts = [];
    for (var i = 0; i < this.bills.length; i++) {
      if (this.bills[i] <= 100) {
        this.tips.push(0.2 * this.bills[i]);
        this.paidAmounts.push(0.2 * this.bills[i] + this.bills[i]);
      }
      if (this.bills[i] > 100 && this.bills[i] <= 300) {
        this.tips.push(0.1 * this.bills[i]);
        this.paidAmounts.push(0.15 * this.bills[i] + this.bills[i]);
      }
      if (this.bills[i] > 300) {
        this.tips.push(0.25 * this.bills[i]);
        this.paidAmounts.push(0.1 * this.bills[i] + this.bills[i]);
      }
    }
    return 0;
  }
};

markExpenses.calcTip();

console.log(markExpenses.tips);
console.log(markExpenses.paidAmounts);

function calcAverageTip(someArray) {
  var tipSum = 0;
  for (var i = 0; i < someArray.length; i++) {
    tipSum += someArray[i];
  }
  return tipSum / someArray.length;
}

var johnAverageTip = calcAverageTip(johnExpenses.tips);
var markAverageTip = calcAverageTip(markExpenses.tips);

if (johnAverageTip > markAverageTip) {
  console.log('Johns family paid the highest tips on average');
} else if (markAverageTip > johnAverageTip) {
  console.log('Marks family paid the highest tips on average');
} else {
  console.log('Both families paid the same tips on average');
}

module.exports.johnExpenses = johnExpenses;
module.exports.markExpenses = markExpenses;
module.exports.calcAverageTip = calcAverageTip;
