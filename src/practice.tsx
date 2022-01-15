//const name = "hello";

let nameChange = "hello";
nameChange = "hello2";

let username = "Hello";
let dummyNum = 2;
let bool: boolean = true;

let array1 = [true, false, true];
let array2 = [0, 1, "hello"];


interface NAME {
  first: string;
  last: string | null;
}

let nameObj: NAME = {first: "YAMADA", last: null};

const func1 = (x:number, y: number) => {
  return x + y;
}
//Intersection Types
type PROFILE = {
    age: number;
    city: string;
}

type LOGIN = {
    username: string;
    password: string;
}

type USER = PROFILE & LOGIN;

const userA: USER = {
    age: 30,
    city: "Tokyo",
    username: "xxx",
    password: "yyy",
}
