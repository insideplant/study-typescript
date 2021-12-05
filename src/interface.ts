// type addFunc = (num1: number, num2: number) => number;
interface addFunc {
  (num1: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (n1: number, n2) => {
  return n1 + n2;
}

interface NameAble {
  name?: string;
  nickName?: string;
}

const nameable: NameAble = {
  name: 'Quill',
  nickName: 'Quilla'
}

interface Human extends NameAble {
  age: number;
  greeting(message: string): void;
}

class Developer implements Human {
  constructor(public age: number, public engeneer: number,public name?: string ){}
    greeting(message: string = 'hello') {
      console.log(message);
    }
}

const tmpDeveloper = {
  name: 'Quill',
  age: 38,
  experience: 3,
  greeting(message: string){
    console.log(message);
  }
}

const user: Human = new Developer(38, 3, 'Quil');
const tmpUser = new Developer(38, 5);
tmpUser.greeting()