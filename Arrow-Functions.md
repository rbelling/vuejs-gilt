### Arrow Functions

Arrow functions provide us with shorter syntax of defining **anonymous** functions without creating its own scope.

ES5:

```javascript
function(callback) {
    var me = this;
    callback(function() {
        me.handleResponse();
    });
}
```

ES2015:

```javascript
function(callback) {
    callback(()  => {
        this.handleResponse();
    });
}
```

And another, short example:

ES5:

```javascript
var pow = function(x) {
    return x * x;
}
```

ES2015:

```javascript
var pow = (x) => x * x;
```

### References

- [MDN: Arrow Functions](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- ["Arrow This" - on arrow function scope](https://blog.getify.com/arrow-this/)
