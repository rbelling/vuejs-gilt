# Contents

- An awesome entry here

---

# Import/Export keywords

```javascript
export const PI = 3.14;

export function square(x) {
    return x * x;
}

export function double(x) {
    return x + x;
}

export default function triple(x) {
    return x * 3;
}
```

```javascript
// default function will be imported
import triple from 'mathlib';

import { square, double } from 'mathlib';

import * as math from 'mathlib';

math.double(5);
```

---

## `let` and `const`

Before we were always using `var`

```javascript
var config = {};
```

`let` allows you to define scoped variables

```javascript
if (true) {
    let config = {};
    // config is defined here
}
// config does not exist outside of it's curly brackets
```

`const` allows you to define immutable variables

```javascript
const ITERATIONS = 5;

// These will cause an error
ITERATIONS = 10;
const ITERATIONS = 10;
var ITERATIONS = 15;
```

Best practice: if in doubts use `const`

---

# Default parameters

```javascript
function addNumbers(a=1, b=1, c=1) {
    return a+b+c;
}

addNumbers();     //returns 3
addNumbers(2);    //returns 4
addNumbers(null); //returns 2
```

---

# Property shorthand

Before:

```javascript
const object = {
    a: a,
    b: b,
    c: c
};
```

Now:

```javascript
const object = {
    a,
    b,
    c
};
```

---

# Destructuring Assignment

```javascript
const results = {
    result: 1234,
    error: null
};

let {result, error} = results;

// result = 1234
// error = null
```

---

# Classes

ES5:

```javascript
var className = {
	getStatus: function() {
		return this.status;
	},

	setStatus: function(status) {
		this.status = status;
	}
}
```

ES2015:

```javascript
class className {
	getStatus() {
		return this.status;
	},
	setStatus(status) {
		this.status = status;
	}
}
```

---

# Arrow functions

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

---

# Arrow functions

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

---

# Template strings

ES5:

```javascript
var str = 'Dear Mr. Magnum,' +
'Could I kindly ask you to park my Ferrari back into \
 garage at your earliest convenience.' +
'Sincerely yours,' +
'Higgins';
```

ES2015:

```javascript
var str = `Dear Mr. Magnum,
Could I kindly ask you to park my Ferrari back into garage at your earliest convenience.
Sincerely yours,
Higgins`;
```

---

# Template strings: Embedded expressions

ES5:

```javascript
var template = '<div class="hero-title">' + heroTitle + '</div>';
```

ES2015:

```javascript
var template = `<div class="hero-title">${heroTitle}</div>`;
```

---

# Template strings: tags


```javascript
var a = 5;
var b = 10;

function sometag(strings, ...values) {
  // Where:
  // strings[0] = "Hello "
  // strings[1] = " world "
  // strings[2] = ""
  // values[0]  = 15
  // values[1]  = 50

  var output = '';

  for(var i = 0; i < values.length; i++) {
    output += strings[i] + values[i];
  }

  output += strings[i];

  return output;
}

sometag`Hello ${ a + b } world ${ a * b }`;
```

---

# Spread operator

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

---

# Rest parameters

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

---

# Resources

- This Presentation: [http://mungell.github.io/es2015/](http://mungell.github.io/es2015/)
- Materials: [https://github.com/MunGell/es2015/wiki](https://github.com/MunGell/es2015/wiki)
- Training Project: [https://github.com/MunGell/training-js-mazerobot](https://github.com/MunGell/training-js-mazerobot)
