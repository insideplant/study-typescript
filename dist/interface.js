"use strict";
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
const nameable = {
    name: 'Quill',
    nickName: 'Quilla'
};
class Developer {
    constructor(age, engeneer, name) {
        this.age = age;
        this.engeneer = engeneer;
        this.name = name;
    }
    greeting(message = 'hello') {
        console.log(message);
    }
}
const tmpDeveloper = {
    name: 'Quill',
    age: 38,
    experience: 3,
    greeting(message) {
        console.log(message);
    }
};
const user = new Developer(38, 3, 'Quil');
const tmpUser = new Developer(38, 5);
tmpUser.greeting();
