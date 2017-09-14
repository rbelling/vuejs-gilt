Here we should provide a more in-depth overview of Vue features, e.g.:
- [x] Hello World
- [x] Progressive Framework
- [x] virtual dom
- [x] Directives
- [x] Data, computed properties
- [ ] Single File Components

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

You can have Vue controlling only certain parts of your app, for example when migrating a legacy codebase to Vue.
This makes it easy to apply the strangler pattern.

##Virtual Dom
Vue relies on a really fast virtual dom implementation, which offers similar performances to React (even faster at times).

There are a few key differences that is worth noting. 
In React when a component's state changes, it triggers the re-render of the entire component sub-tree, starting at that component as root. To avoid unnecessary re-renders of child components, you need to either use PureComponent or implement shouldComponentUpdate whenever you can. You may also need to use immutable data structures to make your state changes more optimization-friendly. However, in certain cases you may not be able to rely on such optimizations because PureComponent/shouldComponentUpdate assumes the entire sub tree’s render output is determined by the props of the current component. If that is not the case, then such optimizations may lead to inconsistent DOM state.
In Vue, a component’s dependencies are automatically tracked during its render, so the system knows precisely which components actually need to re-render when state changes. Each component can be considered to have shouldComponentUpdate automatically implemented for you, without the nested component caveats.
Overall this removes the need for a whole class of performance optimizations from the developer’s plate, and allows them to focus more on building the app itself as it scales.
 
Vue's virtual dom is an intermediate representation of the DOM tree, that only exists in memory. Whenever there's a change to one of the properties Vue maintains a buffer of diffs, that are then de-duped, transformed into a patch, and applied to the real DOM (so-called Reconciliation)

##Directives
Vue offers various directives, admittedly heavily inspired by Angular world.
A directive is a special attribute that you can add to a template. Some examples are `v-for`, `v-on (@eventName)`, `v-if`, 

Directives make it really straight forward to add event listeners

@Todo: example of event listeners with modifier, v-for, v-if

---
##Reactivity
The state of a Vue component is stored into a `data` property, which is similar to `getInitialState` in React. 

```html
<div id="app">
  <span>Clicked {{howMany}} times</span>
  <button @click="howMany++">Increment</button>
  <div>{{divisibility}}</div>
</div>
```
```javascript
new Vue({
  el: '#app',
  data: {
    // Initial value
    howMany: 0
  },
  computed: {
    divisibility() {
      return (this.howMany % 3 === 0) ? 'Multiple of 3 🤠' : ''
    }
  }
})
```
[Output](https://codepen.io/rbelling/pen/QqwPGY)

The `divisibility` property depends on `howMany`, so it will be automatically updated by Vue every time the dependency is modified.

Under the hood, Vue  accomplishes this by reading all of the properties in `data`, and converting them to getter/setters, so that it can introduce a dependency tracking system.

Limitations: Vue cannot detect property addition or deletion so you have to declare every property in the initial data object. However it’s possible to add reactive properties to a nested object using the Vue.set(object, key, value) 
That, or object spread / assign

In addition to computed properties, Vue supports watchers.

---

