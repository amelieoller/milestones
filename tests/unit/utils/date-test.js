import dateToString from 'milestones/utils/date';
import { module, test } from 'qunit';

module('Unit | Utility | date', function () {
  const date = new Date(2020, 6, 30);
  const validDateString = 'Jul 30th 2020';

  test('no input', function (assert) {
    assert.equal(dateToString(), dateToString(new Date()));
  });

  test('string input', function (assert) {
    assert.equal(dateToString('2020-07-30'), validDateString);
    assert.equal(dateToString('07/30/2020'), validDateString);
    assert.equal(dateToString('7/30/2020'), validDateString);
  });

  test('number input', function (assert) {
    assert.equal(dateToString(date.getTime()), validDateString);
  });

  test('date input', function (assert) {
    assert.equal(dateToString(date), validDateString);
  });

  test('formatting', function (assert) {
    assert.equal(dateToString('2020-1-21'), 'Jan 21st 2020');
    assert.equal(dateToString('2020-1-2'), 'Jan 2nd 2020');
    assert.equal(dateToString('2020-1-3'), 'Jan 3rd 2020');
    assert.equal(dateToString('2020-1-4'), 'Jan 4th 2020');
    assert.equal(dateToString('2020-1-11'), 'Jan 11th 2020');
  });

  test('valid edge cases', function (assert) {
    assert.equal(dateToString('1/1/2020'), 'Jan 1st 2020');
    assert.equal(dateToString('2020-12-31'), 'Dec 31st 2020');
  });

  test('invalid edge cases', function (assert) {
    assert.equal(dateToString('2019-2-29'), null); // Non-leap year
    assert.equal(dateToString('2020-2-29'), 'Feb 29th 2020'); // Leap year
    assert.equal(dateToString('2020-4-31'), null); // No 31st in Apr
  });

  test('invalid inputs', function (assert) {
    assert.equal(dateToString('7'), null);
    assert.equal(dateToString('7/30'), null);
    assert.equal(dateToString('30/2020'), null);
    assert.equal(dateToString('30/2020/12'), null);
    assert.equal(dateToString(null), null);
    assert.equal(dateToString(''), null);
    assert.equal(dateToString([]), null);
    assert.equal(dateToString({}), null);
  });
});
