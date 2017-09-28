import React from 'react';
import Brand from './img/brand.svg';

export default class ListView extends React.Component {
  componentDidMount() {
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
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-pf" role="navigation">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">
              <img src={Brand} alt="PatternFly Enterprise Application" />
            </a>
          </div>
          <div className="collapse navbar-collapse navbar-collapse-1">
            <ul className="nav navbar-nav navbar-utility">
              <li className="dropdown">
                <a className="nav-item-iconic" id="dropdownMenu22" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  <span title="Help" className="fa pficon-help"></span>
                  <span className="caret"></span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu22">
                  <li><a href="#">Help</a></li>
                  <li><a href="#">About</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <span className="pficon pficon-user"></span>
                  Brian Johnson <b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li>
                    <a href="#">Another link</a>
                  </li>
                  <li>
                    <a href="#">Something else here</a>
                  </li>
                  <li className="divider"></li>
                  <li className="dropdown-submenu">
                    <a tabindex="-1" href="#">More options</a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">Link</a>
                      </li>
                      <li>
                        <a href="#">Another link</a>
                      </li>
                      <li>
                        <a href="#">Something else here</a>
                      </li>
                      <li className="divider"></li>
                      <li className="dropdown-header">Nav header</li>
                      <li>
                        <a href="#">Separated link</a>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <a href="#">One more separated link</a>
                      </li>
                    </ul>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a href="#">One more separated link</a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-primary">
            </ul>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row toolbar-pf">
            <div className="col-sm-12">
              <form className="toolbar-pf-actions">
                <div className="form-group toolbar-pf-filter">
                  <label className="sr-only" for="filter">Name</label>
                  <div className="input-group">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Name <span className="caret"></span></button>
                      <ul className="dropdown-menu">
                        <li className="selected"><a href="#">Name</a></li>
                        <li><a href="#">Type</a></li>
                        <li><a href="#">Color</a></li>
                      </ul>
                    </div>
                    <input type="text" className="form-control" id="filter" placeholder="Filter By Name..."/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="dropdown btn-group">
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Name <span className="caret"></span></button>
                    <ul className="dropdown-menu">
                      <li className="selected"><a href="#">Name</a></li>
                      <li><a href="#">Type</a></li>
                      <li><a href="#">Last Modified</a></li>
                    </ul>
                  </div>
                  <button className="btn btn-link" type="button">
                    <span className="fa fa-sort-alpha-asc"></span>
                  </button>
                </div>
                <div className="form-group">
                  <button className="btn btn-default" type="button">Action</button>
                  <button className="btn btn-default" type="button">Action</button>
                  <div className="dropdown btn-group  dropdown-kebab-pf">
                    <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebab" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span className="fa fa-ellipsis-v"></span>
                    </button>
                    <ul className="dropdown-menu " aria-labelledby="dropdownKebab">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>
                </div>
                <div className="toolbar-pf-action-right">
                  <div className="form-group toolbar-pf-find">
                    <button className="btn btn-link btn-find" type="button">
                      <span className="fa fa-search"></span>
                    </button>
                    <div className="find-pf-dropdown-container">
                      <input type="text" className="form-control" id="find" placeholder="Find By Keyword..."/>
                      <div className="find-pf-buttons">
                        <span className="find-pf-nums">1 of 3</span>
                        <button className="btn btn-link" type="button">
                          <span className="fa fa-angle-up"></span>
                        </button>
                        <button className="btn btn-link" type="button">
                          <span className="fa fa-angle-down"></span>
                        </button>
                        <button className="btn btn-link btn-find-close" type="button">
                          <span className="pficon pficon-close"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="form-group toolbar-pf-view-selector">
                    <button className="btn btn-link "><i className="fa fa-th"></i></button>
                    <button className="btn btn-link "><i className="fa fa-th-large"></i></button>
                    <button className="btn btn-link "><i className="fa fa-th-list"></i></button>
                  </div>
                </div>
              </form>
              <div className="row toolbar-pf-results">
                <div className="col-sm-12">
                  <h5>40 Results</h5>
                  <p>Active filters:</p>
                  <ul className="list-inline">
                    <li>
                      <span className="label label-info">
                        Name: nameofthething
                        <a href="#"><span className="pficon pficon-close"></span></a>
                      </span>
                    </li>
                    <li>
                      <span className="label label-info">
                        Name: nameofthething
                        <a href="#"><span className="pficon pficon-close"></span></a>
                      </span>
                    </li>
                    <li>
                      <span className="label label-info">
                        Name: nameofthething
                        <a href="#"><span className="pficon pficon-close"></span></a>
                      </span>
                    </li>
                  </ul>
                  <p><a href="#">Clear All Filters</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="list-group list-view-pf list-view-pf-view">
            <div className="list-group-item">
              <div className="list-view-pf-checkbox">
                <input type="checkbox"/>
              </div>
              <div className="list-view-pf-actions">
                <button className="btn btn-default">Action</button>
                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight9" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight9">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>
              </div>
              <div className="list-view-pf-main-info">
                <div className="list-view-pf-left">
                  <span className="fa fa-plane list-view-pf-icon-sm"></span>
                </div>
                <div className="list-view-pf-body">
                  <div className="list-view-pf-description">
                    <div className="list-group-item-heading">
                      Event One
                    </div>
                    <div className="list-group-item-text">
                      The following snippet of text is <a href="#">rendered as link text</a>.
                    </div>
                  </div>
                  <div className="list-view-pf-additional-info">
                    <div className="list-view-pf-additional-info-item">
                      <span className="pficon pficon-screen"></span>
                      <strong>8</strong> Hosts
                    </div>
                    <div className="list-view-pf-additional-info-item">
                      <span className="pficon pficon-cluster"></span>
                      <strong>6</strong> Clusters
                    </div>
                    <div className="list-view-pf-additional-info-item">
                      <span className="pficon pficon-container-node"></span>
                      <strong>10</strong> Nodes
                    </div>
                    <div className="list-view-pf-additional-info-item">
                      <span className="pficon pficon-image"></span>
                      <strong>8</strong> Images
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="list-view-pf-checkbox">
                <input type="checkbox"/>
              </div>
              <div className="list-view-pf-actions">
                <button className="btn btn-default">Action</button>
                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight10">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>
              </div>
              <div className="list-view-pf-main-info">
                <div className="list-view-pf-left">
                  <span className="fa fa-magic list-view-pf-icon-sm"></span>
                </div>
                <div className="list-view-pf-body">
                  <div className="list-view-pf-description">
                    <div className="list-group-item-heading">
                      Event Two
                    </div>
                    <div className="list-group-item-text">
                      The following snippet of text is <a href="#">rendered as link text</a>.
                    </div>
                  </div>
                  <div className="list-view-pf-additional-info">
                    <div className="list-view-pf-additional-info-item">
                      <span className="pficon pficon-screen"></span>
                      <strong>4</strong> Hosts
                    </div>
                    <div className="list-view-pf-additional-info-item">
                      <span className="pficon pficon-cluster"></span>
                      <strong>2</strong> Clusters
                    </div>
                    <div className="list-view-pf-additional-info-item">
                      <span className="pficon pficon-container-node"></span>
                      <strong>11</strong> Nodes
                    </div>
                    <div className="list-view-pf-additional-info-item">
                      <span className="pficon pficon-image"></span>
                      <strong>6</strong> Images
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="list-view-pf-checkbox">
                <input type="checkbox"/>
              </div>
              <div className="list-view-pf-actions">
                <button className="btn btn-default">Action</button>
                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight11" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight11">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>
              </div>
              <div className="list-view-pf-main-info">
                <div className="list-view-pf-left">
                  <span className="fa fa-gamepad list-view-pf-icon-sm"></span>
                </div>
                <div className="list-view-pf-body">
                  <div className="list-view-pf-description">
                    <div className="list-group-item-heading">
                      Event Three
                    </div>
                    <div className="list-group-item-text">
                      The following snippet of text is <a href="#">rendered as link text</a>.
                    </div>
                  </div>
                  <div className="list-view-pf-additional-info">
                    <div className="list-view-pf-additional-info-item">
                      <span className="pficon pficon-screen"></span>
                      <strong>4</strong> Hosts
                    </div>
                    <div className="list-view-pf-additional-info-item">
                      <span className="pficon pficon-cluster"></span>
                      <strong>2</strong> Clusters
                    </div>
                    <div className="list-view-pf-additional-info-item">
                      <span className="pficon pficon-container-node"></span>
                      <strong>10</strong> Nodes
                    </div>
                    <div className="list-view-pf-additional-info-item">
                      <span className="pficon pficon-image"></span>
                      <strong>6</strong> Images
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="list-view-pf-checkbox">
                <input type="checkbox"/>
              </div>
              <div className="list-view-pf-actions">
                <button className="btn btn-default">Action</button>
                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight12" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight12">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>
              </div>
              <div className="list-view-pf-main-info">
                <div className="list-view-pf-left">
                  <span className="fa fa-linux list-view-pf-icon-sm"></span>
                </div>
                <div className="list-view-pf-body">
                  <div className="list-view-pf-description">
                    <div className="list-group-item-heading">
                      Event Four
                    </div>
                    <div className="list-group-item-text">
                      The following snippet of text is <a href="#">rendered as link text</a>.
                    </div>
                  </div>
                  <div className="list-view-pf-additional-info">
                    <div className="list-view-pf-additional-info-item">
                      <span className="pficon pficon-screen"></span>
                      <strong>4</strong> Hosts
                    </div>
                    <div className="list-view-pf-additional-info-item">
                      <span className="pficon pficon-cluster"></span>
                      <strong>2</strong> Clusters
                    </div>
                    <div className="list-view-pf-additional-info-item">
                      <span className="pficon pficon-container-node"></span>
                      <strong>10</strong> Nodes
                    </div>
                    <div className="list-view-pf-additional-info-item">
                      <span className="pficon pficon-image"></span>
                      <strong>6</strong> Images
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="list-view-pf-checkbox">
                <input type="checkbox"/>
              </div>
              <div className="list-view-pf-actions">
                <button className="btn btn-default">Action</button>
                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight13" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight13">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>
              </div>
              <div className="list-view-pf-main-info">
                <div className="list-view-pf-left">
                  <span className="fa fa-briefcase list-view-pf-icon-sm"></span>
                </div>
                <div className="list-view-pf-body">
                  <div className="list-view-pf-description">
                    <div className="list-group-item-heading">
                      Event Five
                    </div>
                    <div className="list-group-item-text">
                      The following snippet of text is <a href="#">rendered as link text</a>.
                    </div>
                  </div>
                  <div className="list-view-pf-additional-info">
                    <div className="list-view-pf-additional-info-item">
                      <span className="pficon pficon-screen"></span>
                      <strong>4</strong> Hosts
                    </div>
                    <div className="list-view-pf-additional-info-item">
                      <span className="pficon pficon-cluster"></span>
                      <strong>2</strong> Clusters
                    </div>
                    <div className="list-view-pf-additional-info-item">
                      <span className="pficon pficon-container-node"></span>
                      <strong>10</strong> Nodes
                    </div>
                    <div className="list-view-pf-additional-info-item">
                      <span className="pficon pficon-image"></span>
                      <strong>6</strong> Images
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="list-view-pf-checkbox">
                <input type="checkbox"/>
              </div>
              <div className="list-view-pf-actions">
                <button className="btn btn-default">Action</button>
                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight14" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight14">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>
              </div>
              <div className="list-view-pf-main-info">
                <div className="list-view-pf-left">
                  <span className="fa fa-coffee list-view-pf-icon-sm"></span>
                </div>
                <div className="list-view-pf-body">
                  <div className="list-view-pf-description">
                    <div className="list-group-item-heading">
                      Event Six
                    </div>
                    <div className="list-group-item-text">
                      The following snippet of text is <a href="#">rendered as link text</a>.
                    </div>
                  </div>
                  <div className="list-view-pf-additional-info">
                    <div className="list-view-pf-additional-info-item">
                      <span className="pficon pficon-screen"></span>
                      <strong>4</strong> Hosts
                    </div>
                    <div className="list-view-pf-additional-info-item">
                      <span className="pficon pficon-cluster"></span>
                      <strong>2</strong> Clusters
                    </div>
                    <div className="list-view-pf-additional-info-item">
                      <span className="pficon pficon-container-node"></span>
                      <strong>10</strong> Nodes
                    </div>
                    <div className="list-view-pf-additional-info-item">
                      <span className="pficon pficon-image"></span>
                      <strong>6</strong> Images
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};