module.exports = function (n) {
  // it has to be a natural number
  if (Math.floor(n) === n && n >= 0) {
    var maybeNaturalSquareRoot = Math.sqrt(8*n + 1)

    // if it’s an integer, then it's triangular
    // (positive is a given,
    // since n is now assured to be a natural and real
    // of natural numbers are all positive)
    return (
      maybeNaturalSquareRoot === Math.floor(maybeNaturalSquareRoot)
    )
  }

  return false
}
