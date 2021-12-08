let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

const person = {
  name: {
    first: 'jack',
    last: 'Smith'},
  age: 21
}

const fruits: (string | number)[] = ['Apple', 'Banana', 'Grape', 1]
fruits.push(21)

const fruit = fruits[0];

const book: [string, number, boolean] = ['business', 1500, false]

enum CoffeeSize {
  SHORT,
  TALL,
  GRANDE,
  VENTI
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}

coffee.size = CoffeeSize.SHORT;
console.log(CoffeeSize.SHORT);

let anything: any = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.fhdfjdf = 'hhdfkdf';
console.log(anything);
let banana = 'banana';
banana = anything;
console.log(banana);


let unionType: (number | string)[] = [10, 'hello'];

type ClothSize = 'small' | 'medium' | 'large'

const apple = 'hello'
let clothSize: ClothSize = 'large';

const cloth: {
  color: string;
  size: 'small' | 'medium' | 'large'
} = {
  color: 'white',
  size: clothSize
}


function add (num1:number, num2:number):number {
  return num1 + num2
}

function sayHello():void {
  console.log('Hello');
}

console.log(sayHello());
let tmp2: undefined;

const anotherAdd: (n1: number, n2: number) => number = function (num1:number, num2:number):number {
  return num1 + num2
};

const doubleNumber: (num: number) => number = number =>  number*2;

function doubleAndHandle(num: number, cb: (num: number) => void): void {
  const doubleNum = cb(num *2);
  console.log(doubleNum);
  console.log(num * 2);
};

doubleAndHandle(21, doubleNum => {
  return doubleNum
});

let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
  text = unknownInput;
}