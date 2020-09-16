import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | breadcrumb', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the content inside a breadcrumb', async function (assert) {
    await render(hbs`<Breadcrumb>Hello World</Breadcrumb>`);

    assert.dom('.carrot').exists();
    assert.dom('.carrot').hasText('<');

    assert.dom('.breadcrumb').exists();
    assert.dom('.breadcrumb').hasText('Hello World');
  });
});
