'use strict';

/**
 * Test if the given number is odd.
 * @param {integer} number - a whole number.  DO NOT enter a negative number!
 * @return {boolean} true if odd
 */
module.exports.isOdd = function isOdd(number) {
  var remaining = number;
  var isOdd = false;
  while (remaining--) {
    isOdd = !isOdd;
  }
  return isOdd;
};
