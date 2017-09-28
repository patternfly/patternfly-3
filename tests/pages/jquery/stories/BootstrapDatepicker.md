See [http://bootstrap-datepicker.readthedocs.org/en/latest/](http://bootstrap-datepicker.readthedocs.org/en/latest/) for complete Bootstrap Datepicker documentation.

#### html source code

```html
<div id="datepicker" class="input-group date">
  <input type="text" class="form-control bootstrap-datepicker" readonly="">
  <span class="input-group-addon">
    <span class="fa fa-calendar"></span>
  </span>
</div>
```

#### third-party js
```html
<script src="../node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>
```

#### js source code

```js
// Initialize Bootstrap-datepicker
$('#datepicker').datepicker({
  autoclose: true,
  orientation: "top auto",
  todayBtn: "linked",
  todayHighlight: true
});
```