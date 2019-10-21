import { isLessOrEqual } from '../../src';

describe('equations#isLessOrEqual', function() {
  it('should be defined', function() {
    expect(isLessOrEqual).toBeDefined();
  });

  it('should return true if 1st hrtime is less or equals 2nd', function() {
    expect(isLessOrEqual([1, 0], [1, 2])).toBe(true);
    expect(isLessOrEqual([1, 0], [2, 2])).toBe(true);
    expect(isLessOrEqual([2, 2], [2, 2])).toBe(true);
  });

  it('should return false otherwise', function() {
    expect(isLessOrEqual([2, 0], [1, 2])).toBe(false);
    expect(isLessOrEqual([1, 3], [1, 2])).toBe(false);
  });
});
