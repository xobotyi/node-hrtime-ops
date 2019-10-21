import { toNanoseconds } from "../../src";

describe('casts#toMilliseconds', function() {
    it('should be defined', function() {
        expect(toNanoseconds).toBeDefined();
    });

    it('should return BigInt number', function() {
        expect(typeof toNanoseconds([1, 2])).toBe('bigint');
    });

    it('should return a BigInt number representing amount of nanoseconds', function() {
        expect(toNanoseconds([1, 2])).toBe(BigInt(1000000002));
    });
});
