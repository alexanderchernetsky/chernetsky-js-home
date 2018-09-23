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
});



