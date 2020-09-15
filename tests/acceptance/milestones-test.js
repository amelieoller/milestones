import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | milestones', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /about', async function (assert) {
    await visit('/about');

    assert.equal(currentURL(), '/about');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('About Milestones');

    assert.dom('a[href="/"]').hasText('Home');
    await click('a[href="/"]');

    assert.equal(currentURL(), '/');
  });

  test('visiting /', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Your Milestones');
  });

  test('navigating using the navbar', async function (assert) {
    await visit('/');

    assert.dom('nav').exists();
    assert.dom('nav .menu-home').hasText('Home');
    assert.dom('nav .menu-about').hasText('About');

    await click('nav .menu-home');
    assert.equal(currentURL(), '/');

    await click('nav .menu-about');
    assert.equal(currentURL(), '/about');
  });
});
