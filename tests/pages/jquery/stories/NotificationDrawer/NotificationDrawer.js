import React from 'react';
import NotificationDrawerPanel from './NotificationDrawerPanel';

export default class NotificationDrawer extends React.Component {
  componentDidMount() {
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
      // Special case, close navigation menu in mobile mode
     if ($('.container-pf-nav-pf-vertical').hasClass('hidden-nav')) {
       $('.nav-pf-vertical').removeClass('show-mobile-nav');
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
  }

  render() {
    return (
      <div className="drawer-pf hide drawer-pf-notifications-non-clickable">
        <div className="drawer-pf-title">
          <a className="drawer-pf-toggle-expand fa fa-angle-double-left hidden-xs"></a>
          <a className="drawer-pf-close pficon pficon-close"></a>
          <h3 className="text-center">Notifications Drawer</h3>
        </div>
        <div className="panel-group" id="notification-drawer-accordion">
          <div className="panel panel-default">
            <div className="panel-heading" data-component="collapse-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#notification-drawer-accordion" href="#fixedCollapseOne">
                  Notification Tab 1
                </a>
              </h4>
              <span className="panel-counter">5 New Events</span>
            </div>
            <div id="fixedCollapseOne" className="panel-collapse collapse in">
              <div className="panel-body">
                <NotificationDrawerPanel id="1"/>
              </div>
              <div className="blank-slate-pf hidden">
                <div className="blank-slate-pf-icon">
                  <span className="pficon-info"></span>
                </div>
                <h1>There are no notifications to display.</h1>
              </div>
              <div className="drawer-pf-action">
                <div className="drawer-pf-action-link" data-toggle="mark-all-read">
                  <button className="btn btn-link">Mark All Read</button>
                </div>
                <div className="drawer-pf-action-link" data-toggle="clear-all">
                  <button className="btn btn-link">
                    <span className="pficon pficon-close"></span>
                    Clear All
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" data-component="collapse-heading">
              <h4 className="panel-title">
                <a className="collapsed" data-toggle="collapse" data-parent="#notification-drawer-accordion" href="#fixedCollapseTwo">
                  Notification Tab 2
                </a>
              </h4>
              <span className="panel-counter">5 New Events</span>
            </div>
            <div id="fixedCollapseTwo" className="panel-collapse collapse">
              <div className="panel-body">
                <NotificationDrawerPanel id="2"/>
                <NotificationDrawerPanel id="3"/>
                <NotificationDrawerPanel id="4"/>
                <div className="drawer-pf-loading text-center">
                  <span className="spinner spinner-xs spinner-inline"></span> Loading More
                </div>
              </div>
              <div className="blank-slate-pf hidden">
                <div className="blank-slate-pf-icon">
                  <span className="pficon-info"></span>
                </div>
                <h1>There are no notifications to display.</h1>
              </div>
              <div className="drawer-pf-action">
                <div className="drawer-pf-action-link" data-toggle="mark-all-read">
                  <button className="btn btn-link">Mark All Read</button>
                </div>
                <div className="drawer-pf-action-link" data-toggle="clear-all">
                  <button className="btn btn-link">
                    <span className="pficon pficon-close"></span>
                    Clear All
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" data-component="collapse-heading">
              <h4 className="panel-title">
                <a className="collapsed" data-toggle="collapse" data-parent="#notification-drawer-accordion" href="#fixedCollapseThree">
                  Notification Tab 3
                </a>
              </h4>
              <span className="panel-counter">5 New Events</span>
            </div>
            <div id="fixedCollapseThree" className="panel-collapse collapse">
              <div className="panel-body">
                <NotificationDrawerPanel id="5"/>
                <NotificationDrawerPanel id="6"/>
                <NotificationDrawerPanel id="7"/>
              </div>
              <div className="blank-slate-pf hidden">
                <div className="blank-slate-pf-icon">
                  <span className="pficon-info"></span>
                </div>
                <h1>There are no notifications to display.</h1>
              </div>
              <div className="drawer-pf-action">
                <div className="drawer-pf-action-link" data-toggle="mark-all-read">
                  <button className="btn btn-link">Mark All Read</button>
                </div>
                <div className="drawer-pf-action-link" data-toggle="clear-all">
                  <button className="btn btn-link">
                    <span className="pficon pficon-close"></span>
                    Clear All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}