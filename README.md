# node-hrtime-ops

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

if(isGreater(elapsed, [2, 5 * 1E5])){ // it will be true only if 2.5 seconds passed
    console.log(`Script evaluation took ${toMilliseconds(elapsed)}ms`);
}
```


### Docs

#### Equations

A common equation operations. Accepts two tuples returned from `process.hrtime()` or arrays alike that.  
Comparison made from left to right, meaning that `isGreater(t1, t2)` equals `t1 > t2`.
 
- **`isEqual(`**`t1: [number, number], t2: [number, number]`**`)`**`=> boolean`
- **`isGreater(`**`t1: [number, number], t2: [number, number]`**`)`**`=> boolean`
- **`isGreaterOrEqual(`**`t1: [number, number], t2: [number, number]`**`)`**`=> boolean`
- **`isLess(`**`t1: [number, number], t2: [number, number]`**`)`**`=> boolean`
- **`isLessOrEqual(`**`t1: [number, number], t2: [number, number]`**`)`**`=> boolean`

#### Operations

Basic arithmetic operations as if it were simple numbers.

- **`add(`**`t1: [number, number], t2: [number, number]`**`)`**`=> [number, number]`
- **`subtract(`**`t1: [number, number], t2: [number, number]`**`)`**`=> [number, number]`

#### Casts

Transformations between hrtime tuple and numbers.

- **`toSeconds(`**`t: [number, number]`**`)`**`=> number` &mdash; Transforms tuple to a float, where integer part is seconds, 4ex: casts `[1, 2]` to `1.000000002`.
- **`toMilliseconds(`**`t: [number, number]`**`)`**`=> number` &mdash; Transforms tuple to a float, where integer part is milliseconds, 4ex: casts `[1, 2]` to `1000.000002`.
- **`toMicroseconds(`**`t: [number, number]`**`)`**`=> number` &mdash; Transforms tuple to a float, where integer part is microseconds, 4ex: casts `[1, 2]` to `1000000.002`.
- **`toNanoseconds(`**`t: [number, number]`**`)`**`=> bigint` &mdash; Transforms tuple to a bigint representing nanoseconds, 4ex: casts `[1, 2]` to `1000000002n`.
- **`fromSeconds(`**`t: number`**`)`**`=> [number, number]`
- **`fromMilliseconds(`**`t: number`**`)`**`=> [number, number]`
- **`fromMicroseconds(`**`t: number`**`)`**`=> [number, number]`
- **`fromNanoseconds(`**`t: bigint`**`)`**`=> [number, number]`
