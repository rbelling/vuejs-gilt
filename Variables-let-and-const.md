### Variables `let` and `const`

Up until ES6 the keyword `var` indicates variables that are always function scoped. It doesn't matter where you define your variable - the variable is available anywhere within the function.

```javascript
var someCondition = true;
if (someCondition == true) {
    var password = '1234';
}

alert(password); //alerts our password
```

In ES6, the newly introduced `let` keyword allows you to define variables within the scope of the block (block scoping).

```javascript
let someCondition = true;
if (someCondition == true) {
    let password = '1234';
}

alert(password); //Uncaught ReferenceError: password is not defined(…)
```

In addition to `let`, ES6 also introduces the `const` keyword. It is also block scoped, but if we attempt to change its value after initialization, we get an error.

```javascript
let someCondition = true;
if (someCondition == true) {
    const password = '1234';
    password = '5678';   //Uncaught TypeError: Identifier 'someCondition' has already been declared
}

alert(password); //Uncaught ReferenceError: password is not defined(…)
```

### References

- [Block Scope](http://learnharmony.org/#lessons/block-scope-let)
