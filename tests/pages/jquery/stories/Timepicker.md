The timepicker allows a user to select a time. The most common use case is selecting a time for something to run or expire. The timepicker widget is based on the Bootstrap-datetimepicker. See the [Bootstrap 3 Datepicker v4 Docs](http://eonasdan.github.io/bootstrap-datetimepicker/#bootstrap-3-datepicker-v4-docs) for complete documentation.

#### html source code

```html
<div class="input-group time-picker-pf" id="timepicker1">
  <input type="text" class="form-control">
  <span class="input-group-addon btn btn-default">
    <span class="fa fa-clock-o"></span>
  </span>
</div>
```

#### third-party js
```html
<script src="../node_modules/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"></script>
```

#### js source code

```js
// Initialize Timepicker
$(function () {
  $('#timepicker1').datetimepicker({
    format: 'LT',
    keyBinds: {
      enter: function () {
        $('#timepicker1').find('input').trigger('change');
        this.hide();
      }
    }
  });
  $('#timepicker1').data('DateTimePicker').clear();
});
```