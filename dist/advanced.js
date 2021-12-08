"use strict";
var _a, _b, _c;
// interface EngineerBlogger extends Engineer, Blogger{}
const quill = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000
};
function toUpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x;
}
const upperHello = function (x) { return 0; };
let unionFunc;
unionFunc = function (a) { return 34; };
function describeNomadWorkerProfile(nomadWorker) {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
class Dog {
    constructor() {
        this.kind = 'dog';
    }
    speak() {
        console.log('bow-wow');
    }
}
class Bird {
    constructor() {
        this.kind = 'bird';
    }
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}
function havePet(pet) {
    pet.speak();
    switch (pet.kind) {
        case 'bird':
            pet.fly();
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());
const input = document.getElementById('input');
document.getElementById('input').value = 'initial';
const designer = {
    name: 'Quill',
    3: 'afa',
};
const downloadedData = {
    id: 1
};
console.log((_b = (_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
const userData = (_c = downloadedData.user) !== null && _c !== void 0 ? _c : 'no-user';
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
})(Color || (Color = {}));
class AdvancedPerson {
    constructor() {
        this.name = 'Peter';
        this.age = 35;
    }
}
class AdvancedCar {
    constructor() {
        this.name = 'Prius';
        this.age = 35;
    }
}
let target = new AdvancedPerson();
let source = new AdvancedCar();
target = source;
function advancedFn(...args) {
}
advancedFn(0, 1);
const milk = 'milk';
let drink = milk;
const array = [10, 20];
const peter = {
    name: 'Peter',
    age: 38
};
