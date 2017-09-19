class: center
count: false
#Easier done than said: Vue.js

.img-large[![Vue.js Badge](assets/vue-badge.png)]
.authors[[Alan FITZPATRICK](afitzpatrick@gilt.com) [Riccardo BELLINGERI](rbellingeri@gilt.com)]

---
name: default-slide
layout: true

.footer[]

---

##TL;DR

[//]: # (It's a set of tools that work together really well, rather than a full-featured monolithic framework.)
[//]: # (It's called progressive because the core of Vue is minimal and extremely modular.)
**The good parts of Angular, plus the good parts of React**


Vue.js is a library that makes it very easy to build interactive Web UI. 
Good for:

* Small widgets, that you drop in existing applications 
  * Could even be merely a jQuery replacement
* Medium sized apps 
  * Certain parts are controlled with JS (in this case you could switch to a webpack build & single file components) 
* Larger enterprise SPAs
  * VueRouter, Vuex, SSR, ...

.quote[Strangler pattern friendly!]

---

##How does Vue compares to Angular / React?

[//]: # (They all really do work well for maybe 80% of the common use cases. They each have their own specialty, some problems they solve better than the others.)

Vue shines in the framework landscape as:
 
- Easy to be productive quickly
- **Progressive** framework: complex features can be added to its core
- The core is **16kb** (min+gzip) 
- Fast at runtime: beats React and Angular2 in [some cases](https://rawgit.com/krausest/js-framework-benchmark/master/webdriver-ts/table.html)
- Easier to migrate legacy code than with React / Angular

Certainly it's not suited for all use cases. It's aimed at the Web, so if you need something like React Native, Vue probably wouldn't be your first choice, although there are projects like [Weex](https://weex.apache.org/), backed by AliBaba, that aims at filling that gap.


---

[blogpost]: (http://blog.evanyou.me/2015/10/25/vuejs-re-introduction/)
[jsjabber]: (https://devchat.tv/js-jabber/187-jsj-vue-js-with-evan-you)

## Vue.js community

Created by **Evan You** while he was working as a Creative Technologist at Google. 

Vue started as a personal project, to solve common challenges in the creative development.
The JS community needed a tool that make it quick to prototype and create highly interactive content.

Released to the public in **2014**, before Angular2 was out, and before React took off.
 
Gathered momentum after it was discovered by the Laravel community, it is now maintained full time by the creator, supported by a fairly big community 

It isn't backed by a huge corp, like React, but: 
* It has had 100% test coverage since the early days
* Very few open issues on GitHub, processed very quickly
* Breaking changes are rare 
  * There's usually a migration build, guiding you through the upgrade w/ deprecation warnings 
* Comes with MIT license (as opposed to React)

---

### Adoption
67k stars on GitHub

* Alibaba
* Baidu
* Weibo
* Optimizely
* Expedia
* Nintendo
* Sainsbury's
* GitLab
* Laravel Spark
* Laracasts

---

[issues]: https://github.com/vuejs/vue/issues
[stability]: http://blog.evanyou.me/2015/10/25/vuejs-re-introduction/#Stability
## Vue.js at Gilt

### Web Product Listing

* Goals
  * Best Sellers (Initially)
  * Sales Listing
  * Web Search

* Requirements
  * Simple **Reusable components**
  * Data Driven Components
  * Removing Event Bus
  * **Single Source of Truth**
  * Vuex - State Management
    * Data Collection
    * Data Transformation
    * State Control and Flow
  * SSR components using Vuex

---
### Web Category Page

[//]: # (This list is a simple array of IDs that is returned by the back end. It's almost like a CMS.)
[//]: # (Vue was easy to pick up comparing to other solutions out there, so we'll be able to easily add new developers to the project, maintenance will be easier.)
[//]: # (Supports Single File Components, which is aligned to the spec of WebComponents. We found that those suited our needs perfectly.)

The new [Gilt+ CLP][1] can be seen as one main component (`PageComposer`) that renders a list of children (mosaic, carousel, ...).

.img-large.center[![CLP](assets/clp.png)]

Multiple Front End Engineers working in parallel with as limited friction as possible; each one worked on a specific component, imported as a dependency in `PageComposer`.

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

##Virtual Dom
Intermediate representation of the DOM tree, that only exists in memory. Whenever there's a change to one of the properties, Vue:
* caches the changes (`nextTick`)
* de-dupes them, applies them as a *patch*
* reconciles virtual and real DOM

There are a few key differences with React's implementation:
In React when a component's state changes, it triggers the re-render of the whole sub-tree.
To avoid unnecessary re-renders of child components, you need to implement `shouldComponentUpdate()`, or use `PureComponent`s.
You may also need to use immutable data structures to optimize.

In Vue, a component's dependencies are automatically tracked during its render.
The system knows precisely which components actually need to re-render when state changes.
Each component can be considered to have `shouldComponentUpdate()` automatically implemented for you, without the nested component caveats.

Overall this removes the need for a whole class of **performance optimizations** from the developer's plate.

---

##Directives
Vue offers various directives, heavily inspired by the Angular world.
A directive is a special attribute that you can add to a template.

Some of them come out of the box: `v-for`, `v-on`, `v-if`, `v-once` and others.
You can create custom ones if needed.

Directives make it really straight forward to add event listeners, modifiers, `preventDefault`, `stopPropagation` and so on.

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
  data: { a: 1, b: 2 },
  computed: {
    sum() { return this.a + this.b }
```

```html
<div id="example">{{a}} + {{b}} = {{sum}}</div>
<!-- 1 + 2 = 3 -->
<button @click="a++">Increment `a`</button>
```

If one of the two addends is changed, what should we do to re-render the UI?  

.quote[Nothing!]

`sum` depends on `a` and `b`. Whenever either of those is updated, `sum` will be re-computed.

[//]: # (At startup time, Vue converts all of the properties in `data`, and transforms them in getters/setters, making them reactive.)
[//]: # (When you set `a` or `b` to something else, the rendered HTML updates automatically.)

There's no need to call `setState()`, or listening to store events, or anything else.

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
##Single File `.vue` Components
####`template`, `style` and `script` in a single file, similar to `CustomElement` spec.

```html
<style lang="scss" scoped>
  .rotd {
    color: transparentize(teal, 50%);
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
* CSS `scoped` means no side effects. Designers can author CSS normally (no css-in-js)
* HotReloading with `webpack` & `vue-loader`

---

## Vuex

### What is it?
Centralized **State Management** for Vue.js.

* Vuex allows all state to be controlled from one central location
* Allows for a **single source of Truth**
* Mutations can only occur in a **predictable** fashion
* Integrates with the standard Vue **Dev Tools**
* Allows **Time Travel** within the App
* State **Snapshots**

### How Components Manage State 
* The **state**, which is the source of truth that drives our app
* The **view**, which is just a declarative mapping of the state
* The **actions**, which are the possible ways the state could change in reaction to user inputs from the view

---

.img-large.center[![One Way Flow](https://vuex.vuejs.org/en/images/flow.png)]

.quote[This simplicity quickly breaks down when we have multiple components that share common state:]

---

### Issues that can occur
* Multiple views may **depend on the same piece of state**.
* Actions from different views may need to mutate the same piece of state.
* Updating and keeping **multiple components in sync** can be tedious and hard on the app

.img-large.center[![Component Provider Bus](https://i.imgur.com/sZ3CZTx.png)]

---

.img-large.center[![Component Provider Bus Mess](https://i.imgur.com/Xm10t7F.png)]

.quote[So why don't we extract the shared state out of the components, and manage it in a global singleton?]

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
* mutations: {
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
*├── components
│   ├── App.vue
│   └── ...
*└── store
    ├── index.js          # where we assemble modules and export the store
    ├── actions.js        # root actions
    ├── mutations.js      # root mutations
    └── modules
        ├── cart.js       # cart module
        └── products.js   # products module
```

---

## SSR
It is possible to **render components into HTML strings on the server**, send them directly to the browser, and finally **"hydrate"** the static markup into a fully interactive app on the client.

A server-rendered Vue.js app can also be considered "isomorphic" or **"universal"**, in the sense that the majority of your app's code runs on both the server and the client.

.img-hero.center[![Vue SSR](https://cloud.githubusercontent.com/assets/499550/17607895/786a415a-5fee-11e6-9c11-45a2cfdf085c.png)]

---

### Why
.img-large.center[![Vue SSR](https://i.ytimg.com/vi/gCV3MD-szvc/maxresdefault.jpg)]
* Better **SEO**
* **Faster** Time to Content
* **Universal** code rendering

---

### How easy is it to configure ?
* Setup as part of the **Webpack** build process
* Tools are already built and maintained by the core team

### Any Constraints
* Lifecycle hooks

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
*├── app.js # universal entry
*├── entry-client.js # runs in browser only
*└── entry-server.js # runs on server only
```

* Mounting of the Vue app is only done within the entry-client

---
## What's next?

### Gilt admin tool
The admin tool at Gilt would greatly benefit from a do-over. With Vue, we could gradually refactor certain components, without having to redo the whole thing from scratch at one time.
Thanks to directives, it would be really easy to create tables and other repetitive layout elements that we have there. 

###Trusted marketplace for Vue components

The idea of a marketplace for trusted plugins is certainly not new: it would be interesting to see something like Wordpress marketplace, where you could just add a component to your page without worrying about integrating it.

---

class: center
count: false
layout: false

#Thank you!
.img-hero.center.middle[![Vue.js Logo](assets/painting.jpg)]
#### #feck #vuetiful-channel *on Slack*
.authors[[Alan FITZPATRICK](afitzpatrick@gilt.com) [Riccardo BELLINGERI](rbellingeri@gilt.com)]