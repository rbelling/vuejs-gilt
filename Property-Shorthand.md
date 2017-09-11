### Property Shorthand

This feature provides us a quick way of declaring object literals.

Before ES6 it would happen very frequently to do something like this:

```javascript
function paramsToObject(a, b, c) {
    return {
        a: a,
        b: b,
        c: c
    };
}

console.log(paramsToObject('first', 'second', 'third'));   //Object {a: "first", b: "second", c: "third"}
```

Now we can luckily save some code and do this:

```javascript
function paramsToObject(a, b, c) {
    return {a,b,c};
}

console.log(paramsToObject('first', 'second', 'third'));   //Object {a: "first", b: "second", c: "third"}
```
