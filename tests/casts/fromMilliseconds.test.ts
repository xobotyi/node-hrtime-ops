import { fromMilliseconds, toMilliseconds } from "../../src";

describe('casts#fromSeconds', function() {
    it('should be defined', function() {
        expect(fromMilliseconds).toBeDefined();
    });

    it('should return array of two numbers', function() {
        const res = fromMilliseconds(toMilliseconds([1, 2]));

        expect(Array.isArray(res)).toBe(true);
        expect(res.length).toBe(2);
        expect(res).toEqual([1, 2]);
    });

    it('should cast number to hrtime tuple', function() {
        expect(fromMilliseconds(toMilliseconds([1, 2]))).toEqual([1, 2]);
        expect(fromMilliseconds(toMilliseconds([-1, -2]))).toEqual([-1, -2]);
        expect(fromMilliseconds(toMilliseconds([0, 0]))).toEqual([0, 0]);
    });
});
