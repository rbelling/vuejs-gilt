## Vue.js at Gilt

### Web Product Listing

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
