The Launcher allows users to see all available interfaces from one area of an application. This pattern makes it easier for users to quickly navigate to different interfaces without logging out. The pattern consists of two parts, the Launcher Menu and the Launcher Home (optional). Both parts display all available interfaces, with the Home screen also acting as a landing page for additional resources and documentation.

The Launcher Menu can be used without the Launcher Home, but the Launcher Home is recommended for any application that has between one and four interfaces available and has a need to provide additional context around functionality of those interface options.

The Launcher pattern is NOT meant to be an alternative to displaying [Vertical Navigation](http://www.patternfly.org/pattern-library/navigation/vertical-navigation/) or [Horizontal Navigation](http://www.patternfly.org/pattern-library/navigation/horizontal-navigation/).

The Launcher Menu should be accessible from the [Masthead](http://www.patternfly.org/pattern-library/application-framework/masthead/) using the Launcher icon detailed in the Design tab.

#### html source code

```html
<h2>Grid Menu</h2>

<h3>Icons</h3>

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

      <li class="applauncher-pf applauncher-pf-block-list dropdown dropdown-kebab-pf">
        <a class="dropdown-toggle drawer-pf-trigger-icon" data-toggle="dropdown" href="#">
          <i class="fa fa-th applauncher-pf-icon" aria-hidden="true"></i>
          <span class="applauncher-pf-title">
                                Application Launcher
                                <span class="caret" aria-hidden="true"></span>
                              </span>
        </a>
        <ul class="dropdown-menu dropdown-menu-right" role="menu">
          <li class="applauncher-pf-item" role="menuitem">
            <a class="applauncher-pf-link" href="#">
              <i class="applauncher-pf-link-icon pficon pficon-storage-domain" aria-hidden="true"></i>
              <span class="applauncher-pf-link-title">Recteque</span>
            </a>
          </li>
          <li class="applauncher-pf-item" role="menuitem">
            <a class="applauncher-pf-link" href="#">
              <i class="applauncher-pf-link-icon pficon pficon-build" aria-hidden="true"></i>
              <span class="applauncher-pf-link-title">Suavitate</span>
            </a>
          </li>
          <li class="applauncher-pf-item" role="menuitem">
            <a class="applauncher-pf-link" href="#">
              <i class="applauncher-pf-link-icon pficon pficon-domain" aria-hidden="true"></i>
              <span class="applauncher-pf-link-title">Lorem</span>
            </a>
          </li>
          <li class="applauncher-pf-item" role="menuitem">
            <a class="applauncher-pf-link" href="#">
              <i class="applauncher-pf-link-icon pficon pficon-home" aria-hidden="true"></i>
              <span class="applauncher-pf-link-title">Home</span>
            </a>
          </li>
        </ul>
      </li>

      <li>
        <a href="#">Status</a>
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
  </div>
</nav>

<h3>No Icons</h3>

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

      <li class="applauncher-pf applauncher-pf-block-list dropdown dropdown-kebab-pf">
        <a class="dropdown-toggle drawer-pf-trigger-icon" data-toggle="dropdown" href="#">
          <i class="fa fa-th applauncher-pf-icon" aria-hidden="true"></i>
          <span class="applauncher-pf-title">
                                Application Launcher
                                <span class="caret" aria-hidden="true"></span>
                              </span>
        </a>
        <ul class="dropdown-menu dropdown-menu-right" role="menu">
          <li class="applauncher-pf-item" role="menuitem">
            <a class="applauncher-pf-link" href="#">
              <span class="applauncher-pf-link-title">Recteque</span>
            </a>
          </li>
          <li class="applauncher-pf-item" role="menuitem">
            <a class="applauncher-pf-link" href="#">
              <span class="applauncher-pf-link-title">Suavitate</span>
            </a>
          </li>
          <li class="applauncher-pf-item" role="menuitem">
            <a class="applauncher-pf-link" href="#">
              <span class="applauncher-pf-link-title">Lorem</span>
            </a>
          </li>
          <li class="applauncher-pf-item" role="menuitem">
            <a class="applauncher-pf-link" href="#">
              <span class="applauncher-pf-link-title">Home</span>
            </a>
          </li>
        </ul>
      </li>

      <li>
        <a href="#">Status</a>
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
  </div>
</nav>

<h2>List Menu</h2>
<h3>Icons</h3>

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

      <li class="applauncher-pf dropdown dropdown-kebab-pf">
        <a class="dropdown-toggle drawer-pf-trigger-icon" data-toggle="dropdown" href="#">
          <i class="fa fa-th applauncher-pf-icon" aria-hidden="true"></i>
          <span class="applauncher-pf-title">
                                Application Launcher
                                <span class="caret" aria-hidden="true"></span>
                              </span>
        </a>
        <ul class="dropdown-menu dropdown-menu-right" role="menu">
          <li class="applauncher-pf-item" role="menuitem">
            <a class="applauncher-pf-link" href="#">
              <i class="applauncher-pf-link-icon pficon pficon-storage-domain" aria-hidden="true"></i>
              <span class="applauncher-pf-link-title">Recteque</span>
            </a>
          </li>
          <li class="applauncher-pf-item" role="menuitem">
            <a class="applauncher-pf-link" href="#">
              <!-- Placeholder left to maintain spacing -->
              <i class="applauncher-pf-link-icon" aria-hidden="true"></i>
              <span class="applauncher-pf-link-title">Suavitate</span>
            </a>
          </li>
          <li class="applauncher-pf-item" role="menuitem">
            <a class="applauncher-pf-link" href="#">
              <i class="applauncher-pf-link-icon pficon pficon-domain" aria-hidden="true"></i>
              <span class="applauncher-pf-link-title">Lorem</span>
            </a>
          </li>
          <li class="applauncher-pf-item" role="menuitem">
            <a class="applauncher-pf-link" href="#">
              <i class="applauncher-pf-link-icon pficon pficon-home" aria-hidden="true"></i>
              <span class="applauncher-pf-link-title">Home</span>
            </a>
          </li>
        </ul>
      </li>

      <li>
        <a href="#">Status</a>
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
  </div>
</nav>

<h3>No Icons</h3>

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

      <li class="applauncher-pf dropdown dropdown-kebab-pf">
        <a class="dropdown-toggle drawer-pf-trigger-icon" data-toggle="dropdown" href="#">
          <i class="fa fa-th applauncher-pf-icon" aria-hidden="true"></i>
          <span class="applauncher-pf-title">
                                Application Launcher
                                <span class="caret" aria-hidden="true"></span>
                              </span>
        </a>
        <ul class="dropdown-menu dropdown-menu-right" role="menu">
          <li class="applauncher-pf-item" role="menuitem">
            <a class="applauncher-pf-link" href="#">
              <span class="applauncher-pf-link-title">Recteque</span>
            </a>
          </li>
          <li class="applauncher-pf-item" role="menuitem">
            <a class="applauncher-pf-link" href="#">
              <span class="applauncher-pf-link-title">Suavitate</span>
            </a>
          </li>
          <li class="applauncher-pf-item" role="menuitem">
            <a class="applauncher-pf-link" href="#">
              <span class="applauncher-pf-link-title">Lorem</span>
            </a>
          </li>
          <li class="applauncher-pf-item" role="menuitem">
            <a class="applauncher-pf-link" href="#">
              <span class="applauncher-pf-link-title">Home</span>
            </a>
          </li>
        </ul>
      </li>

      <li>
        <a href="#">Status</a>
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
  </div>
</nav>
```

#### js source code

```js
// Initialize App Launcher
$(document).ready(function() {
  $('.applauncher-pf .dropdown-toggle').eq(0).click();
});
```