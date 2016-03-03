ES6 Promise learning
------------

## promise states
A promise has three states:
* pending
* fulfilled
* rejected
## done invoked with non errors
when done is called with some arguments, the error 'done invoked with non-error' would be thrown, in this case, you should use something like `_ => done()`
