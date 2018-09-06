describe('type tests', () => {
  it('2 is a number', () => {
    expect(typeof 2).toBe('number');
  });

  it('decimal is a number', () => {
    expect(typeof 0.2).toBe('number');
  });

  it('3e5 equal 300000', () => {
    expect(3e5).toBe(300000);
  });

  it('text is a string', () => {
    expect(typeof 'some text').toBe('string');
  });

  it('number in quotes is a string', () => {
    expect(typeof '55').toBe('string');
  });

  it('true is a boolean', () => {
    expect(typeof true).toBe('boolean');
  });

  it('false is a boolean', () => {
    expect(typeof false).toBe('boolean');
  });

  it('officially accepted mistake in JS', () => {
    expect(typeof null).toBe('object');
  });

  it('undefined has its own type undefined', () => {
    expect(typeof undefined).toBe('undefined');
  });

  it('variable without value has type undefined', () => {
    let someVar;
    expect(typeof someVar).toBe('undefined');
  });

  it('object', () => {
    const USER = { name: 'Vasiliy' };
    expect(typeof USER).toBe('object');
  });

  it('NaN is a number', () => {
    expect(typeof NaN).toBe('number');
  });

  it('NaN not equal NaN', () => {
    expect(NaN === NaN).toBeFalsy();
  });

  it('isNaN shows what is NaN', () => {
    expect(isNaN(NaN)).toBeTruthy();
  });

  it('null equal to undefined', () => {
    expect(undefined == null).toBeTruthy();
  });

  it('null not equal 0', () => {
    expect(null == 0).toBeFalsy();
  });

  it('undefined not equal 0', () => {
    expect(undefined === 0).toBeFalsy();
  });
});

let globalNumb = 26;
let globalNumb2 = 11;

beforeEach(() => {
  globalNumb = 26;
  globalNumb2 = 11;
});

describe('arithmetic operations tests', () => {
  it('20+10', () => {
    expect(20 + 10).toBe(30);
  });

  it('0.1+0.2 isnt 0,3', () => {
    expect(0.1 + 0.2).not.toBe(0.3);
  });

  it('0.1+0.2 isnt 0,3 but very close to it', () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3);
  });

  it('20-10', () => {
    expect(20 - 10).toBe(10);
  });

  it('20*10', () => {
    expect(20 * 10).toBe(200);
  });

  it('1/0', () => {
    expect(1 / 0).toBe(Infinity);
  });

  it('13%4', () => {
    expect(13 % 4).toBe(1);
  });

  it('-var', () => {
    const AGE = Infinity;
    expect(-AGE).toBe(-Infinity);
  });

  it('--26', () => {
    expect(--globalNumb).toBe(25);
  });

  it('++26', () => {
    expect(++globalNumb).toBe(27);
  });

  it('26++', () => {
    expect(globalNumb++).toBe(26);
  });

  it('26--', () => {
    expect(globalNumb--).toBe(26);
  });

  it('26 += 1', () => {
    expect(globalNumb += 1).toBe(27);
  });
  it('26 -= 1', () => {
    expect(globalNumb -= 1).toBe(25);
  });
  it('26 *= 2', () => {
    expect(globalNumb *= 2).toBe(52);
  });
  it('26 /= 2', () => {
    expect(globalNumb /= 2).toBe(13);
  });
});

describe('string operations tests', () => {
  it('gift+shop', () => {
    expect('gift' + 'shop').toBe('giftshop');
  });

  it('1+1 equal 11', () => {
    expect('1' + 1).toBe('11');
  });

  it('gift += shop', () => {
    let someWord = 'gift';
    expect(someWord += 'shop').toBe('giftshop');
  });
});

describe('comparison operations tests', () => {
  it('11<26', () => {
    expect(globalNumb2 < globalNumb).toBeTruthy();
  });

  it('undefined comparison with 0', () => {
    expect(undefined < 0).toBeFalsy();
  });

  it('26>11', () => {
    expect(globalNumb > globalNumb2).toBeTruthy();
  });

  it('null comparison with 0', () => {
    expect(null > 0).toBeFalsy();
  });

  it('null<=0', () => {
    expect(null <= 0).toBeTruthy();
  });

  it('26<=26', () => {
    expect(globalNumb <= 26).toBeTruthy();
  });

  it('number26==string26', () => {
    expect(globalNumb == '26').toBeTruthy();
  });

  it('number26===string26', () => {
    expect(globalNumb === '26').toBeFalsy();
  });

  it('number26!==string26', () => {
    expect(globalNumb !== '26').toBeTruthy();
  });

  it('number26!=string26', () => {
    expect(globalNumb != '26').toBeFalsy();
  });
});

let globalStr = 'foot';
let globalStr2 = 'ball';

beforeEach(() => {
  globalStr = 'foot';
  globalStr2 = 'ball';
});

describe('boolean operations tests', () => {
  it('foot && ball', () => {
    expect(globalStr && globalStr2).toBe('ball');
  });

  it('foot && null', () => {
    expect(globalStr && null).toBeNull();
  });

  it('foot || ball', () => {
    expect(globalStr || globalStr2).toBe('foot');
  });

  it('foot || null', () => {
    expect(globalStr || null).toBe('foot');
  });

  it('!(26>11)', () => {
    expect(!(globalNumb > globalNumb2)).toBeFalsy();
  });
});

