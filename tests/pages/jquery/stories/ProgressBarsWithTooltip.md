For official documentation, see [https://www.patternfly.org](https://www.patternfly.org) and [http://getbootstrap.com](http://getbootstrap.com).

#### html source code

```html
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;" data-toggle="tooltip" title="" data-original-title="60% Used">
    <span class="sr-only">60% Used</span>
  </div>
  <div class="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%;" data-toggle="tooltip" title="" data-original-title="40% Available">
    <span class="sr-only">40% Available</span>
  </div>
</div>
```

#### js source code

```js
// Initialize Tooltip
jQuery(document).ready(function() {
  jQuery('[data-toggle="tooltip"]').tooltip();
});
```