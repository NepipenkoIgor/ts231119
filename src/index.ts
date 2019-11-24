// interfaces,  alias , functions, classes

interface IAccount<GeneralInfo extends { male: boolean }, ID = string> {
    id: ID;
    name: string;
    info: GeneralInfo;
}

let admin: IAccount<{ email: string, male: boolean }> = {
    id: 'asdaq2123Dawq1e',
    name: 'Ihor',
    info: {
        male: true,
        email: 'info@gmail',
    },
};

let user: IAccount<{ phone: number, male: boolean }, number> = {
    id: 111,
    name: 'Ihor',
    info: {
        male: true,
        phone: 123113231,
    },
};

let str: string = 'sa';


function getProperty<Obj, Key extends keyof Obj>(obj: Obj, k: Key) {
    return obj[k];
}

const key = 'subjects';

getProperty(user, key);
