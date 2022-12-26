import { module, test } from 'qunit';
import { setupTest } from 'weight-calc/tests/helpers';

module('Unit | Model | plate', function (hooks) {
    setupTest(hooks);

    // Replace this with your real tests.
    test('it exists', function (assert) {
        let store = this.owner.lookup('service:store');
        let model = store.createRecord('plate', {});
        assert.ok(model);
    });
});
