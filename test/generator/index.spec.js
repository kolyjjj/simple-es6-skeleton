'use strict';

import assert from 'assert';
import range from '../../src/generator/index';

describe('generator test', ()=>{
  it('should return a generator which has next method given start and end', ()=>{
    let aRange = range(2,5);
    assert.deepEqual(aRange.next(), {value:2,done:false});
    assert.deepEqual(aRange.next(), {value:3,done:false});
    assert.deepEqual(aRange.next(), {value:4,done:false});
    assert.deepEqual(aRange.next(), {value:5,done:false});
    assert.deepEqual(aRange.next(), {value:undefined,done:true});
  });

  it('should return a generator which can be iterated', ()=>{
    let aRange = range(2,5);
    let result = [];
    for (let n of aRange) {
      result.push(n);
    }
    assert.deepEqual(result, [2,3,4,5]);
  });

});


