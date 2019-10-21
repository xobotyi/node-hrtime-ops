export type HighResTime = [number, number];

function fixNanoOverflow(t: HighResTime): HighResTime {
    if (t[0] > 0 && t[1] < 0) {
        const rem = t[1] % 1E9;

        t[0] += (t[1] - rem) / 1E9 - 1;
        t[1] = 1E9 + rem;
    }
    else if (t[0] < 0 && t[1] > 0) {
        const rem = t[1] % 1E9;

        t[0] += (t[1] - rem) / 1E9 + 1;
        t[1] = -1E9 + rem;
    }
    else if (t[1] >= 1E9 || t[1] <= -1E9) {
        const rem = t[1] % 1E9;

        t[0] += (t[1] - rem) / 1E9;
        t[1] = rem;
    }

    // fix negative zeros
    if (t[0] === -0) {t[0] = 0}
    if (t[1] === -0) {t[1] = 0}

    return t;
}

/**
 * Returns sum of two hrtime tags
 *
 * @param t1 [number. number]
 * @param t2 [number. number]
 */
export function add(t1: HighResTime, t2: HighResTime): HighResTime {
    return fixNanoOverflow([t1[0] + t2[0], t1[1] + t2[1]]);
}

/**
 * Returns difference of two hrtime tags
 *
 * @param t1 [number. number]
 * @param t2 [number. number]
 */
export function subtract(t1: HighResTime, t2: HighResTime): HighResTime {
    return fixNanoOverflow([t1[0] - t2[0], t1[1] - t2[1]]);
}

/**
 * Casts hrtime tag to a float representation, where integer part is seconds
 *
 * @param t [number, number]
 */
export function toSeconds(t: HighResTime): number {
    return (t[0] * 1E9 + t[1]) / 1E9;
}

/**
 * Casts hrtime tag to a float representation, where integer part is milliseconds
 *
 * @param t [number, number]
 */
export function toMilliseconds(t: HighResTime): number {
    return (t[0] * 1E9 + t[1]) / 1E6;
}

/**
 * Casts hrtime tag to a float representation, where integer part is microseconds
 *
 * @param t [number, number]
 */
export function toMicroseconds(t: HighResTime): number {
    return (t[0] * 1E9 + t[1]) / 1E3;
}

/**
 * Casts hrtime tag to a BigInt representation in nanoseconds
 *
 * @param t [number, number]
 */
export function toNanoseconds(t: HighResTime): BigInt {
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
