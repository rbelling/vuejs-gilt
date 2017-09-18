# Vue.js community

Vue was created by a former Google Employee, Evan You. It started as a personal project, that was released to the public in 2014, before Angular2 was out, and before React had took off so wildly. 
After it was discovered by the Laravel community, the project gathered momentum, and is now maintained full time by the creator, supported by a fairly big community (67k stars on GitHub).

It isn't backed by a huge corporation, like React. That being said, it has had 100% test coverage since the early days, very few open issues on GitHub (which are processed very quickly either by the creator or by the community. 
Newer versions rarely come with breaking changes, and when it does there's usually a migration build that guides you through the upgrade. 
The community is growing really fast and has been supporting the development of new features, and even if the framework isn't backed by a large corporation, the [number of open issues][issues] on GitHub is really low comparing to other frameworks. 
@todo mention differences in licensing between React and Vue

---

# Market adoption
Big players that use vue (alibaba, optimizely)

@todo find a few logos here

---

# What's next

# Interesting use cases 
## Gilt admin tool
The admin tool at Gilt would greatly benefit from a do-over. With Vue, we could gradually refactor certain components, without having to redo the whole thing from scratch at one time.
Thanks to directives, it would be really easy to create tables and other repetitive layout elements that we have there. 

## Quicker turnarounds with designers thanks to single file components
In single file components you can easily edit the css (style block), without dealing with weird css-in-js which requires to have solid JS knowledge before being able to author CSS.

With Vue, designers could easily edit the stylesheets, using their favorite tools (SASS / Less / PostCSS / ..). 
Also, because styles can be scoped, there's no risk of accidentally modifying other elements in the page.

## Trusted marketplace for Vue components

The idea of a marketplace for trusted plugins is certainly not new: it would be interesting to see something like Wordpress marketplace, where you could just add a component to your page without worrying about integrating it.

---

[issues]: https://github.com/vuejs/vue/issues
[stability]: http://blog.evanyou.me/2015/10/25/vuejs-re-introduction/#Stability