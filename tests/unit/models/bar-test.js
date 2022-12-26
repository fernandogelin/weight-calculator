import { module, test } from 'qunit';
import { setupTest } from 'weight-calc/tests/helpers';

module('Unit | Model | bar', function (hooks) {
    setupTest(hooks);

    // Replace this with your real tests.
    test('it exists', function (assert) {
        let store = this.owner.lookup('service:store');
        let model = store.createRecord('bar', {});
        assert.ok(model);
    });
});
