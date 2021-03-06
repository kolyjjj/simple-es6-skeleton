[Arrow function in ECMAScript 6](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
------------------------
## basic syntax 
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
## lambda function
A lambda function is a function that you can write inline your source code, usually to pass in to another function

## yield
the `yield` cannot be used inside an arrow function
