See [http://getbootstrap.com/javascript/#popovers](http://getbootstrap.com/javascript/#popovers) for complete popover documentation.

**Note:** Displaying the close (X) icon in popovers requires patternfly.min.js, initialization via popovers() (note the "s"), and adding data attribute data-close="true" to the trigger element.

#### html source code

```html
<div>
  <a href="#" class="btn btn-default" data-toggle="popover" data-html="true" title="1 http smartproxy 1 http http http" data-content="This is more information about a smartproxy. This is more information about a smartproxy. This is more information about a smartproxy. This is more information about a smartproxy." data-close="true">Click to toggle popover</a>
</div>
```

#### js source code

```js
// Initialize Popovers
$(document).ready(function() {
  $('[data-toggle=popover]').popovers()
});
```