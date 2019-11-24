import 'reflect-metadata';

function checkTypeInRunTime(target: Object, key: string) {
    const {name: typeName} = Reflect.getMetadata('design:type', target, key);
    let val: unknown;
    Object.defineProperty(target, key, {
        get() {
            return val;
        },
        set(v: any): void {
            if (typeof v !== typeName.toLowerCase()) {
                throw new Error(`type for ${key} is not ${typeName}`);
            }
            val = v;
        },
    });
}

// function logMethodMetaData(target: Object, key: string, _descriptor: PropertyDescriptor) {
//     console.log(Reflect.getMetadata('design:type', target, key));
//     console.log(Reflect.getMetadata('design:paramtypes', target, key));
//     console.log(Reflect.getMetadata('design:returntype', target, key));
//     console.log(Reflect.getMetadata('design:typeinfo', target, key));
// }

class Person {
    @checkTypeInRunTime
    public firstName!: string;

    public setFullName(_middle: string, _surname: string): number {
        return 1;
    }

}

const p = new Person();

(p.firstName as any) = [];
