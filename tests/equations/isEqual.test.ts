import { isEqual } from '../../src'

describe('equations#isEqual', function() {
  it('should be defined', function() {
    expect(isEqual).toBeDefined();
  });

  it('should return true if 1st hrtime equals 2nd', function() {
    expect(isEqual([1, 1], [1, 1])).toBe(true);
    expect(isEqual([0, 3], [0, 3])).toBe(true);
  });

  it('should return false otherwise', function() {
    expect(isEqual([1, 0], [1, 2])).toBe(false);
    expect(isEqual([1, 2], [2, 0])).toBe(false)
  });
});

