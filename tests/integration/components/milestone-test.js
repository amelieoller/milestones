import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | milestone', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a milestone card', async function (assert) {
    await render(hbs`
      <Milestone alt="Milestone Card" />
    `);

    assert.dom('.milestone').exists();
    assert.dom('.milestone img').hasAttribute('alt', 'Milestone Card');
  });
});
