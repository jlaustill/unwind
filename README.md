[![Build Status](https://travis-ci.org/jlaustill/unwind.svg?branch=master)](https://travis-ci.org/jlaustill/unwind)

# unwind
MongoDB's unwind for everyday javascript use.

## Basic usage
npm i -S @jlaustill/unwind

```
const unwind = require('@jlaustill/unwind').default;

const test = [{
    a: 1,
    b: [1, 2, 3]
}];

const result = unwind(test, 'b');

console.log(result);
```
```
[ { a: 1, b: 1 }, { a: 1, b: 2 }, { a: 1, b: 3 } ]
```

