For official documentation, see [https://www.patternfly.org](https://www.patternfly.org) and [http://getbootstrap.com](http://getbootstrap.com).

#### html source code

```html
<form role="form" class="search-pf has-button">
  <div class="form-group has-clear">
    <div class="search-pf-input-group">
      <label for="search1" class="sr-only">Search</label>
      <input id="search1" type="search" class="form-control" placeholder="Search">
      <button type="button" class="clear" aria-hidden="true" style="display: none;"><span class="pficon pficon-close"></span></button>
    </div>
  </div>
  <div class="form-group">
    <button class="btn btn-default" type="submit"><span class="fa fa-search"></span></button>
  </div>
</form>
```

#### js source code

```js
(function($) {
  $(document).ready(function() {
    // Hide the clear button if the search input is empty
    $(".search-pf .has-clear .clear").each(function() {
      if (!$(this).prev('.form-control').val()) {
        $(this).hide();
      }
    });
    // Show the clear button upon entering text in the search input
    $(".search-pf .has-clear .form-control").keyup(function () {
      var t = $(this);
      t.next('button').toggle(Boolean(t.val()));
    });
    // Upon clicking the clear button, empty the entered text and hide the clear button
    $(".search-pf .has-clear .clear").click(function () {
      $(this).prev('.form-control').val('').focus();
      $(this).hide();
    });
  });
})(jQuery);
```