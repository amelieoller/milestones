import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | milestones', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /about', async function (assert) {
    await visit('/about');

    assert.equal(currentURL(), '/about');
    assert.dom('h1').hasText('About Milestones');

    assert.dom('a[href="/"]').hasText('Home');
    await click('a[href="/"]');

    assert.equal(currentURL(), '/');
  });
});
