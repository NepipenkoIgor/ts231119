/// <reference lib="es2015" />
export function sum(...values: (string | number)[]): number {
    return values.reduce((acc: number, next: string | number) => {
        if (!isString(next)) {
            return acc += next;
        }
        return acc += Number.isNaN(parseInt(next))
            ? 0
            : parseInt(next);
    }, 0);
}


function isString(param: string | number): param is string {
    return typeof param === "string";
}

