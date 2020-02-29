import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | test-component', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`<TestComponent />`);

    assert.dom().hasText('Some content.');

    await render(hbs`
      <TestComponent>
        template block text
      </TestComponent>
    `);

    assert.dom().hasText('template block text');
  });
});
