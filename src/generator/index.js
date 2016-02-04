'use strict';

function* range(start, end){
  for (let i = start; i <= end; i++) {
    yield i;
  }
};

const async = {
  firstNameFunc: undefined,
  secondNameFunc: undefined,
  genIterator: undefined,
  printLaterA(s) {
    this.firstNameFunc = ()=>{
      setTimeout(()=>{
        this.genIterator.next(s);
      }, 3000);
    };
    return this;
  },
  printLaterB(s) {
    this.secondNameFunc = ()=>{
      setTimeout(()=>{
        this.genIterator.next(s);
      }, 200);
    };
    return this;
  },
  generator(g) {
    this.genIterator = g(this.firstNameFunc, this.secondNameFunc);
    return this;
  },
  run() {
    // fire the simulated async call
    console.log('running');
    this.genIterator.next();
  }
};

export {async};

export function* sayFullName() {
  let firstName = yield 'first name';
  let secondName = yield 'second name';
  return firstName + ',' + secondName;
}

export default range;
