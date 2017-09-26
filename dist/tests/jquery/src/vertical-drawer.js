$(document).ready(function() {
  // Initialize to unread notifications
  // TODO: add badge for unread notifications

  // Show/Hide Notifications Drawer
  $('.drawer-pf-trigger').click(function() {
    var $drawer = $('.drawer-pf');

    $(this).toggleClass('open');
    if ($drawer.hasClass('hide')) {
      $drawer.removeClass('hide');
      setTimeout(function () {
        if (window.dispatchEvent) {
          window.dispatchEvent(new Event('resize'));
        }
        // Special case for IE
        if ($(document).fireEvent) {
          $(document).fireEvent('onresize');
        }
      }, 100);
    } else {
      $drawer.addClass('hide');
    }
  });
  $('.drawer-pf-close').click(function() {
    var $drawer = $('.drawer-pf');

    $('.drawer-pf-trigger').removeClass('open');
    $drawer.addClass('hide');
  });
  $('.drawer-pf-toggle-expand').click(function() {
    var $drawer = $('.drawer-pf');
    var $drawerNotifications = $drawer.find('.drawer-pf-notification');

    if ($drawer.hasClass('drawer-pf-expanded')) {
      $drawer.removeClass('drawer-pf-expanded');
      $drawerNotifications.removeClass('expanded-notification');
    } else {
      $drawer.addClass('drawer-pf-expanded');
      $drawerNotifications.addClass('expanded-notification');
    }
  });

  // Mark All Read / Clear All
  $('.panel-collapse').each(function (index, panel) {
    var $panel = $(panel);
    var unreadCount = $panel.find('.drawer-pf-notification.unread').length;
    $(panel.parentElement).find('.panel-counter').text(unreadCount + ' New Event' + (unreadCount !== 1 ? 's' : ''));

    if ($('.drawer-pf .panel-collapse .unread').length === 0) {
      // TODO: remove badge for unread indicator
    }

    $panel.on('click', '.drawer-pf-action [data-toggle="mark-all-read"] .btn', function() {
      $panel.find('.unread').removeClass('unread');
      $panel.find('.drawer-pf-action [data-toggle="mark-all-read"]').remove();
      $(panel.parentElement).find('.panel-counter').text('0 New Events');
      if ($('.drawer-pf .panel-collapse .unread').length === 0) {
        $('.drawer-pf-trigger').removeClass('unread');
      }
    });
    $panel.on('click', '.drawer-pf-action [data-toggle="clear-all"] .btn', function() {
      $panel.find('.panel-body .drawer-pf-notification').remove();
      $panel.find('.drawer-pf-action').remove();
      $panel.find('.blank-slate-pf').removeClass('hidden');
      $panel.find('.drawer-pf-loading').addClass('hidden');
      $(panel.parentElement).find('.panel-counter').text('0 New Events');
      if ($('.drawer-pf .panel-collapse .unread').length === 0) {
        // TODO: remove badge for unread indicator
      }
    });

    $panel.find('.drawer-pf-notification').each(function (index, notification) {
      var $notification = $(notification);
      $notification.on('click', '.drawer-pf-notification-content', function() {
        $notification.removeClass('unread');
        var unreadCount = $panel.find('.drawer-pf-notification.unread').length;
        $(panel.parentElement).find('.panel-counter').text(unreadCount + ' New Event' + (unreadCount !== 1 ? 's' : ''));
        if (unreadCount === 0) {
          $panel.find('.drawer-pf-action [data-toggle="mark-all-read"]').remove();
          if ($('.drawer-pf .panel-collapse .unread').length === 0) {
            // TODO: remove badge for unread indicator
          }
        }
      });
    });
  });

  $('#notification-drawer-accordion').initCollapseHeights('.panel-body');
});

$(document).ready(function() {
  // matchHeight the contents of each .card-pf and then the .card-pf itself
  $(".row-cards-pf > [class*='col'] > .card-pf .card-pf-title").matchHeight();
  $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-body").matchHeight();
  $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-footer").matchHeight();
  $(".row-cards-pf > [class*='col'] > .card-pf").matchHeight();

  // Initialize the vertical navigation
  $().setupVerticalNavigation(true);
});
