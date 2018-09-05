describe('type number tests', () => {
  it('2 is a number', () => {
    expect(typeof 2).toBe('number');
  });

  it('decimal is a number', () => {
    expect(typeof 0.2).toBe('number');
  });

  it('3e5 equal 300000', () => {
    expect(3e5).toBe(300000);
  });

  it('1/0', () => {
    expect(1 / 0).toBe(Infinity);
  });

  it('0.1+0.2 isnt 0,3', () => {
    expect(0.1 + 0.2).not.toBe(0.3);
  });

  it('transformation from string to number', () => {
    expect(Number('5')).toBe(5);
  });

  it('22kg doesnt transform from string to number', () => {
    expect(Number('22kg')).toBe(NaN);
  });

  it('33 is a finite number', () => {
    expect(Number.isFinite(33)).toBe(true);
  });

  it('5/0 isnt a finite number', () => {
    expect(Number.isFinite(5 / 0)).toBe(false);
  });
});
