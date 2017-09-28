The Aggregate Status Card shows a total number of objects and an aggregated status for those objects. The most common use case for this pattern is seen in a dashboard view to illustrate the total count and the status of objects in an environment. The mini card alternate can be used in the case when there is less space available for the status card as well as when there is less information to show in the card.

#### html source code

```html
<div class="cards-pf">
  <div class="container-fluid container-cards-pf">
    <div class="row row-cards-pf">
      <div class="col-xs-6 col-sm-4 col-md-4">
        <div class="card-pf card-pf-accented card-pf-aggregate-status">
          <h2 class="card-pf-title">
            <span class="fa fa-shield"></span><span class="card-pf-aggregate-status-count">0</span> Ipsum
          </h2>
          <div class="card-pf-body">
            <p class="card-pf-aggregate-status-notifications">
              <span class="card-pf-aggregate-status-notification"><a href="#" class="add" data-toggle="tooltip" data-placement="top" title="Add Ipsum"><span class="pficon pficon-add-circle-o"></span></a></span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-xs-6 col-sm-4 col-md-4">
        <div class="card-pf card-pf-accented card-pf-aggregate-status">
          <h2 class="card-pf-title">
            <a href="#"><span class="fa fa-shield"></span><span class="card-pf-aggregate-status-count">20</span> Amet</a>
          </h2>
          <div class="card-pf-body">
            <p class="card-pf-aggregate-status-notifications">
              <span class="card-pf-aggregate-status-notification"><a href="#"><span class="pficon pficon-error-circle-o"></span>4</a></span>
              <span class="card-pf-aggregate-status-notification"><a href="#"><span class="pficon pficon-warning-triangle-o"></span>1</a></span>
            </p>
          </div>
        </div>

      </div>
      <div class="col-xs-6 col-sm-4 col-md-4">
        <div class="card-pf card-pf-accented card-pf-aggregate-status">
          <h2 class="card-pf-title">
            <a href="#"><span class="fa fa-shield"></span><span class="card-pf-aggregate-status-count">9</span> Adipiscing</a>
          </h2>
          <div class="card-pf-body">
            <p class="card-pf-aggregate-status-notifications">
              <span class="card-pf-aggregate-status-notification"><span class="pficon pficon-ok"></span></span>
            </p>
          </div>
        </div>

      </div>
    </div><!-- /row -->
  </div><!-- /container --><div class="container-fluid container-cards-pf">
  <div class="row row-cards-pf">
    <div class="col-xs-6 col-sm-4 col-md-4">
      <div class="card-pf card-pf-accented card-pf-aggregate-status">
        <h2 class="card-pf-title">
          <span class="fa fa-shield"></span><span class="card-pf-aggregate-status-count">0</span> Ipsum
        </h2>
        <div class="card-pf-body">
          <p class="card-pf-aggregate-status-notifications">
            <span class="card-pf-aggregate-status-notification"><a href="#" class="add" data-toggle="tooltip" data-placement="top" title="Add Ipsum"><span class="pficon pficon-add-circle-o"></span></a></span>
          </p>
        </div>
      </div>

    </div>
    <div class="col-xs-6 col-sm-4 col-md-4">
      <div class="card-pf card-pf-accented card-pf-aggregate-status">
        <h2 class="card-pf-title">
          <a href="#"><span class="fa fa-shield"></span><span class="card-pf-aggregate-status-count">20</span> Amet</a>
        </h2>
        <div class="card-pf-body">
          <p class="card-pf-aggregate-status-notifications">
            <span class="card-pf-aggregate-status-notification"><a href="#"><span class="pficon pficon-error-circle-o"></span>4</a></span>
            <span class="card-pf-aggregate-status-notification"><a href="#"><span class="pficon pficon-warning-triangle-o"></span>1</a></span>
          </p>
        </div>
      </div>

    </div>
    <div class="col-xs-6 col-sm-4 col-md-4">
      <div class="card-pf card-pf-accented card-pf-aggregate-status">
        <h2 class="card-pf-title">
          <a href="#"><span class="fa fa-shield"></span><span class="card-pf-aggregate-status-count">9</span> Adipiscing</a>
        </h2>
        <div class="card-pf-body">
          <p class="card-pf-aggregate-status-notifications">
            <span class="card-pf-aggregate-status-notification"><span class="pficon pficon-ok"></span></span>
          </p>
        </div>
      </div>
    </div>
  </div><!-- /row -->
</div><!-- /container -->
</div>
```

#### js source code

```js
$(function() {
  // matchHeight the contents of each .card-pf and then the .card-pf itself
  $(".row-cards-pf > [class*='col'] > .card-pf .card-pf-title").matchHeight();
  $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-body").matchHeight();
  $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-footer").matchHeight();
  $(".row-cards-pf > [class*='col'] > .card-pf").matchHeight();
  // initialize tooltips
  $('[data-toggle="tooltip"]').tooltip();
});
```