describe('conversion of types tests', () => {
  it('parseInt string -2dollars', () => {
    expect(parseInt('-2dollars')).toBe(-2);
  });

  it('parseInt string dollars2', () => {
    expect(parseInt('dollars2')).toBe(NaN);
  });

  it('parseFloat string dollars2', () => {
    expect(parseFloat('dollars2')).toBe(NaN);
  });

  it('parseFloat string -2.5dollars', () => {
    expect(parseFloat('-2.5dollars')).toBe(-2.5);
  });

  it('transformation from string to number', () => {
    expect(Number('5')).toBe(5);
  });

  it('22kg doesnt transform from string to number', () => {
    expect(Number('22kg')).toBe(NaN);
  });

  it('string26 - number1', () => {
    expect('26' - 1).toBe(25);
  });

  it('26 ist NaN', () => {
    expect(isNaN(globalNumb)).toBeFalsy();
  });

  it('foot is NaN', () => {
    expect(isNaN(globalStr)).toBeTruthy();
  });

  it('NaN is NaN', () => {
    expect(isNaN(NaN)).toBeTruthy();
  });

  it('26 is a finite number', () => {
    expect(Number.isFinite(globalNumb)).toBeTruthy();
  });

  it('5/0 isnt a finite number', () => {
    expect(Number.isFinite(5 / 0)).toBeFalsy();
  });

  it('string 22kg isnt a finite number', () => {
    expect(Number.isFinite('22kg')).toBeFalsy();
  });

  it('conversion of number to string', () => {
    expect(String(33)).toBe('33');
  });

  it('conversion of number to string', () => {
    expect(globalNumb.toString()).toBe('26');
  });

  it('conversion of number to string', () => {
    expect(globalNumb.toString()).toBe('26');
  });

  it('concatenation of number2 and string2', () => {
    expect(2 + '2').toBe('22');
  });

  it('number conversation to boolean', () => {
    expect(Boolean(22)).toBeTruthy();
  });

  it('null conversation to boolean', () => {
    expect(Boolean(null)).toBeFalsy();
  });

  it('NaN conversation to boolean', () => {
    expect(Boolean(NaN)).toBeFalsy();
  });

  it('0 conversation to boolean', () => {
    expect(Boolean(0)).toBeFalsy();
  });
});

describe('object math tests', () => {
  it('pi', () => {
    expect(Math.PI).toBeCloseTo(3.14);
  });

  it('abs of -11', () => {
    expect(Math.abs(-11)).toBe(11);
  });

  it('max of 26 and 11', () => {
    expect(Math.max(globalNumb, globalNumb2)).toBe(26);
  });

  it('min of 26 and 11', () => {
    expect(Math.min(globalNumb, globalNumb2)).toBe(11);
  });

  it('round 3.5', () => {
    expect(Math.round(3.5)).toBe(4);
  });

  it('ceil 3.1', () => {
    expect(Math.ceil(3.1)).toBe(4);
  });

  it('floor 3.9', () => {
    expect(Math.floor(3.9)).toBe(3);
  });

  it('sqrt 10', () => {
    expect(Math.sqrt(10)).toBeCloseTo(3.16);
  });

  it('sqrt -10', () => {
    expect(Math.sqrt(-10)).toBe(NaN);
  });

  it('random', () => {
    globalNumb = Math.random();
    expect((globalNumb < 1) && (globalNumb > 0)).toBeTruthy();
  });

  it('sin', () => {
    expect(Math.sin(Math.PI / 2)).toBe(1);
  });

  it('cos', () => {
    expect(Math.cos(Math.PI)).toBe(-1);
  });

  it('tan', () => {
    expect(Math.tan(1)).toBeCloseTo(1.56);
  });
});

let globalText = 'Why do people covet the silly pieces of green cotton paper in their wallets?';
beforeEach(() => {
  globalText = 'Why do people covet the silly pieces of green cotton paper in their wallets?';
});

describe('string class tests', () => {
  it('foot string length', () => {
    expect(globalStr.length).toBe(4);
  });

  it('foot string length', () => {
    expect(globalStr.length).toBe(4);
  });

  it('foot string charAt 3', () => {
    expect(globalStr.charAt(3)).toBe('t');
  });

  it('foot string [3]', () => {
    expect(globalStr[3]).toBe('t');
  });

  it('string substr', () => {
    expect(globalText.substr(15)).toMatch(/wallets?/);
  });

  it('string substr', () => {
    expect(globalText.substr(15, 30)).not.toMatch(/wallets?/);
  });

  it('string slice', () => {
    expect(globalText.slice(0, 3)).toBe('Why');
  });

  it('string split', () => {
    expect(globalText.split(' ')).toContain('people');
  });

  it('string toLowerCase', () => {
    const UPSTR = 'HELLO I\'M ROBOT!';
    expect(UPSTR.toLowerCase()).toBe('hello i\'m robot!');
  });

  it('string toUpperCase', () => {
    expect(globalStr.toUpperCase()).toBe('FOOT');
  });

  it('string indexOf', () => {
    expect(globalText.indexOf('people')).not.toBe(-1);
  });

  it('string indexOf from defined position', () => {
    expect(globalText.indexOf('people, 20')).toBe(-1);
  });

  it('string lastIndexOf', () => {
    expect(globalText.lastIndexOf('people')).not.toBe(-1);
  });

  it('string lastIndexOf from defined position', () => {
    expect(globalText.lastIndexOf('people', 20)).not.toBe(-1);
  });

  it('string replace', () => {
    expect(globalText.replace('people', 'women')).toContain('women');
  });

  it('string trim', () => {
    globalStr = '  green\n ';
    expect(globalStr.trim()).toBe('green');
  });
});

let globalArray = ['Richard', 'Erlich', 'Gilfoyle'];
beforeEach(() => {
  globalArray = ['Richard', 'Erlich', 'Gilfoyle'];
});

describe('array operations tests', () => {
  it('foot && ball', () => {
    expect(globalStr && globalStr2).toBe('ball');
  });
});