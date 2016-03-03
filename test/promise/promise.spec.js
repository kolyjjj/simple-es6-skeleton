'use strict';

import should from 'should';
import {aPromise, anotherPromise, resolvedPromise, timeoutPromise} from '../../src/promise/promise';


describe('promise', _=>{
  it('should be newed for creation', function(done){
    this.timeout(3000);
    aPromise.should.be.an.instanceOf(Promise);
    // this will throw exception like done invoked with non-error
    //timeoutPromise.should.be.fulfilled().then(done, done); 
    timeoutPromise.should.be.fulfilled().then(_=>done(), _=>done());
  });

  // cannot use _ => {..} here, don't know why
  it('should be thenable', () =>{
    aPromise.should.have.property('then');
  });

  it('should resolve', function(done){
    
    aPromise.then((data)=>{
     data.should.be.exactly(5);
    })
    .then(done, done);
  });

  it('should reject', function(done){
    anotherPromise.then(_=>{}, err => {
     err.should.be.exactly('error message'); 
    })
    .then(done, done);
  });

  it('should get all resolved value using all', function(done){
    Promise.all([aPromise, resolvedPromise])
    .then(data => {data.should.deepEqual([5, 'a good resolve'])})
    .then(done, done);
  });

  it('should reject once one promise reject using promise all', function(done){
    Promise.all([aPromise, resolvedPromise, anotherPromise])
    .catch(err => {
      err.should.be.exactly('error message');
    })
    .then(done, done);
  });

  it('should return once a promise resolves using promise race', function(done){
    Promise.race([aPromise, timeoutPromise])
    .then(data => {
      data.should.be.exactly(5);
    })
    .then(done, done);
  });

  it('catch is just like a then function with undefined success handler', function(done){
   anotherPromise.catch(err => {
     err.should.be.exactly('error message') ;
   }) 
   .then(done, done);
  });

  it('should chain', function(done){
    aPromise.then(data=>resolvedPromise)
    .then(data=>timeoutPromise)
    .then(data => {
      data.should.be.exactly('timeout promise');
    })
    .then(done, done);
  })

  it('should catch the first promise error', function(done){
    anotherPromise.then(data=>aPromise)
    .then(data=>resolvedPromise)
    .catch(err=>{
      err.should.be.exactly('error message');
    })
    .then(done, done);
  });

  it('shold catch the second promise error', function(done){
    aPromise.then(data=>anotherPromise)
    .then(data => resolvedPromise)
    .catch(err=>{
      err.should.be.exactly('error message');
    })
    .then(done, done);
  });

  // if it is function(done), then done should be called somewhere inside the function
  it('should not have finally property', function(){
    aPromise.should.not.have.property('finally');
  })
});
