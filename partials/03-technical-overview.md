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

