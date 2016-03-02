ES6 Promise learning
------------
## array function
```javascript
(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
         // equivalent to:  => { return expression; }

// Parentheses are optional when there's only one parameter:
(singleParam) => { statements }
singleParam => { statements }

// A function with no parameters requires parentheses or an underscore:
() => { statements }
_ => { statements }
```

## done invoked with non errors
when done is called with some arguments, the error 'done invoked with non-error' would be thrown, in this case, you should use something like `_ => done()`
