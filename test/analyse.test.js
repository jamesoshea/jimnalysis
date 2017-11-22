const analyse = require('./../controllers/analyse');

describe('analyse', () => {
  it('deals with simple afinn', () => {
    expect(analyse('i have ability')).toEqual({ score: 2, comp: 0.67 });
  });
  it('deals with negators', () => {
    expect(analyse('i have no lunatics')).toEqual({ score: 2, comp: 0.5 });
  });
  it('deals with intensifiers', () => {
    expect(analyse('you are very serene')).toEqual({ score: 4, comp: 1 });
  });
  it('deals with negator + intensifier', () => {
    expect(analyse('cats are not very nice')).toEqual({ score: -6, comp: -1.2 });
  });
});
