import { module, test } from 'qunit';
import { setupTest } from 'ember-ministore/tests/helpers';

module('Unit | Route | plants', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:plants');
    assert.ok(route);
  });
});
