const cleanUp = require('./../controllers/cleanUp');

describe('cleanUp', () => {
  it('removes all punctuation', () => {
    expect(cleanUp('hello, i h*ve punctuation *)&% everywhere')).toEqual('hello i h ve punctuation everywhere');
  });

  it('trims whitespace', () => {
    expect(cleanUp('hello      extra \nspaces')).toEqual('hello extra spaces');
  });
});
