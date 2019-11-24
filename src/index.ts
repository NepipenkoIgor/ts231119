// interface IPoint {
//     x: number;
//
//     sum(): number;
// }
//
// class BasePoint implements IPoint {
//     private z: number = 3;
//
//     public constructor(
//         public readonly x: number,
//         protected y: number
//     ) {
//
//     }
//
//     public sum(): number {
//         return this.x + this.y + this.z;
//     }
// }
//
// class Point extends BasePoint {
//     public constructor(
//         x: number,
//         y: number
//     ) {
//         super(x, y);
//     }
// }
//
// const p = new Point(2, 2);


class Singleton {
    private static _instance: Singleton;

    private constructor() {
    }

    public static getInstance(): Singleton {
        if (!Singleton._instance) {
            Singleton._instance = new Singleton();
        }
        return Singleton._instance;
    }
}

const inst1: Singleton = Singleton.getInstance();
const inst2: Singleton = Singleton.getInstance();
const inst3: Singleton = Singleton.getInstance();
