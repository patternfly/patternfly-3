For official documentation, see [https://www.patternfly.org](https://www.patternfly.org) and [http://getbootstrap.com](http://getbootstrap.com).

#### html source code

```html
<div class="list-pf">
  <div class="list-pf-item">
    <div class="list-pf-container" tabIndex="0">
      <div class="list-pf-chevron">
        <span class="fa fa-angle-right"></span>
      </div>
      <div class="list-pf-content">
        First line
      </div>
    </div>
    <div class="list-pf-expansion collapse">
      <div class="list-pf-container" tabIndex="0">
        <div class="list-pf-chevron">
          <span class="fa fa-angle-right"></span>
        </div>
        <div class="list-pf-content">
          This is a first level section
        </div>
      </div>
      <div class="list-pf-expansion collapse">
        <div class="list-pf-container" tabIndex="0">
          <div class="list-pf-content">
            This is a second level section
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="list-pf-item active">
    <div class="list-pf-container" tabIndex="0">
      <div class="list-pf-chevron">
        <span class="fa fa-angle-down"></span>
      </div>
      <div class="list-pf-content">
        This item is open by default
      </div>
    </div>
    <div class="list-pf-expansion collapse in">
      <div class="list-pf-container" tabIndex="0">
        <div class="list-pf-chevron">
          <span class="fa fa-angle-down"></span>
        </div>
        <div class="list-pf-content">
          This is a first level section
        </div>
      </div>
      <div class="list-pf-expansion collapse in">
        <div class="list-pf-container" tabIndex="0">
          <div class="list-pf-content">
            This is a second level section
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

#### js source code

```js
$('.list-pf').pfList();
```