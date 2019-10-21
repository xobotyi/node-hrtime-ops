import { isGreaterOrEqual } from '../../src';

describe('equations#isGreaterOrEqual', function() {
  it('should be defined', function() {
    expect(isGreaterOrEqual).toBeDefined();
  });

  it('should return true if 1st hrtime is greater or equals 2nd', function() {
    expect(isGreaterOrEqual([1, 2], [1, 0])).toBe(true);
    expect(isGreaterOrEqual([2, 2], [1, 0])).toBe(true);
    expect(isGreaterOrEqual([2, 2], [2, 2])).toBe(true);
  });

  it('should return false otherwise', function() {
    expect(isGreaterOrEqual([1, 2], [2, 0])).toBe(false);
    expect(isGreaterOrEqual([1, 2], [1, 3])).toBe(false);
  });
});
