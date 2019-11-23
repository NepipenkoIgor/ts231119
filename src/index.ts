// interface IPoint {
//     x: number;
//     y: number;
// }
//
// type Point = {
//     x: number;
//     y: number;
// }
//
// let obj1: {
//     x: number;
//     y: number;
// };
//
// let obj2: IPoint;
//
// let obj3: Point;

// interface IFn {
//     (x: number, y: number): number;
// }
//
// type Fn = (x: number, y: number) => number;
//
// let fn: (x: number, y: number) => number = (_x: number, _y: number) => {
//     return 2;
// };
// let fn1: IFn = (_x: number, _y: number) => {
//     return 2;
// };
// let fn2: Fn = (_x: number, _y: number) => {
//     return 2;
// };
//
// let fn3: (x: number, y: number) => number;

// type PointX = { x: number };
//
// interface IPointY {
//     y: number;
// }
//
// type Point = PointX & IPointY;
//
// interface IPoint extends PointX, IPointY {
//
// }
//
// let p1: Point = {
//     x: 1,
//     y: 1,
// };
//
// let p2: IPoint = {
//     x: 1,
//     y: 1,
// };
//
// class Point1 implements Point {
//     x = 1;
//     y = 1;
// }
// class Point2 implements IPoint {
//     x = 1;
//     y = 1;
// }
//  type SNB = string | number | boolean;


// type Point =  {
//     y: number;
// };
// type Point =  {
//     x: number;
// };


let p: Point = {
    x: 1,
    y: 1,
};


interface Point {
    y: number;
}

interface Point {
    x: number;
}

let a: Record
