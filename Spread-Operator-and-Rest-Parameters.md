### Spread Operator and Rest Parameters

#### Spread Operator

Basically spreads an array or object so they could be passed as multiple arguments.

Examples from MDN: 

ES5:

```javascript
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction.apply(null, args);
```

ES2015:

```javascript
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction(...args);
```

#### Rest parameters

Same syntax is used to get the rest arguments in function definition.

Examples from MDN:

ES5:

```javascript
function f(a, b){
  var args = Array.prototype.slice.call(arguments, f.length);

  // …
}
```

ES2015:

```javascript
function f(a, b, ...args) {
  
}
```

### References

- [MDN: Spread Operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator)
- [MDN: Rest Parameters](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/rest_parameters)