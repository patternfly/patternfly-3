The Notification Drawer is a content delivery system such as events, tasks, and alerts. It is a self contained system that is viewable without having to navigate to another area of the application. Upon login it offers initial notifications for what has changed in the form of dismissible Toast Notifications and a permanent interactive icon in the header bar. It is hidden or revealed at the user’s request.

#### html source code

```html
<div class="layout-pf layout-pf-fixed">
  <nav class="navbar navbar-default navbar-pf" role="navigation">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/">
        <img src="src/img/brand.svg" alt="PatternFly Enterprise Application" />
      </a>
    </div>
    <div class="collapse navbar-collapse navbar-collapse-1">
      <ul class="nav navbar-nav navbar-utility">
        <li class="drawer-pf-trigger dropdown">
          <a class="nav-item-iconic drawer-pf-trigger-icon">
            <span class="fa fa-bell" title="Notifications"></span>
            <span class="badge"> </span>
          </a>
        </li>
        <li class="dropdown">
          <a class="nav-item-iconic" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <span title="Help" class="fa pficon-help"></span>
            <span class="caret"></span>
          </a>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu3">
            <li><a href="#">Help</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <span class="pficon pficon-user"></span>
            Brian Johnson <b class="caret"></b>
          </a>
          <ul class="dropdown-menu">
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Another link</a>
            </li>
            <li>
              <a href="#">Something else here</a>
            </li>
            <li class="divider"></li>
            <li class="dropdown-submenu">
              <a tabindex="-1" href="#">More options</a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Another link</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li class="divider"></li>
                <li class="dropdown-header">Nav header</li>
                <li>
                  <a href="#">Separated link</a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#">One more separated link</a>
                </li>
              </ul>
            </li>
            <li class="divider"></li>
            <li>
              <a href="#">One more separated link</a>
            </li>
          </ul>
        </li>
      </ul>
    <div class="drawer-pf hide drawer-pf-notifications-non-clickable">
      <div class="drawer-pf-title">
        <a class="drawer-pf-toggle-expand fa fa-angle-double-left"></a>
        <a  class="drawer-pf-close pficon pficon-close"></a>
        <h3 class="text-center">Notifications Drawer</h3>
      </div>
      <div class="panel-group" id="notification-drawer-accordion2">
        <div class="panel panel-default">
          <div class="panel-heading" data-component="collapse-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#notification-drawer-accordion2" href="#fixedCollapseOne">
                Notification Tab 1
              </a>
            </h4>
            <span class="panel-counter">5 New Events</span>
          </div>
          <div id="fixedCollapseOne" class="panel-collapse collapse in">
            <div class="panel-body">
              <div class="drawer-pf-notification unread">

                <div class="dropdown pull-right dropdown-kebab-pf">
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight29" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight29">
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
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight30" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight30">
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
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight31" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight31">
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
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight32" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight32">
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
              <a class="collapsed" data-toggle="collapse" data-parent="#notification-drawer-accordion2" href="#fixedCollapseTwo">
                Notification Tab 2
              </a>
            </h4>
            <span class="panel-counter">5 New Events</span>
          </div>
          <div id="fixedCollapseTwo" class="panel-collapse collapse">
            <div class="panel-body">
              <div class="drawer-pf-notification unread">

                <div class="dropdown pull-right dropdown-kebab-pf">
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight33" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight33">
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
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight34" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight34">
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
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight35" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight35">
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
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight36" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight36">
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
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight37" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight37">
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
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight38" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight38">
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
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight39" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight39">
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
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight40" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight40">
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
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight41" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight41">
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
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight42" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight42">
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
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight43" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight43">
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
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight44" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight44">
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
              <a class="collapsed" data-toggle="collapse" data-parent="#notification-drawer-accordion2" href="#fixedCollapseThree">
                Notification Tab 3
              </a>
            </h4>
            <span class="panel-counter">5 New Events</span>
          </div>
          <div id="fixedCollapseThree" class="panel-collapse collapse">
            <div class="panel-body">
              <div class="drawer-pf-notification unread">

                <div class="dropdown pull-right dropdown-kebab-pf">
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight45" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight45">
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
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight46" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight46">
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
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight47" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight47">
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
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight48" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight48">
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
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight49" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight49">
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
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight50" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight50">
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
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight51" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight51">
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
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight52" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight52">
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
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight53" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight53">
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
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight54" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight54">
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
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight55" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight55">
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
                  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight56" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span class="fa fa-ellipsis-v"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight56">
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
      <ul class="nav navbar-nav navbar-primary">
        <li>
          <a href="#">First Link</a>
        </li>
        <li class="active">
          <a href="#">Another Link</a>
        </li>
        <li>
          <a href="#">And Another</a>
        </li>
        <li>
          <a href="#">As a General Rule</a>
        </li>
        <li>
          <a href="#">Five to Seven Links</a>
        </li>
        <li>
          <a href="#">Is Good</a>
        </li>
      </ul>
    </div>
  </nav>


  <div class="container-fluid container-cards-pf">
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
                <div id="chart-pf-donut-5"></div>
                <div class="chart-pf-sparkline" id="chart-pf-sparkline-5"></div>
                <script>
                window.addEventListener('DOMContentLoaded', function() {
                  var donutConfig = $().c3ChartDefaults().getDefaultDonutConfig('A');
                  donutConfig.bindto = '#chart-pf-donut-5';
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
                  var donutChartTitle = d3.select("#chart-pf-donut-5").select('text.c3-chart-arcs-title');
                  donutChartTitle.text("");
                  donutChartTitle.insert('tspan').text("950").classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
                  donutChartTitle.insert('tspan').text("MHz Used").classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);

                  var sparklineConfig = $().c3ChartDefaults().getDefaultSparklineConfig();
                  sparklineConfig.bindto = '#chart-pf-sparkline-5';
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
                <div id="chart-pf-donut-6"></div>
                <div class="chart-pf-sparkline" id="chart-pf-sparkline-6"></div>
                <script>
                window.addEventListener('DOMContentLoaded', function() {
                  var donutConfig = $().c3ChartDefaults().getDefaultDonutConfig('A');
                  donutConfig.bindto = '#chart-pf-donut-6';
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
                  var donutChartTitle = d3.select("#chart-pf-donut-6").select('text.c3-chart-arcs-title');
                  donutChartTitle.text("");
                  donutChartTitle.insert('tspan').text("176").classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
                  donutChartTitle.insert('tspan').text("GB Used").classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);

                  var sparklineConfig = $().c3ChartDefaults().getDefaultSparklineConfig();
                  sparklineConfig.bindto = '#chart-pf-sparkline-6';
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
                <div id="chart-pf-donut-7"></div>
                <div class="chart-pf-sparkline" id="chart-pf-sparkline-7"></div>
                <script>
                window.addEventListener('DOMContentLoaded', function() {
                  var donutConfig = $().c3ChartDefaults().getDefaultDonutConfig('A');
                  donutConfig.bindto = '#chart-pf-donut-7';
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
                  var donutChartTitle = d3.select("#chart-pf-donut-7").select('text.c3-chart-arcs-title');
                  donutChartTitle.text("");
                  donutChartTitle.insert('tspan').text("1100").classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
                  donutChartTitle.insert('tspan').text("Gbps Used").classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);

                  var sparklineConfig = $().c3ChartDefaults().getDefaultSparklineConfig();
                  sparklineConfig.bindto = '#chart-pf-sparkline-7';
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
            <div id="chart-pf-donut-8"></div>
            <div class="chart-pf-sparkline" id="chart-pf-sparkline-8"></div>
            <script>
            window.addEventListener('DOMContentLoaded', function() {
              var c3ChartDefaults = $().c3ChartDefaults();

              var donutConfig = c3ChartDefaults.getDefaultDonutConfig('A');
              donutConfig.bindto = '#chart-pf-donut-8';
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
              var donutChartTitle = d3.select("#chart-pf-donut-8").select('text.c3-chart-arcs-title');
              donutChartTitle.text("");
              donutChartTitle.insert('tspan').text("1100").classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
              donutChartTitle.insert('tspan').text("Gbps Used").classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);

              var sparklineConfig = c3ChartDefaults.getDefaultSparklineConfig();
              sparklineConfig.bindto = '#chart-pf-sparkline-8';
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

  // matchHeight the contents of each .card-pf and then the .card-pf itself
  $(".row-cards-pf > [class*='col'] > .card-pf .card-pf-title").matchHeight();
  $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-body").matchHeight();
  $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-footer").matchHeight();
  $(".row-cards-pf > [class*='col'] > .card-pf").matchHeight();

  // Initialize Tooltips
  $('[data-toggle="tooltip"]').tooltip();
});
```