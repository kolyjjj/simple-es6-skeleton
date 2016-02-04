'use strict';

function* range(start, end){
  for (let i = start; i <= end; i++) {
    yield i;
  }
};

export function* sayFullName() {
  let firstName = yield 'first name';
  let secondName = yield 'second name';
  return firstName + ',' + secondName;
}

export default range;
