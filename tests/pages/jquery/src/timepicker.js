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
