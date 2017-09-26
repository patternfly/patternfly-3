$(function() {
  // matchHeight the contents of each .card-pf and then the .card-pf itself
  $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-body").matchHeight();
});
$(document).ready(function() {
  // Card Single Select
  $('.card-pf-view-single-select').click(function() {
    if ($(this).hasClass('active'))
    { $(this).removeClass('active'); }
    else
    { $('.card-pf-view-single-select').removeClass('active'); $(this).addClass('active'); }
  });
});
