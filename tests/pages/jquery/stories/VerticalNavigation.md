It is recommended to use vertical navigation when your application requires global navigation that is displayed on the left. While vertical navigation menus generally consume more space than their horizontal counterparts, they have become more popular as desktop monitors move to wide-screen formats.

The vertical navigation pattern supports up to three levels of navigation (Primary, Secondary and Tertiary).

#### html source code

```html
<div class="layout-pf layout-pf-fixed">
  <nav class="navbar navbar-pf-vertical">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a href="/" class="navbar-brand">
        <img class="navbar-brand-icon" src="src/img/logo-alt.svg" alt=""/><img class="navbar-brand-name" src="src/img/brand-alt.svg" alt="PatternFly Enterprise Application" />
      </a>
    </div>
    <nav class="collapse navbar-collapse">
      <ul class="nav navbar-nav navbar-right navbar-iconic navbar-utility">

        <li class="dropdown">
          <a class="dropdown-toggle nav-item-iconic" id="dropdownMenu5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <span title="Help" class="fa pficon-help"></span>
            <span class="caret"></span>
          </a>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu5">
            <li><a href="#">Help</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a class="dropdown-toggle nav-item-iconic" id="dropdownMenu6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <span title="Username" class="fa pficon-user"></span>
            Brian Johnson <span class="caret"></span>
          </a>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu6">
            <li><a href="#">Preferences</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </li>
      </ul>
      <div class="drawer-pf hide drawer-pf-notifications-non-clickable">
        <div class="drawer-pf-title">
          <a class="drawer-pf-toggle-expand fa fa-angle-double-left"></a>
          <a  class="drawer-pf-close pficon pficon-close"></a>
          <h3 class="text-center">Notifications Drawer</h3>
        </div>
        <div class="panel-group" id="notification-drawer-accordion">
          <div class="panel panel-default">
            <div class="panel-heading" data-component="collapse-heading">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#notification-drawer-accordion" href="#fixedCollapseThirteen">
                  Notification Tab 1
                </a>
              </h4>
              <span class="panel-counter">5 New Events</span>
            </div>
            <div id="fixedCollapseThirteen" class="panel-collapse collapse in">
              <div class="panel-body">
                <div class="drawer-pf-notification unread">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight1">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <span class="pficon pficon-info pull-left"></span>
                  <div class="drawer-pf-notification-content">
                    <span class="drawer-pf-notification-message">A New Event! Huzzah! Bold!</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>
                <div class="drawer-pf-notification unread">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight2">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <span class="pficon pficon-ok pull-left"></span>
                  <div class="drawer-pf-notification-content">
                    <span class="drawer-pf-notification-message">Another Event Notification</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>
                <div class="drawer-pf-notification">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight3">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <span class="pficon pficon-warning-triangle-o pull-left"></span>
                  <div class="drawer-pf-notification-content">
                    <span class="drawer-pf-notification-message">Another Event Notification</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>
                <div class="drawer-pf-notification">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight4">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <div class="drawer-pf-notification-content">
                    <span class="pficon pficon-error-circle-o pull-left"></span>
                    <span class="drawer-pf-notification-message">Another Event Notification</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>

              </div>
              <div class="blank-slate-pf hidden">
                <div class="blank-slate-pf-icon">
                  <span class="pficon-info"></span>
                </div>
                <h1>There are no notifications to display.</h1>
              </div>
              <div class="drawer-pf-action">
                <div class="drawer-pf-action-link" data-toggle="mark-all-read">
                  <button class="btn btn-link">Mark All Read</button>
                </div>
                <div class="drawer-pf-action-link" data-toggle="clear-all">
                  <button class="btn btn-link">
                    <span class="pficon pficon-close"></span>
                    Clear All
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading" data-component="collapse-heading">
              <h4 class="panel-title">
                <a class="collapsed" data-toggle="collapse" data-parent="#notification-drawer-accordion" href="#fixedCollapseFourteen">
                  Notification Tab 2
                </a>
              </h4>
              <span class="panel-counter">5 New Events</span>
            </div>
            <div id="fixedCollapseFourteen" class="panel-collapse collapse">
              <div class="panel-body">
                <div class="drawer-pf-notification unread">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight5">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <span class="pficon pficon-info pull-left"></span>
                  <div class="drawer-pf-notification-content">
                    <span class="drawer-pf-notification-message">A New Event! Huzzah! Bold!</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>
                <div class="drawer-pf-notification unread">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight6">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <span class="pficon pficon-ok pull-left"></span>
                  <div class="drawer-pf-notification-content">
                    <span class="drawer-pf-notification-message">Another Event Notification</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>
                <div class="drawer-pf-notification">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight7">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <span class="pficon pficon-warning-triangle-o pull-left"></span>
                  <div class="drawer-pf-notification-content">
                    <span class="drawer-pf-notification-message">Another Event Notification</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>
                <div class="drawer-pf-notification">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight8" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight8">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <div class="drawer-pf-notification-content">
                    <span class="pficon pficon-error-circle-o pull-left"></span>
                    <span class="drawer-pf-notification-message">Another Event Notification</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>

                <div class="drawer-pf-notification unread">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight99" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight99">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <span class="pficon pficon-info pull-left"></span>
                  <div class="drawer-pf-notification-content">
                    <span class="drawer-pf-notification-message">A New Event! Huzzah! Bold!</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>
                <div class="drawer-pf-notification unread">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight98" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight98">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <span class="pficon pficon-ok pull-left"></span>
                  <div class="drawer-pf-notification-content">
                    <span class="drawer-pf-notification-message">Another Event Notification</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>
                <div class="drawer-pf-notification">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight97" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight97">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <span class="pficon pficon-warning-triangle-o pull-left"></span>
                  <div class="drawer-pf-notification-content">
                    <span class="drawer-pf-notification-message">Another Event Notification</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>
                <div class="drawer-pf-notification">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight96" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight96">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <div class="drawer-pf-notification-content">
                    <span class="pficon pficon-error-circle-o pull-left"></span>
                    <span class="drawer-pf-notification-message">Another Event Notification</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>

                <div class="drawer-pf-notification unread">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight95" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight95">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <span class="pficon pficon-info pull-left"></span>
                  <div class="drawer-pf-notification-content">
                    <span class="drawer-pf-notification-message">A New Event! Huzzah! Bold!</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>
                <div class="drawer-pf-notification unread">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight94" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight94">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <span class="pficon pficon-ok pull-left"></span>
                  <div class="drawer-pf-notification-content">
                    <span class="drawer-pf-notification-message">Another Event Notification</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>
                <div class="drawer-pf-notification">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight15" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight15">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <span class="pficon pficon-warning-triangle-o pull-left"></span>
                  <div class="drawer-pf-notification-content">
                    <span class="drawer-pf-notification-message">Another Event Notification</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>
                <div class="drawer-pf-notification">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight16" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight16">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <div class="drawer-pf-notification-content">
                    <span class="pficon pficon-error-circle-o pull-left"></span>
                    <span class="drawer-pf-notification-message">Another Event Notification</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>

                <div class="drawer-pf-loading text-center">
                  <span class="spinner spinner-xs spinner-inline"></span> Loading More
                </div>
              </div>
              <div class="blank-slate-pf hidden">
                <div class="blank-slate-pf-icon">
                  <span class="pficon-info"></span>
                </div>
                <h1>There are no notifications to display.</h1>
              </div>
              <div class="drawer-pf-action">
                <div class="drawer-pf-action-link" data-toggle="mark-all-read">
                  <button class="btn btn-link">Mark All Read</button>
                </div>
                <div class="drawer-pf-action-link" data-toggle="clear-all">
                  <button class="btn btn-link">
                    <span class="pficon pficon-close"></span>
                    Clear All
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading" data-component="collapse-heading">
              <h4 class="panel-title">
                <a class="collapsed" data-toggle="collapse" data-parent="#notification-drawer-accordion" href="#fixedCollapseFifteen">
                  Notification Tab 3
                </a>
              </h4>
              <span class="panel-counter">5 New Events</span>
            </div>
            <div id="fixedCollapseFifteen" class="panel-collapse collapse">
              <div class="panel-body">
                <div class="drawer-pf-notification unread">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight17" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight17">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <span class="pficon pficon-info pull-left"></span>
                  <div class="drawer-pf-notification-content">
                    <span class="drawer-pf-notification-message">A New Event! Huzzah! Bold!</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>
                <div class="drawer-pf-notification unread">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight18" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight18">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <span class="pficon pficon-ok pull-left"></span>
                  <div class="drawer-pf-notification-content">
                    <span class="drawer-pf-notification-message">Another Event Notification</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>
                <div class="drawer-pf-notification">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight19" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight19">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <span class="pficon pficon-warning-triangle-o pull-left"></span>
                  <div class="drawer-pf-notification-content">
                    <span class="drawer-pf-notification-message">Another Event Notification</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>
                <div class="drawer-pf-notification">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight20" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight20">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <div class="drawer-pf-notification-content">
                    <span class="pficon pficon-error-circle-o pull-left"></span>
                    <span class="drawer-pf-notification-message">Another Event Notification</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>

                <div class="drawer-pf-notification unread">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight21" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight21">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <span class="pficon pficon-info pull-left"></span>
                  <div class="drawer-pf-notification-content">
                    <span class="drawer-pf-notification-message">A New Event! Huzzah! Bold!</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>
                <div class="drawer-pf-notification unread">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight22" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight22">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <span class="pficon pficon-ok pull-left"></span>
                  <div class="drawer-pf-notification-content">
                    <span class="drawer-pf-notification-message">Another Event Notification</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>
                <div class="drawer-pf-notification">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight23" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight23">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <span class="pficon pficon-warning-triangle-o pull-left"></span>
                  <div class="drawer-pf-notification-content">
                    <span class="drawer-pf-notification-message">Another Event Notification</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>
                <div class="drawer-pf-notification">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight24" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight24">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <div class="drawer-pf-notification-content">
                    <span class="pficon pficon-error-circle-o pull-left"></span>
                    <span class="drawer-pf-notification-message">Another Event Notification</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>

                <div class="drawer-pf-notification unread">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight25" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight25">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <span class="pficon pficon-info pull-left"></span>
                  <div class="drawer-pf-notification-content">
                    <span class="drawer-pf-notification-message">A New Event! Huzzah! Bold!</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>
                <div class="drawer-pf-notification unread">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight26" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight26">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <span class="pficon pficon-ok pull-left"></span>
                  <div class="drawer-pf-notification-content">
                    <span class="drawer-pf-notification-message">Another Event Notification</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>
                <div class="drawer-pf-notification">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight27" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight27">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <span class="pficon pficon-warning-triangle-o pull-left"></span>
                  <div class="drawer-pf-notification-content">
                    <span class="drawer-pf-notification-message">Another Event Notification</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>
                <div class="drawer-pf-notification">

                  <div class="dropdown pull-right dropdown-kebab-pf">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight28" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span class="fa fa-ellipsis-v"></span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight28">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <div class="drawer-pf-notification-content">
                    <span class="pficon pficon-error-circle-o pull-left"></span>
                    <span class="drawer-pf-notification-message">Another Event Notification</span>
                    <div class="drawer-pf-notification-info">
                      <span class="date">3/31/16</span>
                      <span class="time">12:12:44 PM</span>
                    </div>
                  </div>
                </div>

              </div>
              <div class="blank-slate-pf hidden">
                <div class="blank-slate-pf-icon">
                  <span class="pficon-info"></span>
                </div>
                <h1>There are no notifications to display.</h1>
              </div>
              <div class="drawer-pf-action">
                <div class="drawer-pf-action-link" data-toggle="mark-all-read">
                  <button class="btn btn-link">Mark All Read</button>
                </div>
                <div class="drawer-pf-action-link" data-toggle="clear-all">
                  <button class="btn btn-link">
                    <span class="pficon pficon-close"></span>
                    Clear All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </nav> <!--/.navbar-->


  <div class="nav-pf-vertical nav-pf-vertical-with-sub-menus">
    <ul class="list-group">
      <li class="list-group-item">
        <a>
          <span class="fa fa-dashboard" data-toggle="tooltip" title="Dashboard"></span>
          <span class="list-group-item-value">Dashboard</span>
        </a>
      </li>
      <li class="list-group-item">
        <a>
          <span class="fa fa-shield" data-toggle="tooltip" title="Dolor"></span>
          <span class="list-group-item-value">Dolor</span>

        </a>
      </li>
    <li class="list-group-item active secondary-nav-item-pf" data-target="#ipsum-secondary">
      <a>
        <span class="fa fa-space-shuttle" data-toggle="tooltip" title="Ipsum"></span>
        <span class="list-group-item-value">Ipsum</span>
      </a>
      <div id="-secondary" class="nav-pf-secondary-nav">
        <div class="nav-item-pf-header">
          <a href="#0" class="secondary-collapse-toggle-pf" data-toggle="collapse-secondary-nav"></a>
          <span>Ipsum</span>
        </div>
        <ul class="list-group">
          <li class="list-group-item active tertiary-nav-item-pf" data-target="#ipsum-intellegam-tertiary">
            <a href="#0">
              <span class="list-group-item-value">Intellegam</span>
            </a>
            <div id="compute-containers-tertiary" class="nav-pf-tertiary-nav">
              <div class="nav-item-pf-header">
                <a href="#0" class="tertiary-collapse-toggle-pf" data-toggle="collapse-tertiary-nav"></a>
                <span>Intellegam</span>
              </div>
              <ul class="list-group">
                <li class="list-group-item active">
                  <a href="#0">
                    <span id="compute-containers-users-nav-item" class="list-group-item-value">Recteque</span>
                  </a>
                </li>
                <li class="list-group-item">
                  <a href="#0">
                    <span id="compute-containers-groups-nav-item" class="list-group-item-value">Suavitate</span>
                  </a>
                </li>
                <li class="list-group-item">
                  <a href="#0">
                    <span id="compute-containers-roles-nav-item" class="list-group-item-value">Vituperatoribus</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="list-group-item tertiary-nav-item-pf" data-target="#ipsum-copiosae-tertiary">
            <a href="#0">
              <span class="list-group-item-value">Copiosae</span>
            </a>
            <div id="compute-infrastructure-tertiary" class="nav-pf-tertiary-nav">
              <div class="nav-item-pf-header">
                <a href="#0" class="tertiary-collapse-toggle-pf" data-toggle="collapse-tertiary-nav"></a>
                <span>Copiosae</span>
              </div>
              <ul class="list-group">
                <li class="list-group-item">
                  <a href="#0">
                    <span class="list-group-item-value">Exerci</span>
                  </a>
                </li>
                <li class="list-group-item">
                  <a href="#0">
                    <span class="list-group-item-value">Quaeque</span>
                  </a>
                </li>
                <li class="list-group-item">
                  <a href="#0">
                    <span class="list-group-item-value">Utroque</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="list-group-item tertiary-nav-item-pf" data-target="#ipsum-patrioque-tertiary">
            <a href="#0" >
              <span class="list-group-item-value">Patrioque</span>
            </a>
            <div id="compute-clouds-tertiary" class="nav-pf-tertiary-nav">
              <div class="nav-item-pf-header">
                <a href="#0" class="tertiary-collapse-toggle-pf" data-toggle="collapse-tertiary-nav"></a>
                <span>Patrioque</span>
              </div>
              <ul class="list-group">
                <li class="list-group-item">
                  <a href="#0">
                    <span class="list-group-item-value">Novum</span>
                  </a>
                </li>
                <li class="list-group-item">
                  <a href="#0">
                    <span class="list-group-item-value">Pericula</span>
                  </a>
                </li>
                <li class="list-group-item">
                  <a href="#0">
                    <span class="list-group-item-value">Gubergren</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="list-group-item">
            <a href="#0">
              <span class="list-group-item-value">Accumsan</span>
            </a>
          </li>
        </ul>
      </div>
    </li>
    <li class="list-group-item secondary-nav-item-pf" data-target="#amet-secondary">
      <a>
        <span class="fa fa-paper-plane" data-toggle="tooltip" title="Amet"></span>
        <span class="list-group-item-value">Amet</span>
      </a>
      <div id="amet-secondary" class="nav-pf-secondary-nav">
        <div class="nav-item-pf-header">
          <a href="#0" class="secondary-collapse-toggle-pf" data-toggle="collapse-secondary-nav"></a>
          <span>Amet</span>
        </div>
        <ul class="list-group">
          <li class="list-group-item tertiary-nav-item-pf" data-target="#amet-detracto-tertiary">
            <a href="#0">
              <span class="list-group-item-value">Detracto Suscipiantur</span>
            </a>
            <div id="amet-detracto-tertiary" class="nav-pf-tertiary-nav">
              <div class="nav-item-pf-header">
                <a href="#0" class="tertiary-collapse-toggle-pf" data-toggle="collapse-tertiary-nav"></a>
                <span>Detracto</span>
              </div>
              <ul class="list-group">
                <li class="list-group-item">
                  <a href="#0">
                    <span class="list-group-item-value">Delicatissimi</span>
                  </a>
                </li>
                <li class="list-group-item">
                  <a href="#0">
                    <span class="list-group-item-value">Aliquam</span>
                  </a>
                </li>
                <li class="list-group-item">
                  <a href="#0">
                    <span class="list-group-item-value">Principes</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="list-group-item tertiary-nav-item-pf" data-target="#amet-mediocrem-tertiary">
            <a href="#0">
              <span class="list-group-item-value">Mediocrem</span>
            </a>
            <div id="amet-mediocrem-tertiary" class="nav-pf-tertiary-nav">
              <div class="nav-item-pf-header">
                <a href="#0" class="tertiary-collapse-toggle-pf" data-toggle="collapse-tertiary-nav"></a>
                <span>Mediocrem</span>
              </div>
              <ul class="list-group">
                <li class="list-group-item">
                  <a href="#0">
                    <span class="list-group-item-value">Convenire</span>
                  </a>
                </li>
                <li class="list-group-item">
                  <a href="#0">
                    <span class="list-group-item-value">Nonumy</span>
                  </a>
                </li>
                <li class="list-group-item">
                  <a href="#0">
                    <span class="list-group-item-value">Deserunt</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="list-group-item tertiary-nav-item-pf" data-target="#amet-corrumpit-tertiary">
            <a href="#0">
              <span class="list-group-item-value">Corrumpit Cupidatat Proident Deserunt</span>
            </a>
            <div id="amet-corrumpit-tertiary" class="nav-pf-tertiary-nav">
              <div class="nav-item-pf-header">
                <a href="#0" class="tertiary-collapse-toggle-pf" data-toggle="collapse-tertiary-nav"></a>
                <span>Corrumpit</span>
              </div>
              <ul class="list-group">
                <li class="list-group-item">
                  <a href="#0">
                    <span class="list-group-item-value">Aeque</span>
                  </a>
                </li>
                <li class="list-group-item">
                  <a href="#0">
                    <span class="list-group-item-value">Delenit</span>
                  </a>
                </li>
                <li class="list-group-item">
                  <a href="#0">
                    <span class="list-group-item-value">Qualisque</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="list-group-item">
            <a href="#0">
              <span class="list-group-item-value">Urbanitas Habitant Morbi Tristique</span>
            </a>
          </li>
        </ul>
      </div>
    </li>
      <li class="list-group-item">
        <a>
          <span class="fa fa-graduation-cap" data-toggle="tooltip" title="Adipscing"></span>
          <span class="list-group-item-value">Adipscing</span>
        </a>
      </li>
      <li class="list-group-item">
        <a>
          <span class="fa fa-gamepad" data-toggle="tooltip" title="Lorem"></span>
          <span class="list-group-item-value">Lorem</span>
        </a>
      </li>

      <li class="list-group-item secondary-nav-item-pf mobile-nav-item-pf visible-xs-block" data-target="#amet-secondary">
        <a>
          <span class="pficon pficon-user" data-toggle="tooltip" title="" data-original-title="User"></span>
          <span class="list-group-item-value">User</span>
        </a>
        <div id="user-second" class="nav-pf-secondary-nav">
          <div class="nav-item-pf-header">
            <a class="secondary-collapse-toggle-pf" data-toggle="collapse-secondary-nav"></a>
            <span>User</span>
          </div>

          <ul class="list-group">
            <li class="list-group-item">
              <a>
                <span class="list-group-item-value">Preferences</span>
              </a>
            </li>

            <li class="list-group-item">
              <a>
                <span class="list-group-item-value">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </li>

      <li class="list-group-item secondary-nav-item-pf mobile-nav-item-pf visible-xs-block" data-target="#amet-secondary">
        <a>
          <span class="pficon pficon-help" data-toggle="tooltip" title="" data-original-title="Amet"></span>
          <span class="list-group-item-value">Help</span>
        </a>
        <div id="help-second" class="nav-pf-secondary-nav">
          <div class="nav-item-pf-header">
            <a class="secondary-collapse-toggle-pf" data-toggle="collapse-secondary-nav"></a>
            <span>Help</span>
          </div>
          <ul class="list-group">
            <li class="list-group-item">
              <a>
                <span class="list-group-item-value">Help</span>
              </a>
            </li>
            <li class="list-group-item">
              <a>
                <span class="list-group-item-value">About</span>
              </a>
            </li>
          </ul>
        </div>
      </li>

    </ul>

  </div>
  <div class="container-fluid container-cards-pf container-pf-nav-pf-vertical


     ">

    <div class="row row-cards-pf">
      <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
      <div class="col-xs-12 col-sm-6 col-md-3">
        <div class="card-pf card-pf-accented card-pf-aggregate-status">
          <h2 class="card-pf-title">
            <span class="fa fa-shield"></span><span class="card-pf-aggregate-status-count">0</span> Ipsum
          </h2>
          <div class="card-pf-body">
            <p class="card-pf-aggregate-status-notifications">
              <span class="card-pf-aggregate-status-notification"><a href="#" class="add" data-toggle="tooltip" data-placement="top" title="Add Ipsum"><span class="pficon pficon-add-circle-o"></span></a></span>
            </p>
          </div>
        </div>

      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">
        <div class="card-pf card-pf-accented card-pf-aggregate-status">
          <h2 class="card-pf-title">
            <a href="#"><span class="fa fa-shield"></span><span class="card-pf-aggregate-status-count">20</span> Amet</a>
          </h2>
          <div class="card-pf-body">
            <p class="card-pf-aggregate-status-notifications">
              <span class="card-pf-aggregate-status-notification"><a href="#"><span class="pficon pficon-error-circle-o"></span>4</a></span>
              <span class="card-pf-aggregate-status-notification"><a href="#"><span class="pficon pficon-warning-triangle-o"></span>1</a></span>
            </p>
          </div>
        </div>

      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">
        <div class="card-pf card-pf-accented card-pf-aggregate-status">
          <h2 class="card-pf-title">
            <a href="#"><span class="fa fa-shield"></span><span class="card-pf-aggregate-status-count">9</span> Adipiscing</a>
          </h2>
          <div class="card-pf-body">
            <p class="card-pf-aggregate-status-notifications">
              <span class="card-pf-aggregate-status-notification"><span class="pficon pficon-ok"></span></span>
            </p>
          </div>
        </div>

      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">
        <div class="card-pf card-pf-accented card-pf-aggregate-status">
          <h2 class="card-pf-title">
            <a href="#"><span class="fa fa-shield"></span><span class="card-pf-aggregate-status-count">12</span> Lorem</a>
          </h2>
          <div class="card-pf-body">
            <p class="card-pf-aggregate-status-notifications">
              <a href="#"><span class="card-pf-aggregate-status-notification"><span class="pficon pficon-error-circle-o"></span>1</span></a>
            </p>
          </div>
        </div>
      </div>
    </div><!-- /row -->
    <div class="row row-cards-pf">
      <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
      <div class="col-xs-12 col-sm-6 col-md-3">
        <div class="card-pf card-pf-accented card-pf-aggregate-status card-pf-aggregate-status-mini">
          <h2 class="card-pf-title">
            <span class="fa fa-rebel"></span>
            <span class="card-pf-aggregate-status-count">0</span> Ipsum
          </h2>
          <div class="card-pf-body">
            <p class="card-pf-aggregate-status-notifications">
              <span class="card-pf-aggregate-status-notification"><a href="#" class="add" data-toggle="tooltip" data-placement="top" title="Add Ipsum"><span class="pficon pficon-add-circle-o"></span></a></span>
            </p>
          </div>
        </div>

      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">
        <div class="card-pf card-pf-accented card-pf-aggregate-status card-pf-aggregate-status-mini">
          <h2 class="card-pf-title">
            <a href="#">
              <span class="fa fa-paper-plane"></span>
              <span class="card-pf-aggregate-status-count">20</span> Amet
            </a>
          </h2>
          <div class="card-pf-body">
            <p class="card-pf-aggregate-status-notifications">
              <span class="card-pf-aggregate-status-notification"><a href="#"><span class="pficon pficon-error-circle-o"></span>4</a></span>
            </p>
          </div>
        </div>

      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">
        <div class="card-pf card-pf-accented card-pf-aggregate-status card-pf-aggregate-status-mini">
          <h2 class="card-pf-title">
            <a href="#">
              <span class="pficon pficon-cluster"></span>
              <span class="card-pf-aggregate-status-count">9</span> Adipiscing
            </a>
          </h2>
          <div class="card-pf-body">
            <p class="card-pf-aggregate-status-notifications">
              <span class="card-pf-aggregate-status-notification"><span class="pficon pficon-ok"></span></span>
            </p>
          </div>
        </div>

      </div>
      <div class="col-xs-12 col-sm-6 col-md-3">
        <div class="card-pf card-pf-accented card-pf-aggregate-status card-pf-aggregate-status-mini">
          <h2 class="card-pf-title">
            <a href="#">
              <span class="pficon pficon-image"></span>
              <span class="card-pf-aggregate-status-count">12</span> Lorem
            </a>
          </h2>
          <div class="card-pf-body">
            <p class="card-pf-aggregate-status-notifications">
              <a href="#"><span class="card-pf-aggregate-status-notification"><span class="pficon pficon-error-circle-o"></span>1</span></a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row row-cards-pf">
      <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
      <div class="col-xs-12 col-sm-6">
        <div class="card-pf">
          <div class="card-pf-heading">
            <h2 class="card-pf-title">
              Top Utilized Clusters
            </h2>
          </div>
          <div class="card-pf-body">
            <div class="progress-description">
              RHOS6-Controller
            </div>
            <div class="progress progress-label-top-right">
              <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 95%;"  data-toggle="tooltip" title="95% Used">
                <span><strong>190.0 of 200.0 GB</strong> Used</span>
              </div>
              <div class="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100" style="width: 5%;" data-toggle="tooltip" title="5% Available">
                <span class="sr-only">5% Available</span>
              </div>
            </div>
            <div class="progress-description">
              CFMEQE-Cluster
            </div>
            <div class="progress progress-label-top-right">
              <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;"  data-toggle="tooltip" title="50% Used">
                <span><strong>100.0 of 200.0 GB</strong> Used</span>
              </div>
              <div class="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;" data-toggle="tooltip" title="50% Available">
                <span class="sr-only">50% Available</span>
              </div>
            </div>
            <div class="progress-description">
              RHOS-Undercloud
            </div>
            <div class="progress progress-label-top-right">
              <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"  data-toggle="tooltip" title="70% Used">
                <span><strong>140.0 of 200.0 GB</strong> Used</span>
              </div>
              <div class="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%;" data-toggle="tooltip" title="30% Available">
                <span class="sr-only">30% Available</span>
              </div>
            </div>
            <div class="progress-description">
              RHEL6-Controller
            </div>
            <div class="progress progress-label-top-right">
              <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="76.5" aria-valuemin="0" aria-valuemax="100" style="width: 76.5%;"  data-toggle="tooltip" title="76.5% Used">
                <span><strong>153.0 of 200.0 GB</strong> Used</span>
              </div>
              <div class="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="23.5" aria-valuemin="0" aria-valuemax="100" style="width: 23.5%;" data-toggle="tooltip" title="23.5% Available">
                <span class="sr-only">23.5% Available</span>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="col-xs-12 col-sm-6">
        <div class="card-pf">
          <div class="card-pf-heading">
            <h2 class="card-pf-title">
              Quotas
            </h2>
          </div>
          <div class="card-pf-body">
            <div class="progress-container progress-description-left progress-label-right">
              <div class="progress-description">
                CPU
              </div>
              <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%;" data-toggle="tooltip" title="25% Used">
                  <span><strong>115 of 460</strong> MHz</span>
                </div>
                <div class="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;" data-toggle="tooltip" title="75% Available">
                  <span class="sr-only">75% Available</span>
                </div>
              </div>
            </div>
            <div class="progress-container progress-description-left progress-label-right">
              <div class="progress-description">
                Memory
              </div>
              <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;" data-toggle="tooltip" title="8 GB Used">
                  <span><strong>8 of 16</strong> GB</span>
                </div>
                <div class="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;" data-toggle="tooltip" title="8 GB Available">
                  <span class="sr-only">50% Available</span>
                </div>
              </div>
            </div>
            <div class="progress-container progress-description-left progress-label-right">
              <div class="progress-description">
                Pods
              </div>
              <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="62.5" aria-valuemin="0" aria-valuemax="100" style="width: 62.5%;" data-toggle="tooltip" title="62.5% Used">
                  <span><strong>5 of 8</strong> Total</span>
                </div>
                <div class="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="37.5" aria-valuemin="0" aria-valuemax="100" style="width: 37.5%;" data-toggle="tooltip" title="37.5% Available">
                  <span class="sr-only">37.5% Available</span>
                </div>
              </div>
            </div>
            <div class="progress-container progress-description-left progress-label-right">
              <div class="progress-description">
                Services
              </div>
              <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;" data-toggle="tooltip" title="100% Used">
                  <span><strong>2 of 2</strong> Total</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div><!-- /row -->
    <div class="row row-cards-pf">
      <div class="col-md-12">
        <div class="card-pf card-pf-utilization">
          <div class="card-pf-heading">
            <p class="card-pf-heading-details">Last 30 days</p>
            <h2 class="card-pf-title">
              Utilization
            </h2>
          </div>
          <div class="card-pf-body">
            <div class="row">
              <div class="col-xs-12 col-sm-4 col-md-4">
                <h3 class="card-pf-subtitle">CPU</h3>
                <p class="card-pf-utilization-details">
                  <span class="card-pf-utilization-card-details-count">50</span>
                  <span class="card-pf-utilization-card-details-description">
              <span class="card-pf-utilization-card-details-line-1">Available</span>
              <span class="card-pf-utilization-card-details-line-2">of 1000 MHz</span>
            </span>
                </p>
                <div id="chart-pf-donut-13"></div>
                <div class="chart-pf-sparkline" id="chart-pf-sparkline-13"></div>
                <script>
                window.addEventListener('DOMContentLoaded', function() {
                  var donutConfig = $().c3ChartDefaults().getDefaultDonutConfig('A');
                  donutConfig.bindto = '#chart-pf-donut-13';
                  donutConfig.color =  {
                    pattern: ["#cc0000","#D1D1D1"]
                  };
                  donutConfig.data = {
                    type: "donut",
                    columns: [
                      ["Used", 95],
                      ["Available", 5]
                    ],
                    groups: [
                      ["used", "available"]
                    ],
                    order: null
                  };
                  donutConfig.tooltip = {
                    contents: function (d) {
                      return '<span class="donut-tooltip-pf" style="white-space: nowrap;">' +
                        Math.round(d[0].ratio * 100) + '%' + ' MHz ' + d[0].name +
                        '</span>';
                    }
                  };

                  var chart1 = c3.generate(donutConfig);
                  var donutChartTitle = d3.select("#chart-pf-donut-13").select('text.c3-chart-arcs-title');
                  donutChartTitle.text("");
                  donutChartTitle.insert('tspan').text("950").classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
                  donutChartTitle.insert('tspan').text("MHz Used").classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);

                  var sparklineConfig = $().c3ChartDefaults().getDefaultSparklineConfig();
                  sparklineConfig.bindto = '#chart-pf-sparkline-13';
                  sparklineConfig.data = {
                    columns: [
                      ['%', 10, 50, 28, 20, 31, 27, 60, 36, 52, 55, 62, 68, 69, 88, 74, 88, 95],
                    ],
                    type: 'area'
                  };
                  var chart2 = c3.generate(sparklineConfig);
                })
                </script>
              </div>
              <div class="col-xs-12 col-sm-4 col-md-4">
                <h3 class="card-pf-subtitle">Memory</h3>
                <p class="card-pf-utilization-details">
                  <span class="card-pf-utilization-card-details-count">256</span>
                  <span class="card-pf-utilization-card-details-description">
              <span class="card-pf-utilization-card-details-line-1">Available</span>
              <span class="card-pf-utilization-card-details-line-2">of 432 GB</span>
            </span>
                </p>
                <div id="chart-pf-donut-14"></div>
                <div class="chart-pf-sparkline" id="chart-pf-sparkline-14"></div>
                <script>
                window.addEventListener('DOMContentLoaded', function() {
                  var donutConfig = $().c3ChartDefaults().getDefaultDonutConfig('A');
                  donutConfig.bindto = '#chart-pf-donut-14';
                  donutConfig.color =  {
                    pattern: ["#3f9c35","#D1D1D1"]
                  };
                  donutConfig.data = {
                    type: "donut",
                    columns: [
                      ["Used", 41],
                      ["Available", 59]
                    ],
                    groups: [
                      ["used", "available"]
                    ],
                    order: null
                  };
                  donutConfig.tooltip = {
                    contents: function (d) {
                      return '<span class="donut-tooltip-pf" style="white-space: nowrap;">' +
                        Math.round(d[0].ratio * 100) + '%' + ' GB ' + d[0].name +
                        '</span>';
                    }
                  };

                  var chart3 = c3.generate(donutConfig);
                  var donutChartTitle = d3.select("#chart-pf-donut-14").select('text.c3-chart-arcs-title');
                  donutChartTitle.text("");
                  donutChartTitle.insert('tspan').text("176").classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
                  donutChartTitle.insert('tspan').text("GB Used").classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);

                  var sparklineConfig = $().c3ChartDefaults().getDefaultSparklineConfig();
                  sparklineConfig.bindto = '#chart-pf-sparkline-14';
                  sparklineConfig.data = {
                    columns: [
                      ['%', 35, 36, 20, 30, 31, 22, 44, 36, 40, 41, 55, 52, 48, 48, 50, 40, 41],
                    ],
                    type: 'area'
                  };
                  var chart4 = c3.generate(sparklineConfig);
                })
                </script>
              </div>
              <div class="col-xs-12 col-sm-4 col-md-4">
                <h3 class="card-pf-subtitle">Network</h3>
                <p class="card-pf-utilization-details">
                  <span class="card-pf-utilization-card-details-count">200</span>
                  <span class="card-pf-utilization-card-details-description">
              <span class="card-pf-utilization-card-details-line-1">Available</span>
              <span class="card-pf-utilization-card-details-line-2">of 1300 Gbps</span>
            </span>
                </p>
                <div id="chart-pf-donut-15"></div>
                <div class="chart-pf-sparkline" id="chart-pf-sparkline-15"></div>
                <script>
                window.addEventListener('DOMContentLoaded', function() {
                  var donutConfig = $().c3ChartDefaults().getDefaultDonutConfig('A');
                  donutConfig.bindto = '#chart-pf-donut-15';
                  donutConfig.color =  {
                    pattern: ["#EC7A08","#D1D1D1"]
                  };
                  donutConfig.data = {
                    type: "donut",
                    columns: [
                      ["Used", 85],
                      ["Available", 15]
                    ],
                    groups: [
                      ["used", "available"]
                    ],
                    order: null
                  };
                  donutConfig.tooltip = {
                    contents: function (d) {
                      return '<span class="donut-tooltip-pf" style="white-space: nowrap;">' +
                        Math.round(d[0].ratio * 100) + '%' + ' Gbps ' + d[0].name +
                        '</span>';
                    }
                  };

                  var chart5 = c3.generate(donutConfig);
                  var donutChartTitle = d3.select("#chart-pf-donut-15").select('text.c3-chart-arcs-title');
                  donutChartTitle.text("");
                  donutChartTitle.insert('tspan').text("1100").classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
                  donutChartTitle.insert('tspan').text("Gbps Used").classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);

                  var sparklineConfig = $().c3ChartDefaults().getDefaultSparklineConfig();
                  sparklineConfig.bindto = '#chart-pf-sparkline-15';
                  sparklineConfig.data = {
                    columns: [
                      ['%', 60, 55, 70, 44, 31, 67, 54, 46, 58, 75, 62, 68, 69, 88, 74, 88, 85],
                    ],
                    type: 'area'
                  };
                  var chart6 = c3.generate(sparklineConfig);
                })
                </script>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div><!-- /row -->
    <div class="row row-cards-pf">
      <div class="col-xs-12 col-sm-4 col-md-4">
        <div class="card-pf card-pf-utilization">
          <h2 class="card-pf-title">
            Network
          </h2>
          <div class="card-pf-body">
            <p class="card-pf-utilization-details">
              <span class="card-pf-utilization-card-details-count">200</span>
              <span class="card-pf-utilization-card-details-description">
          <span class="card-pf-utilization-card-details-line-1">Available</span>
          <span class="card-pf-utilization-card-details-line-2">of 1300 Gbps</span>
        </span>
            </p>
            <div id="chart-pf-donut-16"></div>
            <div class="chart-pf-sparkline" id="chart-pf-sparkline-16"></div>
            <script>
            window.addEventListener('DOMContentLoaded', function() {
              var c3ChartDefaults = $().c3ChartDefaults();

              var donutConfig = c3ChartDefaults.getDefaultDonutConfig('A');
              donutConfig.bindto = '#chart-pf-donut-16';
              donutConfig.color =  {
                pattern: ["#EC7A08","#D1D1D1"]
              };
              donutConfig.data = {
                type: "donut",
                columns: [
                  ["Used", 85],
                  ["Available", 15]
                ],
                groups: [
                  ["used", "available"]
                ],
                order: null
              };
              donutConfig.tooltip = {
                contents: function (d) {
                  return '<span class="donut-tooltip-pf" style="white-space: nowrap;">' +
                    Math.round(d[0].ratio * 100) + '%' + ' Gbps ' + d[0].name +
                    '</span>';
                }
              };

              var chart1 = c3.generate(donutConfig);
              var donutChartTitle = d3.select("#chart-pf-donut-16").select('text.c3-chart-arcs-title');
              donutChartTitle.text("");
              donutChartTitle.insert('tspan').text("1100").classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
              donutChartTitle.insert('tspan').text("Gbps Used").classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);

              var sparklineConfig = c3ChartDefaults.getDefaultSparklineConfig();
              sparklineConfig.bindto = '#chart-pf-sparkline-16';
              sparklineConfig.data = {
                columns: [
                  ['%', 60, 55, 70, 44, 31, 67, 54, 46, 58, 75, 62, 68, 69, 88, 74, 88, 85],
                ],
                type: 'area'
              };

              var chart2 = c3.generate(sparklineConfig);
            })
            </script>
          </div>
        </div>

      </div>
    </div><!-- /row -->
    <div class="row row-cards-pf">
      <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
      <div class="col-xs-12 col-sm-6 col-md-5">
        <div class="card-pf">
          <div class="card-pf-heading">
            <div class="dropdown card-pf-time-frame-filter">
              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                Last 30 Days <span class="caret"></span>
              </button>
              <ul class="dropdown-menu dropdown-menu-right" role="menu">
                <li class="selected"><a href="#">Last 30 Days</a></li>
                <li><a href="#">Last 60 Days</a></li>
                <li><a href="#">Last 90 Days</a></li>
              </ul>
            </div>
            <h2 class="card-pf-title">
              Card Title
            </h2>
          </div>
          <div class="card-pf-body">
            <p>[card contents]</p>
          </div>
        </div>

      </div>
      <div class="col-xs-12 col-sm-6 col-md-7">
        <div class="card-pf">
          <h2 class="card-pf-title">
            Card Title
          </h2>
          <div class="card-pf-body">
            <p>[card contents]</p>
          </div>
          <div class="card-pf-footer">
            <div class="dropdown card-pf-time-frame-filter">
              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                Last 30 Days <span class="caret"></span>
              </button>
              <ul class="dropdown-menu dropdown-menu-right" role="menu">
                <li class="selected"><a href="#">Last 30 Days</a></li>
                <li><a href="#">Last 60 Days</a></li>
                <li><a href="#">Last 90 Days</a></li>
              </ul>
            </div>
            <p>
              <a href="#" class="card-pf-link-with-icon">
                <span class="pficon pficon-add-circle-o"></span>Add New Cluster
              </a>
            </p>
          </div>
        </div>

      </div>
    </div><!-- /row -->
    <div class="row row-cards-pf">
      <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
      <div class="col-xs-12 col-sm-5 col-md-5">
        <div class="card-pf">
          <h2 class="card-pf-title">
            Card Title
          </h2>
          <div class="card-pf-body">
            <p>[card contents]</p>
          </div>
          <div class="card-pf-footer">
            <div class="dropdown card-pf-time-frame-filter">
              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                Last 30 Days <span class="caret"></span>
              </button>
              <ul class="dropdown-menu dropdown-menu-right" role="menu">
                <li class="selected"><a href="#">Last 30 Days</a></li>
                <li><a href="#">Last 60 Days</a></li>
                <li><a href="#">Last 90 Days</a></li>
              </ul>
            </div>
            <p>
              <a href="#" class="card-pf-link-with-icon">
                <span class="pficon pficon-flag"></span>View CPU Events
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-7 col-md-7">
        <div class="card-pf">
          <h2 class="card-pf-title">
            Card Title
          </h2>
          <div class="card-pf-body">
            <p>[card contents]</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row row-cards-pf">
      <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
      <div class="col-xs-6 col-sm-8 col-md-8">
        <div class="card-pf">
          <div class="card-pf-body">
            <p>[card contents]</p>
          </div>
          <div class="card-pf-footer">
            <p><a href="#">Footer link</a></p>
          </div>
        </div>
      </div>
      <div class="col-xs-6 col-sm-4 col-md-4">
        <div class="card-pf">
          <div class="card-pf-body">
            <p>[card contents]</p>
          </div>
          <div class="card-pf-footer">
            <p><a href="#">Footer link</a></p>
          </div>
        </div>
      </div>
    </div><!-- /row -->
    <div class="row row-cards-pf">
      <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
      <div class="col-xs-6 col-sm-6 col-md-6">
        <div class="card-pf">
          <div class="card-pf-body">
            <p>[card contents]</p>
          </div>
        </div>
      </div>
      <div class="col-xs-6 col-sm-6 col-md-6">
        <div class="card-pf">
          <div class="card-pf-body">
            <p>[card contents]</p>
          </div>
        </div>
      </div>
    </div><!-- /row -->

  </div>
</div>
```

#### third-party js
```html
<script src="../node_modules/jquery-match-height/dist/jquery.matchHeight-min.js"></script>
<script src="../node_modules/d3/d3.min.js"></script>
<script src="../node_modules/c3/c3.min.js"></script>
```

#### js source code

```js
$(document).ready(function() {
  // matchHeight the contents of each .card-pf and then the .card-pf itself
  $(".row-cards-pf > [class*='col'] > .card-pf .card-pf-title").matchHeight();
  $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-body").matchHeight();
  $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-footer").matchHeight();
  $(".row-cards-pf > [class*='col'] > .card-pf").matchHeight();

  // Initialize the vertical navigation
  $().setupVerticalNavigation(true);
});

```