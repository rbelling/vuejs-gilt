### Destructuring variables and Arrays

This chapter describes a new syntactical feature introduced in ES6 which allows us to **destructure** object and Arrays in a very convenient way.

With objects you can now do something like:

```javascript
function getResult() {
    return {
        result: 1234,
        error: null
    };
}
let {result, error} = getResult();
```

You can apply destructuring to array as well. For example, this is how you would swap two array values in ES6:

```javascript
let a = 1, b = 2;
[b, a] = [a, b];
console.log({a, b});
```

This is how you could ignore some of the array values and only take the values that you need.

```javascript
let [,,third] = [1, 2, 3];
console.log({third});

let [first, ...remaining] = [1, 2, 3, 4, 5, 6];
console.log(first);
console.log(remaining);
```

In the last example, keep in mind that the `...` operator has to be the last one in the array for this syntax to work.

### References

- [Destructuring](http://learnharmony.org/#lessons/destructuring)
