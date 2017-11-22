const analyse = require('./../controllers/analyse');

describe('analyse', () => {
  it('deals with simple afinn', () => {
    expect(analyse('i have ability')).toEqual({ score: 2, comp: 0.67 });
  });
});
