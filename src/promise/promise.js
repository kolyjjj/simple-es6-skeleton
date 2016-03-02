'use strict';

const aPromise = new Promise(function(resolve, reject){
  console.log('resolving');
  resolve(5);
});

const anotherPromise = new Promise(function(resolve, reject) {
  reject('error message');
});

const resolvedPromise = new Promise(function(resolve, reject){
  resolve('a good resolve');
});

const timeoutPromise = new Promise(function(resolve, reject){
  setTimeout(()=>{
    resolve('timeout promise');
  }, 200);
});

export {aPromise, anotherPromise, resolvedPromise, timeoutPromise};

