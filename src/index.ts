import { extends } from 'tslint/lib/configs/latest';

type NotReadonly<T> = {
    -readonly [P in keyof T]: T[P]
}

type Acc = {
    readonly firstName: string,
    readonly age: number,
};

let acc1: NotReadonly<Acc> = {
    firstName: 'Ihor',
    age: 33,
};

acc1.age = 22;

const cc: Record<'s' | { a: 1 }, string> = {s: 'some', 0: 'some'};

interface Info {
    info: { salary: number };
}

interface Person {
    name: string;
    age: number;
}

interface Accs extends Person, Info {

}

type RemoveByType<T, E> = {
    [P in keyof T]: E extends T[P] ? never : P
}[keyof T];

const p: RemoveByType<Person, { male: boolean, salary: number }> = 1;
