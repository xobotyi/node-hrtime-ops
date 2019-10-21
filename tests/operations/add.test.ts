import { add } from '../../src';

describe('operations#add', function() {
  it('should be defined', function() {
    expect(add).toBeDefined();
  });

  it('should return the sum of two hrtime results', function() {
    expect(add([0, 1], [0, 3])).toEqual([0, 4]);
    expect(add([0, -1], [0, -3])).toEqual([0, -4]);
    expect(add([1, -3], [2, 10])).toEqual([3, 7]);
    expect(add([1, -3], [2, 3])).toEqual([3, 0]);
  });

  it('should handle nanoseconds overflow for 0 leading seconds', function() {
    expect(add([0, -1E9], [0, -3])).toEqual([-1, -3]);
    expect(add([0, -1E9], [0, 0])).toEqual([-1, 0]);
    expect(add([0, 1E9], [0, 3])).toEqual([1, 3]);
    expect(add([0, 1E9], [0, 0])).toEqual([1, 0]);
  });

  it('should handle nanoseconds overflow for positive leading seconds', function() {
    expect(add([1, -3], [2, 2])).toEqual([2, 1E9 - 1]);
    expect(add([2, -1E9 - 3], [2, 2])).toEqual([2, 1E9 - 1]);
    expect(add([1, 1E9], [2, 2])).toEqual([4, 2]);
    expect(add([1, 1E9], [2, 0])).toEqual([4, 0]);
  });

  it('should handle nanoseconds overflow for negative leading seconds', function() {
    expect(add([-1, 3], [-2, -2])).toEqual([-2, -1E9 + 1]);
    expect(add([-2, 1E9 + 3], [-2, -2])).toEqual([-2, -1E9 + 1]);
    expect(add([-1, -1E9], [-2, -2])).toEqual([-4, -2]);
    expect(add([-1, -1E9], [-2, 0])).toEqual([-4, 0]);
  });
});
