export type HighResTime = [number, number];

function fixNanoOverflow(t: HighResTime): HighResTime {
  if (t[0] > 0 && t[1] < 0) {
    const rem = t[1] % 1E9;

    t[0] += (t[1] - rem) / 1E9 - 1;
    t[1] = 1E9 + rem;
  } else if (t[0] < 0 && t[1] > 0) {
    const rem = t[1] % 1E9;

    t[0] += (t[1] - rem) / 1E9 + 1;
    t[1] = -1E9 + rem;
  } else if (t[1] >= 1E9 || t[1] <= -1E9) {
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
 * Returns sum of two hrtime tuples
 *
 * @param t1 [number. number]
 * @param t2 [number. number]
 */
export function add(t1: HighResTime, t2: HighResTime): HighResTime {
  return fixNanoOverflow([t1[0] + t2[0], t1[1] + t2[1]]);
}

/**
 * Returns difference of two hrtime tuples
 *
 * @param t1 [number. number]
 * @param t2 [number. number]
 */
export function subtract(t1: HighResTime, t2: HighResTime): HighResTime {
  return fixNanoOverflow([t1[0] - t2[0], t1[1] - t2[1]]);
}
