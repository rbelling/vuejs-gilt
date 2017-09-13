# Intro

[//]: # (
This should be a tldr of the presentation, very high level
- What's Vue.js
- Very high level comparison with angular and react.
- What does Vue shine on? Cons: it lacks something like React Native
)

View layer (MVVM pattern)

---
# Vue.js at Gilt

Examples of real problems solved by Vue in Gilt

[//]: # (
  - Alan to talk about his use case
  - web-category-page: What we needed from the framework
)
---

The new [Gilt+ CLP](http://www.gilt.com/men) can be seen as one main component (`PageComposer`), that is just a shell (wrapper), and it renders an ordered list of childs (carousel, mosaic, ...). This list is a simple array of IDs that is returned by the back end. It's almost like a CMS.

We needed to allow a team of multiple Front End developers to work in parallel with as limited friction as we could; each component is published to NPM and imported as a dependency in `PageComposer`.

Vue supports Single File components, which let you declare markup, scripts and styles in a single file, similarly to what happens with [`CustomElement`s](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements)
We found that Single File components were great for our use case: very un-opinionated, they work perfectly with our requirement of having a sort of CMS.

Vue was easy to pick up comparing to other solutions out there, so we'll be able to easily add new developers to the project, maintenance will be easier. 


[//]: # (
Here we should provide a more in-depth overview of Vue features, e.g.:
[x] Progressive Framework
[x] virtual dom
[ ] Directives
[ ] Reactivity model: data, computed, watchers
[ ] Single File Components
)

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
Vue offers various directives, admittedly inspired by Angular.
A directive is a special attribute that you can add to a template. Some examples are `v-for`, `v-on`, `v-once`

Directives make it really straight forward to add event listeners


---


# Vue.js community

Vue was created by Evan You, a former google employee, who is now working full time on the framework. 
The community is growing really fast and has been supporting the development of new features, and even if the framework isn't backed by a large corporation, the [number of open issues](https://github.com/issues) on GitHub is really low comparing to other frameworks. 

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

## Trusted marketplace for Vue component

The idea of a marketplace for trusted plugins is certainly not new: it would be interesting to see something like Wordpress marketplace, where you could just add a component to your page without worrying about integrating it.

---
#References

Call out to who helped, and so on