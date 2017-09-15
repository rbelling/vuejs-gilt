
# Easier done than said: Vue.js

##TL;DR
**The good parts of Angular, plus the good parts of React**

Vue.js is a library that makes it very easy to build Web UI. It's a set of tools that work together really well, rather than a full-featured monolithic framework.
Its design is inspired by the [MVVM pattern](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailmvvm), where Vue represents the VM part of it.

Use cases: Vue allows you to create everything from 
- small widgets that you drop in existing applications
- medium sized apps where certain parts of the page are controlled with js, re-rendering certain parts of the app dynamically 
- enterprise apps (SPAs)

##How does Vue compares to Angular / React?
Those three frameworks really do work well for like 80% of the common use cases, but then they each have their specialty, some problems they solve better than the others.

Vue shines in the framework landscape as: 
- Extremely small, the core is just 16kb min+gzip 
- It's very fast at runtime, and beats React or Angular in [some cases](https://rawgit.com/krausest/js-framework-benchmark/master/webdriver-ts/table.html)
- Lets you add complex features to its core, like Vue Router and so on. It is considered a Progressive framework because of its modularity.

Certainly it's not suited for all use cases. It's aimed at the Web, so for example if you need something like React Native, Vue probably wouldn't be your first choice, although there are projects like [Weex](https://weex.apache.org/), backed by AliBaba, that aims at filling that gap.

---

[blogpost]: (http://blog.evanyou.me/2015/10/25/vuejs-re-introduction/)
[jsjabber]: (https://devchat.tv/js-jabber/187-jsj-vue-js-with-evan-you)

# Vue.js at Gilt

Examples of real problems solved by Vue in Gilt

[//]: # (
  - Alan to talk about his use case
  - web-category-page: What we needed from the framework
)

The new [Gilt+ CLP][1] can be seen as one main component (`PageComposer`) that renders a list of childs (carousel, mosaic, ...). This list is a simple array of IDs that is returned by the back end. It's almost like a CMS.

We needed to allow a team of multiple Front End developers to work in parallel with as limited friction as we could; each component is published to NPM and imported as a dependency in `PageComposer`.

Vue supports Single File components, which let you declare markup, scripts and styles in a single file, similarly to what happens with [`CustomElement`s][2]
We found that Single File components were great for our use case: very un-opinionated, they work perfectly with our requirement of having a sort of CMS.

Vue was easy to pick up comparing to other solutions out there, so we'll be able to easily add new developers to the project, maintenance will be easier. 

---
[1]: http://www.gilt.com/men
[2]: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements

Here we should provide a more in-depth overview of Vue features, e.g.:
- [x] Hello World
- [x] Progressive Framework
- [x] virtual dom
- [x] Directives
- [x] Reactivity
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
      return (this.howMany % 3 === 0) ? 'Multiple of 3! 🤠' : 'Not a multiple of 3...'
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

[easy example](http://blog.evanyou.me/2015/10/25/vuejs-re-introduction/#Reactivity)

---

##Single file components


questo
[parti da qua](http://blog.evanyou.me/2015/10/25/vuejs-re-introduction/#Modularity)

# Vue.js community

Vue was created by a former Google Employee, Evan You. It started as a personal project, that was released to the public in 2014, before Angular2 was out, and before React had took off so wildly. 
After it was discovered by the Laravel community, the project gathered momentum, and is now maintained full time by the creator, supported by a fairly big community (67k stars on GitHub).

It isn't backed by a huge corporation, like React. That being said, it has had 100% test coverage since the early days, very few open issues on GitHub (which are processed very quickly either by the creator or by the community. 
Newer version rarely come with breaking changes, and when it does there's usually a migration build that guides you through the upgrade. 
The community is growing really fast and has been supporting the development of new features, and even if the framework isn't backed by a large corporation, the [number of open issues][issues] on GitHub is really low comparing to other frameworks. 

# Market adoption
Big players that use vue (alibaba, optimizely)

# What's next

# Interesting use cases 
## Gilt admin tool
The admin tool at Gilt would greatly benefit from a do-over. With Vue, we could gradually refactor certain components, without having to redo the whole thing from scratch at one time.
Thanks to directives, it would be really easy to create tables and other repetitive layout elements that we have there. 

## Quicker turnarounds with designers thanks to single file components
In single file components you can easily edit the css (style block), without dealing with weird css-in-js which requires to have solid JS knowledge before being able to author css

With Vue, designers could easily edit the stylesheets, using their favorite tools (SASS / Less / PostCSS / ..). 
Also, because styles can be scoped, there's no risk of accidentally modifying other elements in the page.

## Trusted marketplace for Vue components

The idea of a marketplace for trusted plugins is certainly not new: it would be interesting to see something like Wordpress marketplace, where you could just add a component to your page without worrying about integrating it.

---

[issues]: https://github.com/vuejs/vue/issues
[stability]: http://blog.evanyou.me/2015/10/25/vuejs-re-introduction/#Stability
#References

Call out to who helped, and so on

[Vue.js Udemy course](https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/t/lecture/5940912?start=0)