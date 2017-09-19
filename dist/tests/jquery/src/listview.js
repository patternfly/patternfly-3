$(document).ready(function () {
  // Row Checkbox Selection
  $("input[type='checkbox']").change(function (e) {
    if ($(this).is(":checked")) {
      $(this).closest('.list-group-item').addClass("active");
    } else {
      $(this).closest('.list-group-item').removeClass("active");
    }
  });
  // toggle dropdown menu
  $('.list-view-pf-actions').on('show.bs.dropdown', function () {
    var $this = $(this);
    var $dropdown = $this.find('.dropdown');
    var space = $(window).height() - $dropdown[0].getBoundingClientRect().top - $this.find('.dropdown-menu').outerHeight(true);
    $dropdown.toggleClass('dropup', space < 10);
  });
  // allow users to select multiple list items with shift key
  $('.list-group').on('click', '.list-view-pf-checkbox>input', function(event) {
    var $list = $('.list-group');
    var prevIndex = $list.data('preIndex');
    var $listItems = $list.children('.list-group-item');
    var $currentItem = $(this).closest('.list-group-item');
    if(event.shiftKey && prevIndex > -1 && this.checked) {
      var currentIndex = $listItems.index($currentItem);
      var $selectScope = currentIndex - prevIndex > 0
        ? $currentItem.prevAll().not($listItems.eq(prevIndex).prevAll().addBack())
        : $listItems.eq(prevIndex).prevAll().not($currentItem.prevAll().addBack());
      $selectScope.addClass('active').find('.list-view-pf-checkbox').children('input').prop('checked', true);
    }
    $list.data('preIndex', this.checked ? $listItems.index($currentItem) : -1);
  });

});
