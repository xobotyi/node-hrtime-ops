import { HighResTime } from './operations';

/**
 * Casts hrtime tuple to a float representation, where integer part is seconds
 *
 * @param t [number, number]
 */
export function toSeconds(t: HighResTime): number {
    return (t[0] * 1E9 + t[1]) / 1E9;
}

/**
 * Casts hrtime tuple to a float representation, where integer part is milliseconds
 *
 * @param t [number, number]
 */
export function toMilliseconds(t: HighResTime): number {
    return (t[0] * 1E9 + t[1]) / 1E6;
}

/**
 * Casts hrtime tuple to a float representation, where integer part is microseconds
 *
 * @param t [number, number]
 */
export function toMicroseconds(t: HighResTime): number {
    return (t[0] * 1E9 + t[1]) / 1E3;
}

/**
 * Casts hrtime tuple to a BigInt representation in nanoseconds
 *
 * @param t [number, number]
 */
export function toNanoseconds(t: HighResTime): bigint {
    /* istanbul ignore next */
    if (typeof BigInt === 'undefined') {
        throw Error('BigInt is not supported in your version of nodejs. To use BigInt upgrade to version 10.4.0 or higher.');
    }

    return BigInt(t[0] * 1E9 + t[1]);
}

/**
 * Returns a hrtime value created from provided number
 *
 * @param t number
 */
export function fromSeconds(t: number): HighResTime {
    const nano = ~~(t * 1E9);
    return [~~(nano / 1E9), nano % 1E9];
}

/**
 * Returns a hrtime value created from provided number
 *
 * @param t number
 */
export function fromMilliseconds(t: number): HighResTime {
    const nano = ~~(t * 1E6);
    return [~~(nano / 1E9), nano % 1E9];
}

/**
 * Returns a hrtime value created from provided number
 *
 * @param t number
 */
export function fromMicroseconds(t: number): HighResTime {
    const nano = ~~(t * 1E3);
    return [~~(nano / 1E9), nano % 1E9];
}

/**
 * Returns a hrtime value created from provided number
 *
 * @param t number
 */
export function fromNanoseconds(t: bigint): HighResTime {
    return [Number(~~(t / BigInt(1E9))), Number(t % BigInt(1E9))];
}
