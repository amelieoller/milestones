import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | container', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the content inside a container', async function (assert) {
    await render(hbs`<Container>Hello World</Container>`);

    assert.dom('.container').exists();
    assert.dom('.container').hasText('Hello World');
    assert.dom('.container .w-full').exists();
  });
});
