import { fromNanoseconds, toNanoseconds } from "../../src";

describe('casts#fromNanoseconds', function() {
    it('should be defined', function() {
        expect(fromNanoseconds).toBeDefined();
    });

    it('should return array of two numbers', function() {
        const res = fromNanoseconds(toNanoseconds([1, 2]));

        expect(Array.isArray(res)).toBe(true);
        expect(res.length).toBe(2);
        expect(res).toEqual([1, 2]);
    });

    it('should cast number to hrtime tuple', function() {
        expect(fromNanoseconds(toNanoseconds([1, 2]))).toEqual([1, 2]);
        expect(fromNanoseconds(toNanoseconds([-1, -2]))).toEqual([-1, -2]);
        expect(fromNanoseconds(toNanoseconds([0, 0]))).toEqual([0, 0]);
    });
});
