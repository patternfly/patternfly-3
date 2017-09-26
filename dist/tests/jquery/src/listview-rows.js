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
