'use strict';

import assert from 'assert';
import primeNumber from '../../src/prime_number/index';

describe('prime number', ()=>{
  it('should return null if there is no prime number in the range', ()=>{
    assert.equal(primeNumber(14, 15), null); 
  });

})
