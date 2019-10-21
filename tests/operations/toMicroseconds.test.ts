import { toMicroseconds } from "../../src";

describe('operations#toMilliseconds', function() {
    it('should be defined', function() {
        expect(toMicroseconds).toBeDefined();
    });

    it('should return float number', function() {
        expect(typeof toMicroseconds([1, 2])).toBe('number');
        expect(toMicroseconds([1, 2]) % 1).not.toBe(0);
    });

    it('should return a float number, integer part is microseconds', function() {
        expect(toMicroseconds([1, 2])).toBe(1000000.002);
    });
});
