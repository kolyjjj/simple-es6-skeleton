ES6 Promise learning
------------

## promise states
A promise has three states:
* pending
* fulfilled
* rejected
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

// Parenthesize the body to return an object literal expression:
params => ({foo: bar})

// Rest parameters and default parameters are supported
(param1, param2, ...rest) => { statements }
(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }

// Destructuring within the parameter list is also supported
var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f();  // 6
```

## done invoked with non errors
when done is called with some arguments, the error 'done invoked with non-error' would be thrown, in this case, you should use something like `_ => done()`
