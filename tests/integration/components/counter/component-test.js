import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { click } from '@ember/test-helpers';

module('Integration | Component | counter', function (hooks) {
  setupRenderingTest(hooks);

  test('it shows default counter value', async function (assert) {
    await render(hbs`<Counter />`);

    assert.dom('.count').hasText('Count: 1');
  });

  test('it increments count value by 1 when inc button is clicked', async function (assert) {
    await render(hbs`<Counter />`);

    assert.dom('.count').hasText('Count: 1');
    await click('.bt-inc');

    assert.dom('.count').hasText('Count: 2');
  });

  test('it decrements count value by 1 when dec button is clicked', async function (assert) {
    await render(hbs`<Counter />`);

    assert.dom('.count').hasText('Count: 1');
    await click('.bt-dec');

    assert.dom('.count').hasText('Count: 0');
  });

  test('it changes text color when count > 3', async function (assert) {
    await render(hbs`<Counter />`);

    assert.dom('.count').hasText('Count: 1');

    await click('.bt-inc');
    assert.dom('.count').doesNotHaveClass('red');

    await click('.bt-inc');
    assert.dom('.count').doesNotHaveClass('red');

    await click('.bt-inc');
    assert.dom('.count').hasClass('red');
  });

  test('it has maxCount property', async function (assert) {
    await render(hbs`<Counter @maxCount={{5}} />`);

    assert.dom('.count').hasText('Count: 1');

    await click('.bt-inc');
    await click('.bt-inc');
    await click('.bt-inc');
    await click('.bt-inc');

    assert.dom('.bt-inc').isDisabled();
  });
});
