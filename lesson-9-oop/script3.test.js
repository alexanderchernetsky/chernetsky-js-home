var anClean = require('./script3');

describe('anClean function test', () => {
  it('all the anagrams will be deleted from our array', () => {
    var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
    expect(anClean(arr)).toEqual(['воз', 'киборг', 'корсет']);
  });
});
