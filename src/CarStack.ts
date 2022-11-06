import {
    Field,
    SmartContract,
    state,
    State,
    method,
    DeployArgs,
    Permissions
} from 'snarkyjs';

export class CarStack extends SmartContract {
    @state(Field) odo = State<Field>();

    deploy(args: DeployArgs) {
        super.deploy(args);
        this.setPermissions({
            ...Permissions.default(),
            editState: Permissions.proofOrSignature(),
        });
    }

    @method init() {
        this.odo.set(Field(0));
    }

    @method update(odometer: Field) {
        const currentState = this.odo.get();
        this.odo.assertEquals(currentState);
        odometer.assertEquals(currentState.add(10));
        this.odo.set(odometer);
    }
}