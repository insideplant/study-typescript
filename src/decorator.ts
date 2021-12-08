function Logging(constructor: Function) {
  console.log('Loading...');
  console.log(constructor);
}

@Logging
class User {
  name = 'Quill';
  constructor() {
    console.log('User was created!')
  }
}