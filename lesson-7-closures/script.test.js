var interviewQuestion = require('./script');

describe('interviewQuestion function tests', () => {
  it('what is the question if job title is teacher and name is Alex', () => {
    expect(interviewQuestion('teacher')('Alex')).toBe('What subject do you teach Alex?');
  });

  it('what is the question if job title is designer and name is Mark', () => {
    expect(interviewQuestion('designer')('Mark')).toBe('Mark can you please explain what UX design is?');
  });

  it('what is the question if job title is web developer and name is Jack', () => {
    expect(interviewQuestion('web developer')('Jack')).toBe('Hello Jack what do you do?');
  });

  it('what will happen if job title not entered', () => {
    expect(interviewQuestion()('Jack')).toBe(false);
  });

  it('what will happen if name is not entered', () => {
    expect(interviewQuestion('web developer')()).toBe(false);
  });

  it('what will happen if job title is a number', () => {
    expect(interviewQuestion('42')('Jack')).toBe(false);
  });

  it('what will happen if name is a number', () => {
    expect(interviewQuestion('web developer')('42')).toBe(false);
  });
});
