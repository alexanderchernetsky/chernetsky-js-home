'use strict';

var johnExpenses = {
  bills: [124, 48, 268, 180, 42], // dollars
  calcTip: function () {
    var tips = [];
    for (var i = 0; i < this.bills.length; i++) {
      if (this.bills[i] <= 50) {
        tips.push(0.2 * this.bills[i]);
      }
      if (this.bills[i] > 50 && this.bills[i] <= 200) {
        tips.push(0.15 * this.bills[i]);
      }
      if (this.bills[i] > 200) {
        tips.push(0.1 * this.bills[i]);
      }
    }
    return tips;
  }
};

console.log(johnExpenses.calcTip());
