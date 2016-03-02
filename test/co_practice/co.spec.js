'use strict';

import assert from 'assert';
import {myCo, anotherCo} from '../../src/co_practice/co';

describe('co practice', ()=>{
  it('should test in co', ()=>{
    var result = myCo();
    console.log('result', result);
  });

  it('should test co return pass value to then function', ()=>{
    let result = anotherCo();
    console.log('result', result);
  })
});
