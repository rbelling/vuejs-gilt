### ES6 Modules

One of the features that ES6 is going to introduce is the native support to modules, which can be managed through the `import` and `export` keywords.

The most straight-forward way of using modules is to simply write your code as if there were no outside world, then label everything that you want to export with a keyword.
This use of ES6 Modules is called **named exports**.

```javascript
//------ lib.js ------
export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

//------ main.js ------
import { square, diag } from 'lib';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
```

If you want to, you can also **import the whole module** and refer to its named exports via property notation:

```javascript
//------ main.js ------
import * as lib from 'lib';
console.log(lib.square(11)); // 121
console.log(lib.diag(4, 3)); // 5
```

Sometimes you just want to export a single object from a module: it doesn't have to be necessarily labeled.
You can leverage **default exports** (maximum one per file) in the following way.

```javascript
//------ myFunc.js ------
export default function () { ... };

//------ main1.js ------
import myFunc from 'myFunc';
myFunc();
```

### References

- [ECMAScript 6 modules: the final syntax](http://www.2ality.com/2014/09/es6-modules-final.html)
- [MDN: Import](https://developer.mozilla.org/en/docs/web/javascript/reference/statements/import)
