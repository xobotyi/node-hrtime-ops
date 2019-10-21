import { HighResTime, toSeconds } from './operations';

/**
 * Returns true if both times are equal
 *
 * @param t1 [number, number]
 * @param t2 [number, number]
 */
export function isEqual(t1: HighResTime, t2: HighResTime): boolean {
    return toSeconds(t1) === toSeconds(t2);
}


/**
 * Returns true if first time is strictly greater than second
 *
 * @param t1 [number, number]
 * @param t2 [number, number]
 */
export function isGreater(t1: HighResTime, t2: HighResTime): boolean {
    return toSeconds(t1) > toSeconds(t2)
}


/**
 * Returns true if first time is greater or equals second
 *
 * @param t1 [number, number]
 * @param t2 [number, number]
 */
export function isGreaterOrEqual(t1: HighResTime, t2: HighResTime): boolean {
    return toSeconds(t1) >= toSeconds(t2)
}


/**
 * Returns true if first time is strictly less than second
 *
 * @param t1 [number, number]
 * @param t2 [number, number]
 */
export function isLess(t1: HighResTime, t2: HighResTime): boolean {
    return toSeconds(t1) < toSeconds(t2)
}


/**
 * Returns true if first time is less or equals second
 *
 * @param t1 [number, number]
 * @param t2 [number, number]
 */
export function isLessOrEqual(t1: HighResTime, t2: HighResTime): boolean {
    return toSeconds(t1) <= toSeconds(t2)
}
