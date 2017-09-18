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

Certainly it's not suited for all use cases. It's aimed at the Web, so for example if you need something like React Native, Vue probably wouldn't be your first choice, although there are projects like [Weex](https://weex.apache.org/), backed by AliBaba, that aims at filling that gap.

---

[blogpost]: (http://blog.evanyou.me/2015/10/25/vuejs-re-introduction/)
[jsjabber]: (https://devchat.tv/js-jabber/187-jsj-vue-js-with-evan-you)
