declare class UIElement {
    animate(options: AnimateOptions): void;
}

interface AnimateOptions {
    delayX: number;
    easing: 'ease-in' | 'ease-out';
}

new UIElement().animate({delayX: 1000, easing: 'ease-in'});

type Digit = 1 | 2 | 3 | 4 | true;
let num: Digit = true;

enum Actions {
    Top,
    Right,
    Left,
    Bottom,
};

let direction: keyof (typeof Actions) = 'Top';


interface IFact {
    factId: number;
    userFrom: string;
    userRole: string;
}

const uniqueValue = () => {
    return 'factId';
};

const dataList: { action: string, data: IFact }[] = [];

dataList.map((item: { action: string, data: IFact }) => {
    if (item.data[uniqueValue()] === 2) {

    }
    return item;
});

const person = {
    name: 'Ihor',
    age: 33,
    info: {
        male: true,
        name: 'Eugene',
    },
};
type Person = typeof person;
const keys: keyof Person = 'name';
const values: Person['name' | 'age' | 'info'] = {male: 1, name: 'Vasya'};

let str: AnimateOptions['easing'] = 1;
