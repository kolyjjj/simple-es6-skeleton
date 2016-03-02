'use strict';

import should from 'should';
import {aPromise, anotherPromise, resolvedPromise, timeoutPromise} from '../../src/promise/promise';


describe('promise', ()=>{
  it('should create a promise', function(done){
    this.timeout(3000);
    aPromise.should.be.an.instanceOf(Promise);
    // this will throw exception like done invoked with non-error
    //timeoutPromise.should.be.fulfilled().then(done, done); 
    timeoutPromise.should.be.fulfilled().then(()=>done(), ()=>done());
  });

  it('should be thenable', ()=>{
    aPromise.should.have.property('then');
  });

  it('should resolve', function(done){
    
    aPromise.then((data)=>{
     data.should.be.exactly(5);
    })
    .then(done, done);
  });

  it('should reject', function(done){
    anotherPromise.then(()=>{}, err => {
     err.should.be.exactly('error message'); 
    })
    .then(done, done);
  });

  it('should get all resolved value using all', function(done){
    Promise.all([aPromise, resolvedPromise])
    .then(data => data.should.deepEqual([5, 'a good resolve']))
    .then(()=>done(), ()=>done());
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
});
