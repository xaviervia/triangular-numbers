# triangular-numbers

Functions to work with [triangular numbers](https://en.wikipedia.org/wiki/Triangular_number):

## isTriangular

```javascript
import isTriangular from 'triangular-numbers/isTriangular'

console.log(isTriangular(3))
// > true

console.log(isTriangular(5))
// > false
```

## getNthTriangularNumber

```javascript
import getNthTriangularNumber from 'triangular-numbers/getNthTriangularNumber'

console.log(getNthTriangularNumber(1))
// > 1
console.log(getNthTriangularNumber(2))
// > 3
console.log(getNthTriangularNumber(3))
// > 6
console.log(getNthTriangularNumber(4))
// > 10
```

## getTriangularRootIndex

```javascript
import getTriangularRootIndex from 'triangular-numbers/getTriangularRootIndex'

console.log(getTriangularRootIndex(10))
// > 4
console.log(getTriangularRootIndex(11))
// > 4
console.log(getTriangularRootIndex(5))
// > 2
console.log(getTriangularRootIndex(4))
// > 2
console.log(getTriangularRootIndex(3))
// > 2
console.log(getTriangularRootIndex(2))
// > 1
```

## Installation

```
yarn add triangular-numbers
```

## License

MIT
