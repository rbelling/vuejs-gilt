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
