import { module, test } from 'qunit';
import { setupTest } from 'weight-calc/tests/helpers';

module('Unit | Controller | results', function (hooks) {
    setupTest(hooks);

    // TODO: Replace this with your real tests.
    test('it exists', function (assert) {
        let controller = this.owner.lookup('controller:results');
        assert.ok(controller);
    });
});
