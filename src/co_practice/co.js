'use strict';
import co from 'co';

export const myCo = () => {
  return co(function *(){
    // resolve multiple promises in parallel
    var a = Promise.resolve(1);
    var b = Promise.resolve(2);
    var c = Promise.resolve(3);
    var res = yield [a, b, c];
    console.log(res);
    // => [1, 2, 3]
  }).catch((err)=>{
    console.log(err.stack);
  });
};

export const anotherCo = () => {
  co(function* () {
    return yield Promise.resolve('hello');
  }).then(function (val) {
    console.log(val);
  }, function (err) {
    console.error(err.stack);
  });
};
