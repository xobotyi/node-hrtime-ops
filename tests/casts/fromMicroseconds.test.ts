import { fromMicroseconds, toMicroseconds } from "../../src";

describe('casts#fromSeconds', function() {
    it('should be defined', function() {
        expect(fromMicroseconds).toBeDefined();
    });

    it('should return array of two numbers', function() {
        const res = fromMicroseconds(toMicroseconds([1, 2]));

        expect(Array.isArray(res)).toBe(true);
        expect(res.length).toBe(2);
        expect(res).toEqual([1, 2]);
    });

    it('should cast number to hrtime tuple', function() {
        expect(fromMicroseconds(toMicroseconds([1, 2]))).toEqual([1, 2]);
        expect(fromMicroseconds(toMicroseconds([-1, -2]))).toEqual([-1, -2]);
        expect(fromMicroseconds(toMicroseconds([0, 0]))).toEqual([0, 0]);
    });
});
