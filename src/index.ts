type Constructable = new (...args: any[]) => {};

function Timestamped<BC extends Constructable>(Base: BC) {
    return class extends Base {
        timestamped = new Date();
    };
}

function Tagged<BC extends Constructable>(Base: BC) {
    return class extends Base {
        tagged = ['ts', 'js'];
    };
}


interface IPoint {
    x: number;

    sum(): number;
}

abstract class BasePoint implements IPoint {
    public abstract x: number;

    public getX(): number {
        return this.x;
    }

    public abstract sum(): number;
}

class Point extends BasePoint {
    public constructor(
        public x: number,
        public y: number
    ) {
        super();
    }

    public sum(): number {
        return 1;
    }
}

class MixedPoint extends Timestamped(Tagged(Point)) {

}

const p = new MixedPoint(2, 2);


