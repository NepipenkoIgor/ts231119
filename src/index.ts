let anyType: any = null;
anyType.a = 1;
anyType['a'] = 1;
anyType = {};
anyType();

let objType: Object = {a: 1};
objType.a = 1;
objType['a'] = 1;
objType = {};
objType();
objType = 1;
Object.create(objType);


let obj1Type: object = {a: 1};
obj1Type.a = 1;
obj1Type['a'] = 1;
obj1Type = {};
obj1Type();
obj1Type = null;
Object.create(objType);


let unkType: unknown = null;
unkType.a.b = 1;
unkType['a'] = 1;
unkType = {};
unkType();
unkType = {};
unkType = 1;
unkType = null;


let voidType: void = undefined;

function fn(): void {

}
