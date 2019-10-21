import { toMilliseconds } from "../../src";

describe('operations#toMilliseconds', function() {
    it('should be defined', function() {
        expect(toMilliseconds).toBeDefined();
    });

    it('should return float number', function() {
        expect(typeof toMilliseconds([1, 2])).toBe('number');
        expect(toMilliseconds([1, 2]) % 1).not.toBe(0);
    });

    it('should return a float number, integer part is milliseconds', function() {
        expect(toMilliseconds([1, 2])).toBe(1000.000002);
    });
});
