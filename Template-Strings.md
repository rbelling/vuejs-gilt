### Template Strings

Template strings provide us with several long-awaited features, such as multi-line strings and embedded expressions.

#### Multi-line strings

ES5:

```javascript
var str = 'Dear Mr. Magnum, \
Could I kindly ask you to park my Ferrari back into garage at your earliest convenience. \
Sincerely yours, \
Higgins';
```

or

```javascript
var str = 'Dear Mr. Magnum,' +
'Could I kindly ask you to park my Ferrari back into garage at your earliest convenience.' +
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

#### Embedded expressions

ES5:

```javascript
var template = '<div class="hero-title">' + heroTitle + '</div>';
```

ES2015:

```javascript
var template = `<div class="hero-title">${heroTitle}</div>`;
```

#### Tagged template strings

Tagged template string is an advanced version of template string that is pre-processed by custom-written function.

Example:

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

Note that `values.length` is always one item shorter than `strings.length`.

### References

- [MDN: Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [Anonymous article on multi-line strings in JS](http://shmavon.gazanchyan.me/performance-test-string-concatenation/)
