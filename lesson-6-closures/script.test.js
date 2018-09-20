var johnExpenses = require('./script');
var calcAverageTip = require('./script');

describe('function calcAverageTip test', () => {
  it('sgsgs', () => {
    var tipsArray = [10, 20, 30];
    expect(calcAverageTip(tipsArray)).toBe(20);
});
