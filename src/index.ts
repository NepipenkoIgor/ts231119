import 'reflect-metadata';


const RANGE_KEY: unique symbol = Symbol('RANGE_KEY');

function Validate(target: Object, key: string, descriptor: PropertyDescriptor): void {
    const originalValue = descriptor.value;
    descriptor.value = (...args: unknown[]) => {
        const existingRange: { [key: number]: number[] } = Reflect.getMetadata(RANGE_KEY, target, key) || {};
        for (const paramIndex of Object.keys(existingRange)) {
            const [min, max] = existingRange[paramIndex as any];
            const paramValue = args[paramIndex as any] as number;
            if (paramValue < min || paramValue > max) {
                throw new Error(`Error in ${target.constructor.name} instance. Parameter of method ${key} on position ${paramIndex}
  out of range [${min}, ${max}]`);
            }
        }
        return originalValue(...args);
    };
}

function Range(
    min: number = 1,
    max: number = 10
) {
    return (target: Object, key: string, paramIndex: number) => {
        const existingRange: { [key: number]: number[] } = Reflect.getMetadata(RANGE_KEY, target, key) || {};
        existingRange[paramIndex] = [min, max];
        Reflect.defineMetadata(RANGE_KEY, existingRange, target, key);
    };
}

class Calculator {
    @Validate
    public updatePercentage(
        @Range(0, 100) _oldValue: number,
        @Range(0, 100) _newValue: number
    ) {

    }
}

const calculator = new Calculator();

calculator.updatePercentage(34, 35);
setTimeout(() => {
    calculator.updatePercentage(35, 150);
}, 5000);
