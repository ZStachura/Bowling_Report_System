import { CalculateScorePipe } from './calculate-score.pipe';

describe('CalculateScorePipe', () => {
  const pipe: CalculateScorePipe = new CalculateScorePipe();


  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('it should count the score', () => {
    const scores = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
    expect(pipe.transform(scores)).toBe(80);
  });

  it('it should recognize strike', () => {
    const strike = [0,'X', 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
    expect(pipe.transform(strike)).toBe(38);
  });

  it('it should recognize spare', () => {
    const spare = [9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9, 1, 9]
    expect(pipe.transform(spare)).toBe(190);
  });
});
