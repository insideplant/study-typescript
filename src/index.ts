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
console.log(coffee);

let unionType: (number | string)[] = [10, 'hello'];
const apple = 'hello'

type ClothSize = 'small' | 'medium' | 'large'

let clothSize:ClothSize  ='large'

function add (num1:number, num2:number):number {
  return num1 + num2
}

function sayHello():void {
  console.log('Hello');
}

const anotherAdd: (n1: number, n2: number) => number = function (num1:number, num2:number):number {
  return num1 + num2
}

function doubleAndHandle(num: number, cb: (num: number) => void): void {
  const doubleNum = cb(num *2);
  console.log(doubleNum);
  console.log(num * 2);
}

doubleAndHandle(21, doubleNum => {
  return doubleNum
})

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