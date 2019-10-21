import { isLess } from "../../src"

describe('equations#isLess', function() {
    it('should be defined', function() {
        expect(isLess).toBeDefined();
    });

    it('should return true if 1st hrtime is strictly less than 2nd', function() {
        expect(isLess([1, 0], [1, 2])).toBe(true);
        expect(isLess([1, 0], [2, 2])).toBe(true);
    });

    it('should return false otherwise', function() {
        expect(isLess([1, 0], [1, 0])).toBe(false);
        expect(isLess([2, 0], [1, 2])).toBe(false);
        expect(isLess([1, 3], [1, 2])).toBe(false);
    });
});
