const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let result = []
  arr.forEach((i) => {
    if (arr[i] === '--double-next') {
      result.push(arr[i + 1])
    } else if (arr[i] === '--discard-prev') {
      result.pop()
    } else {
      result.push(arr[i])
    }
  })
  return result
}

module.exports = {
  transform
};
