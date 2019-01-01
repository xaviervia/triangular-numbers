// https://en.wikipedia.org/wiki/Triangular_number#Triangular_roots_and_tests_for_triangular_numbers
module.exports = function (n) {
  return (
    Math.floor(
      ( Math.sqrt( ( 8 * n ) + 1 ) - 1 ) / 2
    )
  )
}
