The Utilization Bar Chart depicts the percentage utilization ratio between used and available.

#### html source code

```html
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%;" data-toggle="tooltip" title="25% Used">
    <span class="sr-only">25% Used</span>
  </div>
  <div class="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;" data-toggle="tooltip" title="75% Available">
    <span class="sr-only">75% Available</span>
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