Here we should provide a more in-depth overview of Vue features, e.g.:
- [x] Hello World
- [x] Progressive Framework
- [x] virtual dom
- [x] Directives
- [x] Reactivity
- [ ] Single File Components
- [ ] Vuex
- [ ] SSR

##Hello World
```html
<script src="https://unpkg.com/vue"></script>

<div id="app">
  <p>{{ message }}</p>
</div>
```
```javascript
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
})
```
```html
<!-- Output -->
Hello Vue.js!
```
---   
##Progressive Framework  
It's called progressive because the core of Vue is minimal and extremely modular. 
You can get the Runtime-only build, or Compiler + Runtime if you need to compile JS templates on the client. 

You could even choose to add Vue merely as a jQuery replacement, (the runtime itself is smaller than jQuery when minified + gzipped).
If you decide to add more complex features to your app, like the Router, Vuex and so on, you can certainly do so, but by default is much less bloated then other frameworks.

You can have Vue controlling only certain parts of your app, which comes in handy when migrating a legacy codebase to Vue.
This makes it easy to apply the strangler pattern.

##Virtual Dom
Vue's virtual dom is an intermediate representation of the DOM tree, that only exists in memory. Whenever there's a change to one of the properties Vue maintains a buffer of diffs, that are then de-duped, transformed into a patch, and applied to the real DOM (so-called Reconciliation)

Vue relies on a really fast virtual dom implementation, which offers similar performances to React (even faster at times).

There are a few key differences that is worth noting. 
In React when a component's state changes, it triggers the re-render of the entire component sub-tree, starting from that component as a root. 
To avoid unnecessary re-renders of child components, you need to either use [PureComponent](https://facebook.github.io/react/docs/react-api.html#react.purecomponent) or implement `shouldComponentUpdate()` whenever you can. 
You may also need to use immutable data structures to make your state changes more optimized.

In Vue, a component's dependencies are automatically tracked during its render, so the system knows precisely which components actually need to re-render when state changes. Each component can be considered to have shouldComponentUpdate automatically implemented for you, without the nested component caveats.
Overall this removes the need for a whole class of performance optimizations from the developer's plate, and allows them to focus more on building the app itself as it scales.

##Directives
Vue offers various directives, heavily inspired by the Angular world.
A directive is a special attribute that you can add to a template. Some examples are `v-for`, `v-on (@eventName)`, `v-if`, 

Directives make it really straight forward to add event listeners. 

```javascript
new Vue({
  el: '#example',
  data: {
    result: 0
  }
})
```
```html
<div id="example">
  <span> {{result}} </span>
  <button @click="result++">Increment result</button>
</div>
```

---
##Reactivity model
The state of a Vue component is stored into a `data` property, which is similar to `getInitialState()` in React.  

Let's jump straight to an example: we want to display the sum of two numbers `a` and `b`. 

```javascript
new Vue({
  el: '#example',
  data: {
    a: 1,
    b: 2
  },
  computed: {
    sum() {
      return this.a + this.b
    }
  }
})
```

```html
<div id="example">
  <span> {{a}} + {{b}} = {{sum}} </span>
</div>
```
```html
<!-- Output -->
1 + 2 = 3
```
This example shows one of the key features of Vue: if one of the two addends is changed, what should we do to re-render the UI? 
Nothing.

The computed property `sum` depends on `a` and `b`. Whenever either of those is updated, `sum` will be adjusted accordingly. 
At startup time, Vue converts all the properties of the `data` object (plain JS), and transforms them in getters/setters, making them reactive. 
When you set `a` or `b` to something else, the rendered HTML updates automatically. 

There's no need to worry about calling `setState()`, or listening to store events, or creating custom observables, or anything else.
[Output](https://codepen.io/rbelling/pen/QqwPGY)

---  

The `divisibility` property depends on `howMany`, so it will be automatically updated by Vue every time the dependency is modified.

Under the hood, Vue  accomplishes this by reading all of the properties in `data`, and converting them to getter/setters, so that it can introduce a dependency tracking system.

###Limitations of `data`
Vue cannot detect property addition or deletion so you have to declare every property in the initial data object. However it’s possible to add reactive properties to a nested object using the Vue.set(object, key, value) 
Another alternative is using the [Spread operator](http://redux.js.org/docs/recipes/UsingObjectSpreadOperator.html)

---

##Single file components
Vue takes a React-like approach when it comes to complex interfaces, where everything is a Component. 
Its approach differs from React, and is very close to [`CustomElement`s](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements). 
In a `SingleFileComponent.vue` you'll have  
Here's how it looks like.

@TODO add example
