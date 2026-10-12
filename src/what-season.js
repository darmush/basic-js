const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  const month = (new Date(date)).getMonth() + 1
  return month < 3 || month === 12
    ? 'winter' : month > 8
      ? 'autumn' : month > 5
        ? 'summer' : month > 2
          ? 'spring' : 'Unable to determine the time of year!'
}

module.exports = {
  getSeason
};
