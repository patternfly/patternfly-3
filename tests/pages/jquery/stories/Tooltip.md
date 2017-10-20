See [http://getbootstrap.com/javascript/#tooltips](http://getbootstrap.com/javascript/#tooltips) for complete tooltip documentation.

#### html source code

```html
<button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tooltip on top">Tooltip on top</button>
```

#### js source code

```js
// Initialize Tooltip
$(document).ready(function() {
  $('.example-tooltips').tooltip({
    selector: "[data-toggle=tooltip]",
    container: "body"
  });
});
```