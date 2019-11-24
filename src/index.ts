// T extends U ? X : N

type notUndefined<T> = T extends undefined | null ? never : T;
const nonUnd: notUndefined<string | undefined | null> = 1;


const arr: [(a: string) => { name: string, age: number }, string] =
    [() => ({name: 'Ihor', age: 33}), '1asd1241'];

type FirstType<T> =
    T extends [infer U, ...unknown[]]
        ? U extends (...args: infer Z) => any ? Z : never
        : T;

const bool: FirstType<typeof arr> = [1];

type FunctionParamsAndReturn<T> = T extends (...args: infer Args) => infer R ? Args | R : never;

function fn(_a: string, _cb: (s: string) => boolean): number {
    return 1;
}

const c: FunctionParamsAndReturn<typeof fn> = {a: 1};

type Acc = { name: string, age: number } | { male: true, info: { salary: number } } | null;


const nonNullAccount: NonNullable<Acc> = 1;
