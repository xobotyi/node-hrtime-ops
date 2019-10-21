# node-hrtime-ops

[![NPM Version](https://badgen.net/npm/v/node-hrtime-ops)](https://www.npmjs.com/package/node-hrtime-ops)
[![NPM Downloads](https://badgen.net/npm/dw/node-hrtime-ops)](https://www.npmjs.com/package/node-hrtime-ops)
[![Build status](https://badgen.net/travis/xobotyi/node-hrtime-ops)](https://travis-ci.org/xobotyi/node-hrtime-ops)
[![Codacy grade](https://badgen.net/codacy/grade/604c2e0a1f544603bc26aa66e05dcf19)](https://app.codacy.com/manual/xobotyi/node-hrtime-ops/dashboard)
[![Codacy coverage](https://badgen.net/codacy/coverage/604c2e0a1f544603bc26aa66e05dcf19)](https://app.codacy.com/manual/xobotyi/node-hrtime-ops/dashboard)
[![License](https://badgen.net/npm/license/node-hrtime-ops)](https://www.npmjs.com/package/node-hrtime-ops)

🙌 A set of handy-dandy functions to cast, compare and process [hrtime](https://nodejs.org/dist/latest-v12.x/docs/api/process.html#process_process_hrtime_time) tuples.

### Install
```shell script
yarn add node-hrtime-ops
```

### Usage

```javascript
import { isGreater, toMilliseconds } from "node-hrtime-ops";

const start = process.hrtime();

// do stuff

const elapsed = process.hrtime(start);

if(isGreater(elapsed, [2, 5 * 1E9/2])){ // it will be true only if 2.5 seconds passed
    console.log(`Script evaluation took ${toMilliseconds(elapsed)}ms`);
}
```

### Docs

#### Equations

A common equation operations. Accepts two tuples returned from `process.hrtime()` or arrays alike that.  
Comparison made from left to right, meaning that `isGreater(t1, t2)` equals `t1 > t2`.
 
- **`isEqual(`**`t1: [number, number], t2: [number, number]`**`)`**_`=> boolean`_
- **`isGreater(`**`t1: [number, number], t2: [number, number]`**`)`**_`=> boolean`_
- **`isGreaterOrEqual(`**`t1: [number, number], t2: [number, number]`**`)`**_`=> boolean`_
- **`isLess(`**`t1: [number, number], t2: [number, number]`**`)`**_`=> boolean`_
- **`isLessOrEqual(`**`t1: [number, number], t2: [number, number]`**`)`**_`=> boolean`_

#### Operations

Basic arithmetic operations as if it were simple numbers.

- **`add(`**`t1: [number, number], t2: [number, number]`**`)`**_`=> [number, number]`_
- **`subtract(`**`t1: [number, number], t2: [number, number]`**`)`**_`=> [number, number]`_

#### Casts

Transformations between hrtime tuple and numbers.

- **`toSeconds(`**`t: [number, number]`**`)`**_`=> number`_ &mdash; Transforms tuple to a float, where integer part is seconds, 4ex: casts `[1, 2]` to `1.000000002`.
- **`toMilliseconds(`**`t: [number, number]`**`)`**_`=> number`_ &mdash; Transforms tuple to a float, where integer part is milliseconds, 4ex: casts `[1, 2]` to `1000.000002`.
- **`toMicroseconds(`**`t: [number, number]`**`)`**_`=> number`_ &mdash; Transforms tuple to a float, where integer part is microseconds, 4ex: casts `[1, 2]` to `1000000.002`.
- **`toNanoseconds(`**`t: [number, number]`**`)`**_`=> bigint`_ &mdash; Transforms tuple to a bigint representing nanoseconds, 4ex: casts `[1, 2]` to `1000000002n`.
- **`fromSeconds(`**`t: number`**`)`**_`=> [number, number]`_
- **`fromMilliseconds(`**`t: number`**`)`**_`=> [number, number]`_
- **`fromMicroseconds(`**`t: number`**`)`**_`=> [number, number]`_
- **`fromNanoseconds(`**`t: bigint`**`)`**_`=> [number, number]`_
