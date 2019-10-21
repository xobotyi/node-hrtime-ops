import { isGreater } from "../../src"

describe('equations#isGreater', function() {
    it('should be defined', function() {
        expect(isGreater).toBeDefined();
    });

    it('should return true if 1st hrtime is strictly greater than 2nd', function() {
        expect(isGreater([1, 2], [1, 0])).toBe(true);
        expect(isGreater([2, 2], [1, 0])).toBe(true);
    });

    it('should return false otherwise', function() {
        expect(isGreater([1, 0], [1, 0])).toBe(false);
        expect(isGreater([1, 2], [2, 0])).toBe(false);
        expect(isGreater([1, 2], [1, 3])).toBe(false);
    });
});
