import { CalculateScorePipe } from './calculate-score.pipe';

describe('CalculateScorePipe', () => {
  const pipe: CalculateScorePipe = new CalculateScorePipe();

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns null for input', () => {
    expect(pipe.transform(null)).toStrictEqual(null);
  });
});
