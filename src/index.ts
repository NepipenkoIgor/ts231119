// let sn: string | number = '1';
// let user: { name: string } & { age: number } | number = {name: 'Ihor', age: 33};

type worker = {
    id: number,
    salary?: number,
    info: {
        male: boolean;
    };
};

type IStudent = {
    id: string;
    name: string;
    lectures: string[];
} & worker ;

type ITeacher = {
    id: number;
    name: string;
    lessons: string[];
} & worker;

let obj: Object;

function getSubjects(person: ITeacher & Object | IStudent) {
    if ('lessons' in person) {
        return person.lessons;
    }
    return person.lectures;
}

let a: Omit
