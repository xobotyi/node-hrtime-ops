import { subtract } from "../../src";

describe('operations#add', function() {
    it('should be defined', function() {
        expect(subtract).toBeDefined();
    });

    it('should return the sum of two hrtime results', function() {
        expect(subtract([0, 1], [0, 3])).toEqual([0, -2]);
        expect(subtract([0, -1], [0, -3])).toEqual([0, 2]);
        expect(subtract([1, -3], [2, 10])).toEqual([-1, -13]);
        expect(subtract([1, -3], [2, -3])).toEqual([-1, 0]);
    });

    it('should handle nanoseconds overflow for 0 leading seconds', function() {
        expect(subtract([0, -1E9], [0, 3])).toEqual([-1, -3]);
        expect(subtract([0, -1E9], [0, 0])).toEqual([-1, 0]);
        expect(subtract([0, 1E9], [0, -3])).toEqual([1, 3]);
        expect(subtract([0, 1E9], [0, 0])).toEqual([1, 0]);
    });

    it('should handle nanoseconds overflow for positive leading seconds', function() {
        expect(subtract([1, -3], [-2, -2])).toEqual([2, 1E9 - 1]);
        expect(subtract([2, -1E9 - 3], [-2, -2])).toEqual([2, 1E9 - 1]);
        expect(subtract([1, 1E9], [-2, -2])).toEqual([4, 2]);
        expect(subtract([1, 1E9], [-2, -0])).toEqual([4, 0]);
    });

    it('should handle nanoseconds overflow for negative leading seconds', function() {
        expect(subtract([-1, 3], [2, 2])).toEqual([-2, -1E9 + 1]);
        expect(subtract([-2, 1E9 + 3], [2, 2])).toEqual([-2, -1E9 + 1]);
        expect(subtract([-1, -1E9], [2, 2])).toEqual([-4, -2]);
        expect(subtract([-1, -1E9], [2, 0])).toEqual([-4, 0]);
    });
});
