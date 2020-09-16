import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | title', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the content inside the title', async function (assert) {
    await render(hbs`<Title>Hello World</Title>`);

    assert.dom('.title').exists();
    assert.dom('.title').hasText('Hello World');
  });
});
