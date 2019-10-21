import { toSeconds } from "../../src";

describe('operations#toMilliseconds', function() {
    it('should be defined', function() {
        expect(toSeconds).toBeDefined();
    });

    it('should return float number', function() {
        expect(typeof toSeconds([1, 2])).toBe('number');
        expect(toSeconds([1, 2]) % 1).not.toBe(0);
    });

    it('should return a float number, integer part is seconds', function() {
        expect(toSeconds([1, 2])).toBe(1.000000002);
    });
});
