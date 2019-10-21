const performanceNow = require("performance-now");
const {
          isEqual, isGreater, isGreaterOrEqual, isLess, isLessOrEqual, toMicroseconds, toSeconds, toMilliseconds,
          add, fromSeconds,
      } = require("../");
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite();

suite.on('start', function(event) {
         event.currentTarget.name && console.log(event.currentTarget.name)
     })
     .on('cycle', function(event) {
         console.log('  ' + String(event.target));
     })
     .on('complete', function() {
         console.log('Fastest is ' + this.filter('fastest').map('name') + '\n');
     });

const referencePerformanceNow1 = performanceNow();
let referencePerformanceNow2;
const referenceProcessHrtime1 = process.hrtime();
let referenceProcessHrtime2;

suite.clone({ name: "Get" })
     .add('performanceNow()', () => {performanceNow();})
     .add('process.hrtime()', () => {process.hrtime();})
     .run();

suite.clone({ name: "Compare" })
     .add(
         'performanceNow()',
         () => {referencePerformanceNow2 >= referencePerformanceNow1},
         { onStart: () => {referencePerformanceNow2 = performanceNow()} },
     )
     .add(
         'process.hrtime() (raw)',
         () => {referenceProcessHrtime2 >= referenceProcessHrtime1},
         { onStart: () => {referenceProcessHrtime2 = process.hrtime()} },
     )
     .add(
         'process.hrtime() (cast to seconds)',
         () => {
             toSeconds(referenceProcessHrtime2) >= toSeconds(referenceProcessHrtime1)
         },
         { onStart: () => {referenceProcessHrtime2 = process.hrtime()} },
     )
     .add(
         'process.hrtime() (cast to milliseconds)',
         () => {
             toMilliseconds(referenceProcessHrtime2) >= toMilliseconds(referenceProcessHrtime1)
         },
         { onStart: () => {referenceProcessHrtime2 = process.hrtime()} },
     )
     .add(
         'process.hrtime() (cast to microseconds)',
         () => {
             toMicroseconds(referenceProcessHrtime2) >= toMicroseconds(referenceProcessHrtime1)
         },
         { onStart: () => {referenceProcessHrtime2 = process.hrtime()} },
     )
     .run();

suite.clone({ name: "Ops performance" })
     .add(
         'add()',
         () => { add(referenceProcessHrtime1, [1, 2]); },
     )
     .add(
         'cast and add',
         () => { fromSeconds(toSeconds(referenceProcessHrtime1) + toSeconds([1, 2])); },
     )
     .run();

suite.clone({ name: "Performance test" })
     .add(
         'isEqual()',
         () => { isEqual(referenceProcessHrtime2, referenceProcessHrtime1); },
         { onStart: () => {referenceProcessHrtime2 = process.hrtime()} },
     )
     .add(
         'isGreater()',
         () => { isGreater(referenceProcessHrtime2, referenceProcessHrtime1); },
         { onStart: () => {referenceProcessHrtime2 = process.hrtime()} },
     )
     .add(
         'isGreaterOrEqual()',
         () => { isGreaterOrEqual(referenceProcessHrtime2, referenceProcessHrtime1); },
         { onStart: () => {referenceProcessHrtime2 = process.hrtime()} },
     )
     .add(
         'isLess()',
         () => { isLess(referenceProcessHrtime2, referenceProcessHrtime1); },
         { onStart: () => {referenceProcessHrtime2 = process.hrtime()} },
     )
     .add(
         'isLessOrEqual()',
         () => { isLessOrEqual(referenceProcessHrtime2, referenceProcessHrtime1); },
         { onStart: () => {referenceProcessHrtime2 = process.hrtime()} },
     )
     .run();
