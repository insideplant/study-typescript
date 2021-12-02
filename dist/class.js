"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = 32;
        this.id = 31;
        this.name = 'hehh';
        this.id = 30;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`);
    }
}
let person2;
const quill = new Person('Quill', 38);
quill.incrementAge();
quill.greeting();
console.log(quill.id);
