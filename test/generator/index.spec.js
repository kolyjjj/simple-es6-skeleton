'use strict';

import assert from 'assert';
import range, {sayFullName, async} from '../../src/generator/index';

describe('generator test', ()=>{
  describe('as iterator', ()=>{
    it('should return a generator which has next method given start and end', ()=>{
      let aRange = range(2,5);
      // next is called to enter the generator function again, this is the second time, and the above line is the first time
      assert.deepEqual(aRange.next(), {value:2,done:false});
      assert.deepEqual(aRange.next(), {value:3,done:false});
      assert.deepEqual(aRange.next(), {value:4,done:false});
      assert.deepEqual(aRange.next(), {value:5,done:false});
      assert.deepEqual(aRange.next(), {value:undefined,done:true});
    });

    it('should return a generator which can be iterated', ()=>{
      let aRange = range(2,5);
      let result = [];
      // the result of a generator function is an iterator
      for (let n of aRange) {
        result.push(n);
      }
      assert.deepEqual(result, [2,3,4,5]);
    });
  });

  describe('pause and pass value in and out', ()=>{
    let say;
    beforeEach(()=>{
      say = sayFullName();
    });

    it('should pass and return value', ()=>{
      assert.deepEqual(say.next(), {value: 'first name', done: false});
      assert.deepEqual(say.next('koly'), {value: 'second name', done: false});
      assert.deepEqual(say.next('li'), {value: 'koly,li', done: true});
    });
  });

  describe('handle async scenario', ()=>{
    it('should return koly li given two async calls', function(done) {
      // this doesn't work, because B is faster than A, and sequence is not 
      this.timeout(100000);
      async.printLaterA('koly').printLaterB('li')
      .generator(function* gen(){
        let firstName = yield;
        let secondName = yield;
        let fullName = firstName + ',' + secondName;
        console.log(fullName);
        assert.equal(fullName, 'koly,li');
        done();
      })
      .run();
    });
  });
});


