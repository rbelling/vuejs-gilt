### Classes

ES2015 standard introduced classes to JavaScript syntax. Classes are defined using declaration or expression in the same way as functions.

Class declaration:

```javascript
class SelectionButton {
	constructor (title, sortOrder) {
		this.title = title;
		this.sortOrder = sortOrder;
	}
}
```

Class expression:

```javascript
var Location = class Location {
    constructor(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
```

 or just:

```javascript
var Location = class {
    constructor(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
 }
}
```

The main difference between these two ways of defining classes is that the later one will be hoisted. This means it does not matter where you define it in the code, JavaScript engine will move it to the top of the scope while compiling.
In comparison, class declarations must be defined before accessing them, otherwise it will lead to a `ReferenceError`.

#### Methods

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

There is also special method name `constructor`.

It is also possible to write this with getters and setters:

```javascript
class className {
	get status() {
		return this.status;
	},
	set status(status) {
		this.status = status;
	}
}
```

In the same way it is possible to define `static` method that are available without instantiating the class, but will not be available from an instance of the class:

```javascript
class Utils {
	static formatDateTime(dateTime) {
		// ...
	}
}
```

#### Inheritance

Classes could be extended and methods in them could be overridden:

```javascript
class Collection {
	constructor(title) {
		this.title = title;
	}
}

class SelectionCollection extends Collection {
	constructor(selectionId) {
		this.selectionId = selectionId;
	}
}
```

It is also possible to execute logic of overridden method using `super` keyword:

```javascript
class SelectionCollection extends Collection {
	capitalize(title) {
		super.capitalize(title);
		// ...
	}
}
```

Multiple inheritance is possible through [mixins](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Mix-ins)

### References

- [MDN: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [How to Use Classes and Sleep at Night](https://medium.com/@dan_abramov/how-to-use-classes-and-sleep-at-night-9af8de78ccb4#.3a4zjwpaz)
