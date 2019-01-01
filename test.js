const { range } = require('ramda')
const isTriangular = require('./isTriangular')
const getTriangularRootIndex = require('./getTriangularRootIndex')

const listOfSomeTriangulars = [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, 105, 120]
const zeroToOneHundredTwenty = range(0, 121)

const getClosestLowerTriangularIndex = (n, index = 0) => {
  if (
    listOfSomeTriangulars[index] <= n &&
    (
      listOfSomeTriangulars[index + 1] > n ||
      index + 1 === listOfSomeTriangulars.length
    )
  ) {
    return index
  }

  return getClosestLowerTriangularIndex(n, index + 1)
}

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
    ),
  ...zeroToOneHundredTwenty
    .map(n => ({
      description: `getTriangularRootIndex(${n}) === ${getClosestLowerTriangularIndex(n)}`,
      test: () => getTriangularRootIndex(n),
      shouldEqual: getClosestLowerTriangularIndex(n),
    }))
]
