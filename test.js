const { range } = require('ramda')
const isTriangular = require('./isTriangular')

const listOfSomeTriangulars = [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120]
const zeroToOneHundredTwenty = range(0, 121)

module.exports = [
  ...zeroToOneHundredTwenty
    .map(n => listOfSomeTriangulars.includes(n)
      ? ({
        description: `isTriangular(${n}) === true`,
        test: () => isTriangular(n),
        shouldEqual: true
      })
      : ({
        description: `isTriangular(${n}) === false`,
        test: () => isTriangular(n),
        shouldEqual: false
      })
    )
]
