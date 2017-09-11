### Default Parameters

It is finally possible in ES6 to define default values in a function declaration. This feature has been long available in other programming languages.

```javascript
function addNumbers(a=1, b=1, c=1) {
    return a+b+c;
}

addNumbers(); //returns 3
addNumbers(2); //returns 4
addNumbers(null); //returns 2 because the first parameter is null, which means it is not going to take the default value
```
References

- [Default Parameters](http://learnharmony.org/#lessons/default-parameters)
