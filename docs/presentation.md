.center[#Easier done than said: Vue.js]
.img-large.center[![Vue.js Badge](assets/vue-badge.png)]
.authors[[Alan Fitzpatrick](afitzpatrick@gilt.com) [Riccardo Bellingeri](rbellingeri@gilt.com)]
---
##TL;DR
**The good parts of Angular, plus the good parts of React**

Vue.js is a library that makes it very easy to build Web UI. It's a set of tools that work together really well, rather than a full-featured monolithic framework.
Its design is inspired by the [MVVM pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailmvvm), where Vue represents the VM part of it.

Use cases: Vue allows you to create everything from
- small widgets that you drop in existing applications
- medium sized apps where certain parts of the page are controlled with js, re-rendering certain parts of the app dynamically 
- larger enterprise apps (SPAs)
---
##How does Vue compares to Angular / React?
Those three frameworks really do work well for like 80% of the common use cases, but then they each have their specialty, some problems they solve better than the others.

Vue shines in the framework landscape as: 
- Extremely small, the core is just 16kb min+gzip 
- It's very fast at runtime, and beats React or Angular in [some cases](https://rawgit.com/krausest/js-framework-benchmark/master/webdriver-ts/table.html)
- Lets you add complex features to its core, like Vue Router and so on. It is considered a Progressive framework because of its modularity.
- Easier to migrate legacy code then with React / Angular

Certainly it's not suited for all use cases. It's aimed at the Web, so for example if you need something like React Native, Vue probably wouldn't be your first choice, although there are projects like [Weex](https://weex.apache.org/), backed by AliBaba, that aims at filling that gap.

---

[blogpost]: (http://blog.evanyou.me/2015/10/25/vuejs-re-introduction/)
[jsjabber]: (https://devchat.tv/js-jabber/187-jsj-vue-js-with-evan-you)

# Vue.js at Gilt

## Web Product Listing

* Simple Reusable components
* Data Driven Components
* Removing Event Bus
* Single Source of Truth
* Vuex - State Management
  * Data Collection
  * Data Transformation
  * State Control and Flow
* SSR components using Vuex

---

## Web Category Page

The new [Gilt+ CLP][1] can be seen as one main component (`PageComposer`) that renders a list of children (carousel, mosaic, ...). This list is a simple array of IDs that is returned by the back end. It's almost like a CMS.

We needed to allow a team of multiple Front End developers to work in parallel with as limited friction as we could; each component is published to NPM and imported as a dependency in `PageComposer`.

Vue was easy to pick up comparing to other solutions out there, so we'll be able to easily add new developers to the project, maintenance will be easier.
supports Single File Components, which is aligned to the spec of WebComponents. We found that those suited our needs perfectly.

---
[1]: http://www.gilt.com/men
[2]: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements

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

---
##Virtual Dom
Vue's virtual dom is an intermediate representation of the DOM tree, that only exists in memory. Whenever there's a change to one of the properties Vue maintains a buffer of diffs, that are then de-duped, transformed into a patch, and applied to the real DOM (so-called Reconciliation)

Vue relies on a really fast virtual dom implementation, which offers similar performances to React (even faster at times).

There are a few key differences that is worth noting.
In React when a component's state changes, it triggers the re-render of the entire component sub-tree, starting from that component as a root.
To avoid unnecessary re-renders of child components, you need to either use [PureComponent](https://facebook.github.io/react/docs/react-api.html#react.purecomponent) or implement `shouldComponentUpdate()` whenever you can.
You may also need to use immutable data structures to make your state changes more optimized.

In Vue, a component's dependencies are automatically tracked during its render, so the system knows precisely which components actually need to re-render when state changes. Each component can be considered to have shouldComponentUpdate automatically implemented for you, without the nested component caveats.
Overall this removes the need for a whole class of performance optimizations from the developer's plate, and allows them to focus more on building the app itself as it scales.

---

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
The state of a Vue component is stored into a POJO called `data`. 
In React you'd declare this in `getInitialState()`.  

```javascript
new Vue({
  el: '#example',
  data: {
    a: 1, b: 2
  },
  computed: {
*    sum() { return this.a + this.b }
```

```html
<div id="example">{{a}} + {{b}} = {{sum}}</div>
<!-- 1 + 2 = 3 -->
<button @click="a++">Increment `a`</button>
```

If one of the two addends is changed, what should we do to re-render the UI?  

*Nothing*.

`sum` depends on `a` and `b`. Whenever either of those is updated, `sum` will be computed accordingly.
At startup time, Vue converts all of the properties in `data`, and transforms them in getters/setters, making them reactive.
When you set `a` or `b` to something else, the rendered HTML updates automatically.

There's no need to call `setState()`, or listening to store events, or anything else.

[//]: # (https://codepen.io/rbelling/pen/QqwPGY)

---

##Components
Vue takes a React-like approach when it comes to complex interfaces, where everything is a Component.

```javascript
const MyExample = {
  template: '<div class="rotd">Random number of the day: {{rotd}}</div>',
  data () {
    return { rotd: Math.random() }
  }
}

const App = new Vue({
  el: "#app",
  components: {
    MyExample
  },
  template: 
    `<div>
      Now we'll add a custom component.
*     <my-example/>
    </div>`
```
[//]: # (https://codepen.io/rbelling/pen/wraxdg)

---
###Single File `.vue` Components 
####`template`, `style` and `script` in a single file, similar to `CustomElement` spec.

```html
<style lang="scss" scoped>
  $copy-color: #737373;
  .rotd {
    color: $copy-color;
  }
</style>

<template lang="pug">
  .rotd  Random number of the day (ROTD) is: {{rotd}}
</template>

<script>
  export default {
    data() {
      return { rotd: Math.random() }
    }
  }
</script>
```
* Micro-service friendly, reduced friction
* Any CSS pre-processor & template engine
* CSS `scoped` means no side effects
* Designers can author CSS normally (no css-in-js)
* HotReloading with `webpack` & `vue-loader` 

---

## Vuex
Centralized State Management for Vue.js.

* Vuex allows all state to be controlled from one central location
* Allows for a single source of Truth
* Mutations can only occur in a predictable fashion
* Integrates with the standard Vue Dev Tools
* Allows Time Travel within the App
* State Snapshots

### One Way Data Flow In a Component
* The state, which is the source of truth that drives our app;
* The view, which is just a declarative mapping of the state;
* The actions, which are the possible ways the state could change in reaction to user inputs from the view.

---

.img-large.center[![One Way Flow](https://vuex.vuejs.org/en/images/flow.png)]

---

### Issues that can occur
* Multiple views may depend on the same piece of state.
* Actions from different views may need to mutate the same piece of state.
* Updating and keeping multiple components in sync can be tedious and hard on the app

.img-large.center[![Component Provider Bus](https://i.imgur.com/sZ3CZTx.png)]

---

.img-large.center[![Component Provider Bus Mess](https://i.imgur.com/Xm10t7F.png)]

.img-large.center[![Vuex Fix](https://i.imgur.com/zqmhD88.png)]

---

### The Answer
* A Global Singleton
* Component Tree becomes the View
* Any component can access state and trigger actions from anywhere

.img-large.center[![Vuex dataflow](https://vuex.vuejs.org/en/images/vuex.png)]
---

```javascript
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

store.commit('increment')

console.log(store.state.count) // -> 1
```

```
├── index.html
├── main.js
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # where we assemble modules and export the store
    ├── actions.js        # root actions
    ├── mutations.js      # root mutations
    └── modules
        ├── cart.js       # cart module
        └── products.js   # products module
```

---

## SSR
It is possible to render components into HTML strings on the server, send them directly to the browser, and finally "hydrate" the static markup into a fully interactive app on the client.

A server-rendered Vue.js app can also be considered "isomorphic" or "universal", in the sense that the majority of your app's code runs on both the server and the client.

.img-large.center[![Vue SSR](https://cloud.githubusercontent.com/assets/499550/17607895/786a415a-5fee-11e6-9c11-45a2cfdf085c.png)]

---

### Why ?
.img-large.center[![Vue SSR](https://i.ytimg.com/vi/gCV3MD-szvc/maxresdefault.jpg)]
* Better SEO
* Faster Time to Content
* More Work done server side

---

### How easy is it to configure ?
* Easily setup as part of the build process
* Constraints in terms of lifecycle hooks

.img-large.center[![Vue Hyrdration](https://i.stack.imgur.com/RwJaZ.png)]

---

### Universal Code
* Write once work everywhere
* Pre-fetched Data
* Deterministic Rendering

```
src
├── components
│   ├── Foo.vue
│   ├── Bar.vue
│   └── Baz.vue
├── App.vue
├── app.js # universal entry
├── entry-client.js # runs in browser only
└── entry-server.js # runs on server only
```

* Mounting of the Vue app is only done within the entry-client

---

# Vue.js community

Created by **Evan You** (former Creative Technologist at Google Creative Lab). 
Vue started as a personal project, to solve common challenges in the creative development, like the need for tools that make it quick to prototype, and creating highly interactive content.

Released to the public in 2014 (before Angular2) was out, and before React took off. 
Gathered momentum after it was discovered by the Laravel community, it is now maintained full time by the creator, supported by a fairly big community 

It isn't backed by a huge corp, like React, but: 
* It has had 100% test coverage since the early days
* Very few open issues on GitHub, processed very quickly
* Breaking changes are rare 
  * There's usually a migration build, guiding you through the upgrade w/ deprecation warnings 
* Comes with MIT license (as opposed to React)

---

# Adoption
67k stars on GitHub
@todo find a few logos here
Big players that use Vue (alibaba, optimizely)

---

## What's next?
### Gilt admin tool
The admin tool at Gilt would greatly benefit from a do-over. With Vue, we could gradually refactor certain components, without having to redo the whole thing from scratch at one time.
Thanks to directives, it would be really easy to create tables and other repetitive layout elements that we have there. 

With Vue, designers could easily edit the stylesheets, using their favorite tools (SASS / Less / PostCSS / ..). 
Also, because styles can be scoped, there's no risk of accidentally modifying other elements in the page.

###Trusted marketplace for Vue components

The idea of a marketplace for trusted plugins is certainly not new: it would be interesting to see something like Wordpress marketplace, where you could just add a component to your page without worrying about integrating it.

---

[issues]: https://github.com/vuejs/vue/issues
[stability]: http://blog.evanyou.me/2015/10/25/vuejs-re-introduction/#Stability
## Thank you for listening ;)


@todo add https://codepen.io/alexchopin/pen/jBWrej


##References

Call out to who helped, and so on

[Vue.js Udemy course](https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/t/lecture/5940912?start=0)
