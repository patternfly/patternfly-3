For official documentation, see [https://www.patternfly.org](https://www.patternfly.org/) and [http://getbootstrap.com](http://getbootstrap.com).

#### html source code

```html
<div class="list-group list-view-pf">
  <div class="list-group-item">
    <div class="list-view-pf-checkbox">
      <input type="checkbox">
    </div>
    <div class="list-view-pf-actions">
      <button class="btn btn-default">Action</button>
      <div class="dropdown pull-right dropdown-kebab-pf">
        <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          <span class="fa fa-ellipsis-v"></span>
        </button>
        <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#">Separated link</a></li>
        </ul>
      </div>

    </div>
    <div class="list-view-pf-main-info">
      <div class="list-view-pf-left">
        <span class="fa fa-plane list-view-pf-icon-sm"></span>
      </div>
      <div class="list-view-pf-body">
        <div class="list-view-pf-description">
          <div class="list-group-item-heading">
            Event One
          </div>
          <div class="list-group-item-text">
            The following snippet of text is <a href="#">rendered as link text</a>.
          </div>
        </div>
        <div class="list-view-pf-additional-info">
          <div class="list-view-pf-additional-info-item">
            <span class="pficon pficon-screen"></span>
            <strong>8</strong> Hosts
          </div>
          <div class="list-view-pf-additional-info-item">
            <span class="pficon pficon-cluster"></span>
            <strong>8</strong> Clusters
          </div>
          <div class="list-view-pf-additional-info-item">
            <span class="pficon pficon-container-node"></span>
            <strong>18</strong> Nodes
          </div>
          <div class="list-view-pf-additional-info-item">
            <span class="pficon pficon-image"></span>
            <strong>4</strong> Images
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

#### js source code

```js
// Row Checkbox Selection
$(document).ready(function () {
  $("input[type='checkbox']").change(function (e) {
    if ($(this).is(":checked")) {
      $(this).closest('.list-group-item').addClass("active");
    } else {
      $(this).closest('.list-group-item').removeClass("active");
    }
  });
});
```