const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS0STRINGPLUS00PLUS00PLUS** ?? ''STRINGPLUS00PLUS00PLU*/

function repeater(str, options) {
  let result = Array(options.repeatTimes).fill(String(str) + Array(options.additionRepeatTimes).fill(options.addition === undefined ? '' : String(options.addition)).join(options.additionSeparator ?? '|')).join(options.separator ?? '+');
  return result;
}

module.exports = {
  repeater
};
