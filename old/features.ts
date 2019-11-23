let period: number = 60;
const baseUrl: string = 'http://localhost';


let firstName = 'Ihor';
let account = {
    firstName,
    getName() {
        return this.firstName;
    },
};

let person = {...account};
let dates = [...[11, 12, 13]];


let {firstName: myName} = person;
let [firstDate] = dates;


for (const d of dates) {
    console.log(d);
}

let sum = (a: number, b: number) => a + b;

class Point {
    x!: number;
    y!: number;
}


function userMessage([start, end]: TemplateStringsArray, {firstName: name}: typeof account): string {
    return `${start}${name}${end}`;
}

console.log(userMessage`Good day, ${person} !!`);

const date = dates.includes(1);

