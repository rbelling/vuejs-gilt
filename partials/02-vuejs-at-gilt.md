# Vue.js at Gilt

Examples of real problems solved by Vue in Gilt

[//]: # (
  - Alan to talk about his use case
  - web-category-page: What we needed from the framework
)

The new [Gilt+ CLP][1] can be seen as one main component (`PageComposer`), that is just a shell (wrapper), and renders a list of childs (carousel, mosaic, ...). This list is a simple array of IDs that is returned by the back end. It's almost like a CMS.

We needed to allow a team of multiple Front End developers to work in parallel with as limited friction as we could; each component is published to NPM and imported as a dependency in `PageComposer`.

Vue supports Single File components, which let you declare markup, scripts and styles in a single file, similarly to what happens with [`CustomElement`s][2]
We found that Single File components were great for our use case: very un-opinionated, they work perfectly with our requirement of having a sort of CMS.

Vue was easy to pick up comparing to other solutions out there, so we'll be able to easily add new developers to the project, maintenance will be easier. 

---
[1]: http://www.gilt.com/men
[2]: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements