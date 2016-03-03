'use strict';

import assert from 'assert';
import {name} from '../src/index';

describe('Array', ()=>{
 describe('#indexOf()',()=>{
    it('should return -1 when the value is not present', ()=>{
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

describe('A test to test things imported', ()=>{
  it('should return koly given the name', ()=>{
    assert.equal('koly', name);
  });
});
