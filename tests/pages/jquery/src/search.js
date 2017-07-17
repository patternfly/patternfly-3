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
