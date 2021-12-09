"use strict";
let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
const person = {
    name: {
        first: 'jack',
        last: 'Smith'
    },
    age: 21
};
const fruits = ['Apple', 'Banana', 'Grape', 1];
fruits.push(21);
const fruit = fruits[0];
const book = ['business', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.SHORT;
console.log(CoffeeSize.SHORT);
let anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.fhdfjdf = 'hhdfkdf';
console.log(anything);
let banana = 'banana';
banana = anything;
console.log(banana);
let unionType = [10, 'hello'];
const apple = 'hello';
let clothSize = 'large';
const cloth = {
    color: 'white',
    size: clothSize
};
function add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log('Hello');
}
console.log(sayHello());
let tmp2;
const anotherAdd = function (num1, num2) {
    return num1 + num2;
};
const doubleNumber = number => number * 2;
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
    console.log(num * 2);
}
;
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
let unknownInput;
let anyInput;
let text;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error'));
