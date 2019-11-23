const user: {
    readonly firstName: string,
    readonly age?: number,
} = {
    firstName: 'Ihor',
};

user.age = 22;
let map: {
    [userName: string]: typeof user,
} = {
    'Ihor': {
        firstName: 'Ihor',
    },
};

let arr1: ReadonlyArray<number> = [1, 2];
let arr2: typeof arr1[] = [[1, 2, 3], [2, 3, 4]];
arr2[0].push();
arr1[100] = 1;
arr1[0] = 43;
type Interface = number | string | typeof user
let arr3: [Interface, Interface, Interface] = [{
    firstName: 'Ihor',
}, 'str', 1];

arr3[100] = 1;
arr3.push(3);


const arr = [10, 12] as const;
arr.push();
arr[100] = 1;

let obj = {
    firstName: 'Ihor',
} as const;
obj.firstName = 'Eugene';
