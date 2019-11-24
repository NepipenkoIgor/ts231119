// function average(a: number, b: number, c: number): string {
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 2, 's');
// const num: number = average(1, 2, 1);

// function average(a: number, b?: number, c?: number): string {
//     if (b === undefined) {
//         b = 0;
//     }
//     if (c === undefined) {
//         c = 0;
//     }
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 2);
// average(1, 2, 's');
// const num: number = average(1, 2, 1);


// function average(a: number, b: number = 0, c: number = 0): string {
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 2);
// average(1, 2, 's');
// const num: number = average(1, 2, 1);
// type sn = string | number;
//
// function isString(item: sn): item is string {
//     return typeof item === 'string';
// }
//
// function average(...args: sn[]): string {
//     let total: number = 0;
//     for (const item of args) {
//         if (isString(item)) {
//             total += Number(item);
//             continue;
//         }
//         total += item;
//     }
//     const avg: number = total / args.length;
//     return `Average is ${avg}`;
// }
//
// Array.isArray();
// average(1);
// average(1, 2);
// average(1, 2, 2, 3, 4, 5, 6, 5);
// average(1, '2', 2, '3', 4, 5, 6, 5);
// average(1, 2, 's');
// const num: number = average(1, 2, 1);


type sn = string | number;

function isString(item: sn): item is string {
    return typeof item === 'string';
}

function average(a: number, b: string): string;
function average(a: number, b: number, c: string): string;
function average(a: string, b: number): string;
function average(_a: number | string, _b: number | string, _c?: string): string {
    // let total: number = 0;
    // for (const item of args) {
    //     if (isString(item)) {
    //         total += Number(item);
    //         continue;
    //     }
    //     total += item;
    // }
    // const avg: number = total / args.length;
    // return `Average is ${avg}`;
    return  'str';
}

average(1, '2');
average('1', 1);
average(1, 1, '1');

average('1', '2');
average(1);
average(1, 2);
average(1, 2, 2, 3, 4, 5, 6, 5);
average(1, '2', 2, '3', 4, 5, 6, 5);
average(1, 2, 's');
const num: Array = average(1, 2, 1);

