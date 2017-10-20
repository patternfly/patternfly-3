Card View organizes content into a grid of cards. Card View is useful for displaying a small to moderate amount of content in a way that is not visually overwhelming. If the pieces of content to be displayed are best identified by a graphic or other visual representation, Card View enables a user to easily visualize and compare them. It is also useful when you want to present a large number of objects at once within the same summary page.

The Card View should NOT be used if:

- Users need to quickly scan a large amount of text-based content. Consider using a [Table View](http://www.patternfly.org/pattern-library/content-views/table-view/).
- You want to display more content about each object that can fit into a small tile. Consider using a [List View](http://www.patternfly.org/pattern-library/content-views/list-view/).

#### html source code

```html
<div class="cards-pf">
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
      <li class="dropdown">
        <a class="nav-item-iconic" id="dropdownMenu77" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          <span title="Help" class="fa pficon-help"></span>
          <span class="caret"></span>
        </a>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu77">
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
    <ul class="nav navbar-nav navbar-primary">
    </ul>
  </div>
</nav>

<div class="container-fluid">
  <div class="row toolbar-pf">
    <div class="col-sm-12">
      <form class="toolbar-pf-actions">
        <div class="form-group toolbar-pf-filter">
          <label class="sr-only" for="filter11">Name</label>
          <div class="input-group">
            <div class="input-group-btn">
              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Name <span class="caret"></span></button>
              <ul class="dropdown-menu">
                <li class="selected"><a href="#">Name</a></li>
                <li><a href="#">Type</a></li>
                <li><a href="#">Color</a></li>
              </ul>
            </div><!-- /btn-group -->
            <input type="text" class="form-control" id="filter11" placeholder="Filter By Name...">
          </div><!-- /input-group -->
        </div>
        <div class="form-group">
          <div class="dropdown btn-group">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Name <span class="caret"></span></button>
            <ul class="dropdown-menu">
              <li class="selected"><a href="#">Name</a></li>
              <li><a href="#">Type</a></li>
              <li><a href="#">Last Modified</a></li>
            </ul>
          </div>
          <button class="btn btn-link" type="button">
            <span class="fa fa-sort-alpha-asc"></span>
          </button>
        </div>
        <div class="form-group">
          <button class="btn btn-default" type="button">Action</button>
          <button class="btn btn-default" type="button">Action</button>
          <div class="dropdown btn-group  dropdown-kebab-pf">
            <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebab11" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span class="fa fa-ellipsis-v"></span>
            </button>
            <ul class="dropdown-menu " aria-labelledby="dropdownKebab11s">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div>

        </div>
        <div class="toolbar-pf-action-right">
          <div class="form-group toolbar-pf-find">
            <button class="btn btn-link btn-find" type="button">
              <span class="fa fa-search"></span>
            </button>
            <div class="find-pf-dropdown-container">
              <input type="text" class="form-control" id="find1" placeholder="Find By Keyword...">
              <div class="find-pf-buttons">
                <span class="find-pf-nums">1 of 3</span>
                <button class="btn btn-link" type="button">
                  <span class="fa fa-angle-up"></span>
                </button>
                <button class="btn btn-link" type="button">
                  <span class="fa fa-angle-down"></span>
                </button>
                <button class="btn btn-link btn-find-close" type="button">
                  <span class="pficon pficon-close"></span>
                </button>
              </div>
            </div>
          </div>
          <div class="form-group toolbar-pf-view-selector">
            <button class="btn btn-link "><i class="fa fa-th"></i></button>
            <button class="btn btn-link "><i class="fa fa-th-large"></i></button>
            <button class="btn btn-link "><i class="fa fa-th-list"></i></button>
          </div>
        </div>
      </form>
      <div class="row toolbar-pf-results">
        <div class="col-sm-12">
          <h5>40 Results</h5>
          <p>Active filters:</p>
          <ul class="list-inline">
            <li>
              <span class="label label-info">
                Name: nameofthething
                <a href="#"><span class="pficon pficon-close"></span></a>
              </span>
            </li>
            <li>
              <span class="label label-info">
                Name: nameofthething
                <a href="#"><span class="pficon pficon-close"></span></a>
              </span>
            </li>
            <li>
              <span class="label label-info">
                Name: nameofthething
                <a href="#"><span class="pficon pficon-close"></span></a>
              </span>
            </li>
          </ul>
          <p><a href="#">Clear All Filters</a></p>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /col -->
  </div><!-- /row -->
</div><!-- /container -->

<div class="container-fluid container-cards-pf">
  <div class="row row-cards-pf">
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <div class="card-pf card-pf-view card-pf-view-select card-pf-view-single-select">
        <div class="card-pf-body">
          <div class="card-pf-top-element">
            <span class="fa fa-birthday-cake card-pf-icon-circle"></span>
          </div>
          <h2 class="card-pf-title text-center">
            Cake Service
          </h2>
          <div class="card-pf-items text-center">
            <div class="card-pf-item">
              <span class="pficon pficon-screen"></span>
              <span class="card-pf-item-text">8</span>
            </div>
            <div class="card-pf-item">
              <span class="fa fa-check"></span>
            </div>
          </div>
          <p class="card-pf-info text-center"><strong>Created On</strong> 2015-03-01 02:00 AM <br/> Never Expires</p>
        </div>
        <div class="card-pf-view-checkbox">
          <input type="checkbox">
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <div class="card-pf card-pf-view card-pf-view-select card-pf-view-single-select">
        <div class="card-pf-body">
          <div class="card-pf-top-element">
            <span class="fa fa-birthday-cake card-pf-icon-circle"></span>
          </div>
          <h2 class="card-pf-title text-center">
            Cake Service
          </h2>
          <div class="card-pf-items text-center">
            <div class="card-pf-item">
              <span class="pficon pficon-screen"></span>
              <span class="card-pf-item-text">8</span>
            </div>
            <div class="card-pf-item">
              <span class="fa fa-check"></span>
            </div>
          </div>
          <p class="card-pf-info text-center"><strong>Created On</strong> 2015-03-01 02:00 AM <br/> Never Expires</p>
        </div>
        <div class="card-pf-view-checkbox">
          <input type="checkbox">
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <div class="card-pf card-pf-view card-pf-view-select card-pf-view-single-select">
        <div class="card-pf-body">
          <div class="card-pf-top-element">
            <span class="fa fa-birthday-cake card-pf-icon-circle"></span>
          </div>
          <h2 class="card-pf-title text-center">
            Cake Service
          </h2>
          <div class="card-pf-items text-center">
            <div class="card-pf-item">
              <span class="pficon pficon-screen"></span>
              <span class="card-pf-item-text">8</span>
            </div>
            <div class="card-pf-item">
              <span class="fa fa-check"></span>
            </div>
          </div>
          <p class="card-pf-info text-center"><strong>Created On</strong> 2015-03-01 02:00 AM <br/> Never Expires</p>
        </div>
        <div class="card-pf-view-checkbox">
          <input type="checkbox">
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <div class="card-pf card-pf-view card-pf-view-select card-pf-view-single-select">
        <div class="card-pf-body">
          <div class="card-pf-top-element">
            <span class="fa fa-birthday-cake card-pf-icon-circle"></span>
          </div>
          <h2 class="card-pf-title text-center">
            Cake Service
          </h2>
          <div class="card-pf-items text-center">
            <div class="card-pf-item">
              <span class="pficon pficon-screen"></span>
              <span class="card-pf-item-text">8</span>
            </div>
            <div class="card-pf-item">
              <span class="fa fa-check"></span>
            </div>
          </div>
          <p class="card-pf-info text-center"><strong>Created On</strong> 2015-03-01 02:00 AM <br/> Never Expires</p>
        </div>
        <div class="card-pf-view-checkbox">
          <input type="checkbox">
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <div class="card-pf card-pf-view card-pf-view-select card-pf-view-single-select">
        <div class="card-pf-body">
          <div class="card-pf-top-element">
            <span class="fa fa-birthday-cake card-pf-icon-circle"></span>
          </div>
          <h2 class="card-pf-title text-center">
            Cake Service
          </h2>
          <div class="card-pf-items text-center">
            <div class="card-pf-item">
              <span class="pficon pficon-screen"></span>
              <span class="card-pf-item-text">8</span>
            </div>
            <div class="card-pf-item">
              <span class="fa fa-check"></span>
            </div>
          </div>
          <p class="card-pf-info text-center"><strong>Created On</strong> 2015-03-01 02:00 AM <br/> Never Expires</p>
        </div>
        <div class="card-pf-view-checkbox">
          <input type="checkbox">
        </div>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <div class="card-pf card-pf-view card-pf-view-select card-pf-view-single-select">
        <div class="card-pf-body">
          <div class="card-pf-top-element">
            <span class="fa fa-birthday-cake card-pf-icon-circle"></span>
          </div>
          <h2 class="card-pf-title text-center">
            Cake Service
          </h2>
          <div class="card-pf-items text-center">
            <div class="card-pf-item">
              <span class="pficon pficon-screen"></span>
              <span class="card-pf-item-text">8</span>
            </div>
            <div class="card-pf-item">
              <span class="fa fa-check"></span>
            </div>
          </div>
          <p class="card-pf-info text-center"><strong>Created On</strong> 2015-03-01 02:00 AM <br/> Never Expires</p>
        </div>
        <div class="card-pf-view-checkbox">
          <input type="checkbox">
        </div>
      </div>
    </div>
  </div>
</div>
</div>
```

#### third-party js
```html
<script src="../node_modules/jquery-match-height/dist/jquery.matchHeight-min.js"></script>
```

#### js source code

```js
$(function() {
  // matchHeight the contents of each .card-pf and then the .card-pf itself
  $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-body").matchHeight();

  // Card Single Select
  $('.card-pf-view-single-select').click(function() {
    if ($(this).hasClass('active'))
    { $(this).removeClass('active'); }
    else
    { $('.card-pf-view-single-select').removeClass('active'); $(this).addClass('active'); }
  });
});
```