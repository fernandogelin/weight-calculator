import { module, test } from 'qunit';
import { setupTest } from 'weight-calc/tests/helpers';

module('Unit | Service | weights', function (hooks) {
    setupTest(hooks);

    // TODO: Replace this with your real tests.
    test('it exists', function (assert) {
        let service = this.owner.lookup('service:weights');
        assert.ok(service);
    });
});
