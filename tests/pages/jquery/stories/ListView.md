A List View displays data in rows. Each row displays the same set of attributes, although not necessarily displayed in columns, and the attributes may wrap. The List View omits column headers and other visual noise, making it a cleaner visualization than a data table.

#### html source code

```html
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
        <a class="nav-item-iconic" id="dropdownMenu22" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          <span title="Help" class="fa pficon-help"></span>
          <span class="caret"></span>
        </a>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu22">
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
          <label class="sr-only" for="filter">Name</label>
          <div class="input-group">
            <div class="input-group-btn">
              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Name <span class="caret"></span></button>
              <ul class="dropdown-menu">
                <li class="selected"><a href="#">Name</a></li>
                <li><a href="#">Type</a></li>
                <li><a href="#">Color</a></li>
              </ul>
            </div><!-- /btn-group -->
            <input type="text" class="form-control" id="filter" placeholder="Filter By Name...">
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
            <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebab" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span class="fa fa-ellipsis-v"></span>
            </button>
            <ul class="dropdown-menu " aria-labelledby="dropdownKebab">
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
              <input type="text" class="form-control" id="find" placeholder="Find By Keyword...">
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

<div class="container-fluid">
  <div class="list-group list-view-pf list-view-pf-view">
    <div class="list-group-item">
      <div class="list-view-pf-checkbox">
        <input type="checkbox">
      </div>
      <div class="list-view-pf-actions">
        <button class="btn btn-default">Action</button>
        <div class="dropdown pull-right dropdown-kebab-pf">
          <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight9" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <span class="fa fa-ellipsis-v"></span>
          </button>
          <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight9">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>

      </div>
      <div class="list-view-pf-main-info">
        <div class="list-view-pf-left">
          <span class="fa fa-plane list-view-pf-icon-sm"></span>
        </div>
        <div class="list-view-pf-body">
          <div class="list-view-pf-description">
            <div class="list-group-item-heading">
              Event One
            </div>
            <div class="list-group-item-text">
              The following snippet of text is <a href="#">rendered as link text</a>.
            </div>
          </div>
          <div class="list-view-pf-additional-info">
            <div class="list-view-pf-additional-info-item">
              <span class="pficon pficon-screen"></span>
              <strong>8</strong> Hosts
            </div>
            <div class="list-view-pf-additional-info-item">
              <span class="pficon pficon-cluster"></span>
              <strong>6</strong> Clusters
            </div>
            <div class="list-view-pf-additional-info-item">
              <span class="pficon pficon-container-node"></span>
              <strong>10</strong> Nodes
            </div>
            <div class="list-view-pf-additional-info-item">
              <span class="pficon pficon-image"></span>
              <strong>8</strong> Images
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list-group-item">
      <div class="list-view-pf-checkbox">
        <input type="checkbox">
      </div>
      <div class="list-view-pf-actions">
        <button class="btn btn-default">Action</button>
        <div class="dropdown pull-right dropdown-kebab-pf">
          <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <span class="fa fa-ellipsis-v"></span>
          </button>
          <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight10">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>

      </div>
      <div class="list-view-pf-main-info">
        <div class="list-view-pf-left">
          <span class="fa fa-magic list-view-pf-icon-sm"></span>
        </div>
        <div class="list-view-pf-body">
          <div class="list-view-pf-description">
            <div class="list-group-item-heading">
              Event Two
            </div>
            <div class="list-group-item-text">
              The following snippet of text is <a href="#">rendered as link text</a>.
            </div>
          </div>
          <div class="list-view-pf-additional-info">
            <div class="list-view-pf-additional-info-item">
              <span class="pficon pficon-screen"></span>
              <strong>4</strong> Hosts
            </div>
            <div class="list-view-pf-additional-info-item">
              <span class="pficon pficon-cluster"></span>
              <strong>2</strong> Clusters
            </div>
            <div class="list-view-pf-additional-info-item">
              <span class="pficon pficon-container-node"></span>
              <strong>11</strong> Nodes
            </div>
            <div class="list-view-pf-additional-info-item">
              <span class="pficon pficon-image"></span>
              <strong>6</strong> Images
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list-group-item">
      <div class="list-view-pf-checkbox">
        <input type="checkbox">
      </div>
      <div class="list-view-pf-actions">
        <button class="btn btn-default">Action</button>
        <div class="dropdown pull-right dropdown-kebab-pf">
          <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight11" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <span class="fa fa-ellipsis-v"></span>
          </button>
          <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight11">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>

      </div>
      <div class="list-view-pf-main-info">
        <div class="list-view-pf-left">
          <span class="fa fa-gamepad list-view-pf-icon-sm"></span>
        </div>
        <div class="list-view-pf-body">
          <div class="list-view-pf-description">
            <div class="list-group-item-heading">
              Event Three
            </div>
            <div class="list-group-item-text">
              The following snippet of text is <a href="#">rendered as link text</a>.
            </div>
          </div>
          <div class="list-view-pf-additional-info">
            <div class="list-view-pf-additional-info-item">
              <span class="pficon pficon-screen"></span>
              <strong>4</strong> Hosts
            </div>
            <div class="list-view-pf-additional-info-item">
              <span class="pficon pficon-cluster"></span>
              <strong>2</strong> Clusters
            </div>
            <div class="list-view-pf-additional-info-item">
              <span class="pficon pficon-container-node"></span>
              <strong>10</strong> Nodes
            </div>
            <div class="list-view-pf-additional-info-item">
              <span class="pficon pficon-image"></span>
              <strong>6</strong> Images
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list-group-item">
      <div class="list-view-pf-checkbox">
        <input type="checkbox">
      </div>
      <div class="list-view-pf-actions">
        <button class="btn btn-default">Action</button>
        <div class="dropdown pull-right dropdown-kebab-pf">
          <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight12" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <span class="fa fa-ellipsis-v"></span>
          </button>
          <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight12">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>

      </div>
      <div class="list-view-pf-main-info">
        <div class="list-view-pf-left">
          <span class="fa fa-linux list-view-pf-icon-sm"></span>
        </div>
        <div class="list-view-pf-body">
          <div class="list-view-pf-description">
            <div class="list-group-item-heading">
              Event Four
            </div>
            <div class="list-group-item-text">
              The following snippet of text is <a href="#">rendered as link text</a>.
            </div>
          </div>
          <div class="list-view-pf-additional-info">
            <div class="list-view-pf-additional-info-item">
              <span class="pficon pficon-screen"></span>
              <strong>4</strong> Hosts
            </div>
            <div class="list-view-pf-additional-info-item">
              <span class="pficon pficon-cluster"></span>
              <strong>2</strong> Clusters
            </div>
            <div class="list-view-pf-additional-info-item">
              <span class="pficon pficon-container-node"></span>
              <strong>10</strong> Nodes
            </div>
            <div class="list-view-pf-additional-info-item">
              <span class="pficon pficon-image"></span>
              <strong>6</strong> Images
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list-group-item">
      <div class="list-view-pf-checkbox">
        <input type="checkbox">
      </div>
      <div class="list-view-pf-actions">
        <button class="btn btn-default">Action</button>
        <div class="dropdown pull-right dropdown-kebab-pf">
          <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight13" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <span class="fa fa-ellipsis-v"></span>
          </button>
          <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight13">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>

      </div>
      <div class="list-view-pf-main-info">
        <div class="list-view-pf-left">
          <span class="fa fa-briefcase list-view-pf-icon-sm"></span>
        </div>
        <div class="list-view-pf-body">
          <div class="list-view-pf-description">
            <div class="list-group-item-heading">
              Event Five
            </div>
            <div class="list-group-item-text">
              The following snippet of text is <a href="#">rendered as link text</a>.
            </div>
          </div>
          <div class="list-view-pf-additional-info">
            <div class="list-view-pf-additional-info-item">
              <span class="pficon pficon-screen"></span>
              <strong>4</strong> Hosts
            </div>
            <div class="list-view-pf-additional-info-item">
              <span class="pficon pficon-cluster"></span>
              <strong>2</strong> Clusters
            </div>
            <div class="list-view-pf-additional-info-item">
              <span class="pficon pficon-container-node"></span>
              <strong>10</strong> Nodes
            </div>
            <div class="list-view-pf-additional-info-item">
              <span class="pficon pficon-image"></span>
              <strong>6</strong> Images
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="list-group-item">
      <div class="list-view-pf-checkbox">
        <input type="checkbox">
      </div>
      <div class="list-view-pf-actions">
        <button class="btn btn-default">Action</button>
        <div class="dropdown pull-right dropdown-kebab-pf">
          <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight14" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <span class="fa fa-ellipsis-v"></span>
          </button>
          <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight14">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>

      </div>
      <div class="list-view-pf-main-info">
        <div class="list-view-pf-left">
          <span class="fa fa-coffee list-view-pf-icon-sm"></span>
        </div>
        <div class="list-view-pf-body">
          <div class="list-view-pf-description">
            <div class="list-group-item-heading">
              Event Six
            </div>
            <div class="list-group-item-text">
              The following snippet of text is <a href="#">rendered as link text</a>.
            </div>
          </div>
          <div class="list-view-pf-additional-info">
            <div class="list-view-pf-additional-info-item">
              <span class="pficon pficon-screen"></span>
              <strong>4</strong> Hosts
            </div>
            <div class="list-view-pf-additional-info-item">
              <span class="pficon pficon-cluster"></span>
              <strong>2</strong> Clusters
            </div>
            <div class="list-view-pf-additional-info-item">
              <span class="pficon pficon-container-node"></span>
              <strong>10</strong> Nodes
            </div>
            <div class="list-view-pf-additional-info-item">
              <span class="pficon pficon-image"></span>
              <strong>6</strong> Images
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

#### js source code

```js
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
```