function Logging(message: string) {
  console.log('Logging Factory');
  return function Logging(constructor: Function) {
    console.log(message);
    console.log(constructor);
  }
}

function Component(template: string, selector: string) {
  console.log('Component Factory')
  return function <T extends { new(...args: any[]): { name: string, age: number } }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        const mountedElement = document.querySelector(selector);
        console.log('Component')
        const instance = new constructor();
        if (mountedElement) {
          mountedElement.innerHTML = template;
          mountedElement.querySelector('h1')!.textContent = instance.name
        }
      }
    }
  }
}

function PropertyLogging(target: any, propertyKey: string) {
  console.log('propertyLogging');
  console.log(target);
  console.log(propertyKey);
}

@Logging('Logging User')
@Component('<h1>{{name}}</h1>', '#app')
class User {
  @PropertyLogging
  static name2 = 'Quill';
  name = 'Quill';
  constructor(public age: number) {
    console.log('User was created!')
  }
}