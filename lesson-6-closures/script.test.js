var exportedObj = require('./script');
var calcAverageTip = exportedObj.calcAverageTip;
var johnExpenses = exportedObj.johnExpenses;
var markExpenses = exportedObj.markExpenses;

describe('method calcTip from johnExpenses object tests', () => {
  it('count tips from array with some bills', () => {
    johnExpenses.bills = [40, 160, 300];
    johnExpenses.calcTip();
    expect(johnExpenses.tips).toEqual([8, 24, 30]);
  });

  it('count tips from another array with zero bills', () => {
    johnExpenses.bills = [40, 0, 0];
    johnExpenses.calcTip();
    expect(johnExpenses.tips).toEqual([8, 0, 0]);
  });
});

describe('method calcTip from markExpenses object tests', () => {
  it('count tips from array with some bills', () => {
    markExpenses.bills = [80, 140, 500];
    markExpenses.calcTip();
    expect(markExpenses.tips).toEqual([16, 14, 125]);
  });

  it('count tips from another array with zero bills', () => {
    markExpenses.bills = [40, 0, 0];
    markExpenses.calcTip();
    expect(markExpenses.tips).toEqual([8, 0, 0]);
  });
});

describe('function calcAverageTip test', () => {
  it('the average tip from array of tips with different values', () => {
    var tipsArray = [10, 20, 30];
    expect(calcAverageTip(tipsArray)).toBe(20);
  });

  it('the average tip from array of tips which consists from one tip value', () => {
    var tipsArray = [10];
    expect(calcAverageTip(tipsArray)).toBe(10);
  });
});
