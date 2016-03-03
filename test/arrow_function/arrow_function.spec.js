'use strict';

import should from 'should';

describe.only('arrow function', _  => {
  // line below doesn't work, because mocha will pass done to the function, while _ doesn't accept parameter and () accept but omit parameters
  // it('simplest: function with no parameter and one return', _ => {
  it('function with no parameter and one return', () => {
    let aFunc = _ => 'one';
    aFunc().should.be.exactly('one');
  });

  it('function with one parameter and one return', ()=>{
    let aFunc = (a) => a;
    aFunc('hello').should.be.exactly('hello');
  });

  it('function with two parameters and one return', ()=>{
    let aFunc = (a, b) => a + b;
    aFunc(2,3).should.be.exactly(5);
  });

  it('function with no parameter and no return', ()=>{
    let aFunc = _ => {let a = 'one';};
    should(aFunc()).be.undefined(aFunc());
  });

  it('function with more than one statements inside', ()=>{
    let aFunc = (first, last) => {
      let full = first + last;
      return full;
    };
    aFunc('koly', 'li').should.be.exactly('kolyli');
  });

  it('function with no parameter and return object literal', ()=>{
    let aFunc = _ => ({one:1});
    aFunc().should.be.deepEqual({one:1});
  });

  it('function with default value', ()=>{
    let aFunc = (a, b = 3) => a + b;
    let allDefaultValues = (a = 'hello', b = 'world') => a + ' ' + b;
    aFunc(5, 4).should.be.exactly(9);
    aFunc(4).should.be.exactly(7);
    allDefaultValues().should.be.exactly('hello world');
    allDefaultValues('koly', 'li').should.be.exactly('koly li');
    allDefaultValues('koly').should.be.exactly('koly world');
  });

  it('destructuring within the parameter list', ()=>{
    let aFunc = ([a,b]) => a + b;
    aFunc([2,3]).should.be.exactly(5);
  });

  it('destructuring within the parameter list with default value', ()=>{
    let aFunc = ([a,b]=[2,3]) => a + b;
    aFunc().should.be.exactly(5);
    aFunc([3,8]).should.be.exactly(11);
    aFunc([10]).should.be.NaN();
  });
});
