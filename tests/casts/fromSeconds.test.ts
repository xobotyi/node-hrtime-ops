import { fromSeconds, toSeconds } from '../../src';

describe('casts#fromSeconds', function() {
  it('should be defined', function() {
    expect(fromSeconds).toBeDefined();
  });

  it('should return array of two numbers', function() {
    const res = fromSeconds(toSeconds([1, 2]));

    expect(Array.isArray(res)).toBe(true);
    expect(res.length).toBe(2);
    expect(res).toEqual([1, 2]);
  });

  it('should cast number to hrtime tuple', function() {
    expect(fromSeconds(toSeconds([1, 2]))).toEqual([1, 2]);
    expect(fromSeconds(toSeconds([-1, -2]))).toEqual([-1, -2]);
    expect(fromSeconds(toSeconds([0, 0]))).toEqual([0, 0]);
  });
});
