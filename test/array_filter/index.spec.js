'use strict';

import assert from 'assert';
import searchNames from '../../src/array_filter/index';

describe.only('array filter', ()=>{
  describe('invalid input', ()=>{
    it('should return empty array given empty array', ()=>{
      assert.deepEqual(searchNames([]), []);
    });

    it('should return null given non array', ()=>{
      assert.equal(searchNames('one'), null);
      assert.equal(searchNames(1), null);
      assert.equal(searchNames(0.1), null);
      assert.equal(searchNames(null), null);
      assert.equal(searchNames(undefined), null);
      assert.equal(searchNames(true), null);
      assert.equal(searchNames(false), null);
    });

    it('should return empty array given an invalid array', ()=>{
      assert.deepEqual(searchNames(['one']), null);
    });
  });

  it('should return filtered array given valid array', ()=>{
    assert.deepEqual(searchNames([["bar_", "bar@bar.com"]]), [["bar_", "bar@bar.com"]]);
    assert.deepEqual(searchNames([["foo", "foo@foo.com"], ["bar_", "bar@bar.com"]]), [["bar_", "bar@bar.com"]]);
    assert.deepEqual(searchNames([["foo", "foo@foo.com"], ["bar_", "bar@bar.com"], ["one_", "one@one.com"]]), [["bar_", "bar@bar.com"], ["one_", "one@one.com"]]);
    assert.deepEqual(searchNames([["foo", "foo@foo.com"], ["bar_", "bar@bar.com"], ["one_", "one@one.com"], ["two", "two@two.com"]]), [["bar_", "bar@bar.com"], ["one_", "one@one.com"]]);
  });

  it('should return empty array given invalid array', ()=>{
    assert.deepEqual(searchNames([["bar", "bar@bar.com"]]), []);
    assert.deepEqual(searchNames([["foo", "foo@foo.com"], ["bar", "bar@bar.com"]]), []);
    assert.deepEqual(searchNames([["fo_o", "foo@foo.com"], ["_bar", "bar@bar.com"], ["f_o_o", "f_o_o@foo.com"]]), []);
  })
});
