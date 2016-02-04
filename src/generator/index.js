'use strict';

function* range(start, end){
  for (let i = start; i <= end; i++) {
    yield i;
  }
};

const async = {
  firstNameFunc: undefined,
  secondNameFunc: undefined,
  gen: undefined,
  printLaterA(s) {
    // simulate an async call
    this.firstNameFunc = ()=>{
      setTimeout(()=>{
        console.log('first name timeout running');
        this.gen.next(s);
      }, 3000);
    };
    return this;
  },
  printLaterB(s) {
    this.secondNameFunc = ()=>{
      console.log('second name timeout running');
      setTimeout(()=>{
        this.gen.next(s);
      }, 200);
    };
    return this;
  },
  generator(g) {
    this.gen = g();
    return this;
  },
  run() {
    // fire the simulated async call
    console.log('running');
    this.firstNameFunc();
    this.secondNameFunc();
    this.gen.next();
  }
};

export {async};

export function* sayFullName() {
  let firstName = yield 'first name';
  let secondName = yield 'second name';
  return firstName + ',' + secondName;
}

export default range;
