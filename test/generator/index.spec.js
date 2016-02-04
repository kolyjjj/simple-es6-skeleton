'use strict';

import assert from 'assert';
import range, {sayFullName} from '../../src/generator/index';

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
});


