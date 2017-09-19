class: center
count: false
#Easier done than said: Vue.js

.img-large.center[![Vue.js Badge](assets/vue-badge.png)]
.authors[[Alan FITZPATRICK](afitzpatrick@gilt.com) [Riccardo BELLINGERI](rbellingeri@gilt.com)]

---
name: default-slide
layout: true

.footer[]

---

##TL;DR
**The good parts of Angular, plus the good parts of React**

Vue.js is a library that makes it very easy to build Web UI. It's a set of tools that work together really well, rather than a full-featured monolithic framework.
Good for:

- Small widgets, that you drop in existing applications
- Medium sized apps, where certain parts are controlled with JS (dynamic re-rendering) 
- Larger enterprise apps (SPAs)

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
---

##How does Vue compares to Angular / React?
They all really do work well for maybe 80% of the common use cases. They each have their own specialty, some problems they solve better than the others.

Vue shines in the framework landscape as: 
- Extremely small: core is 16kb (min+gzip) 
- Very fast at runtime, and beats React or Angular in [some cases](https://rawgit.com/krausest/js-framework-benchmark/master/webdriver-ts/table.html)
- **Progressive framework**: complex features can be added to its core (modularity)
- Easier to migrate legacy code than with React / Angular

Certainly it's not suited for all use cases. It's aimed at the Web, so if you need something like React Native, Vue probably wouldn't be your first choice, although there are projects like [Weex](https://weex.apache.org/), backed by AliBaba, that aims at filling that gap.


---

[blogpost]: (http://blog.evanyou.me/2015/10/25/vuejs-re-introduction/)
[jsjabber]: (https://devchat.tv/js-jabber/187-jsj-vue-js-with-evan-you)
