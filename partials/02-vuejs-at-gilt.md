# Vue.js at Gilt

## Web Product Listing

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

## Web Category Page

The new [Gilt+ CLP][1] can be seen as one main component (`PageComposer`) that renders a list of children (carousel, mosaic, ...). This list is a simple array of IDs that is returned by the back end. It's almost like a CMS.

We needed to allow a team of multiple Front End developers to work in parallel with as limited friction as we could; each component is published to NPM and imported as a dependency in `PageComposer`.

Vue was easy to pick up comparing to other solutions out there, so we'll be able to easily add new developers to the project, maintenance will be easier.
supports Single File Components, which is aligned to the spec of WebComponents. We found that those suited our needs perfectly.

---
[1]: http://www.gilt.com/men
[2]: https://developer.mozilla.org/en-US/docs/Web/Web_Components/Custom_Elements
