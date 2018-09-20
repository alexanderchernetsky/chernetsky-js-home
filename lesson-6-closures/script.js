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
