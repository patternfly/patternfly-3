import React from 'react';
import Brand from './img/brand.svg';

export default class Toolbar extends React.Component {
  componentDidMount() {
    // Upon clicking the find button, show the find dropdown content
    $(".btn-find").click(function () {
      $(this).parent().find(".find-pf-dropdown-container").toggle();
    });
    // Upon clicking the find close button, hide the find dropdown content
    $(".btn-find-close").click(function () {
      $(".find-pf-dropdown-container").hide();
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
      <img src={Brand} alt="PatternFly Enterprise Application"/>
    </a>
  </div>
  <div className="collapse navbar-collapse navbar-collapse-1">
    <ul className="nav navbar-nav navbar-utility">
      <li className="dropdown">
        <a className="nav-item-iconic" id="dropdownMenu4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          <span title="Help" className="fa pficon-help"></span>
          <span className="caret"></span>
        </a>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu4">
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
            <a tabIndex="-1" href="#">More options</a>
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
      <li>
        <a href="basic.html">Basic</a>
      </li>
      <li>
        <a href="bootstrap-treeview-2.html">Tree View</a>
      </li>
      <li>
        <a href="dashboard.html">Dashboard</a>
      </li>
      <li>
        <a href="form.html">Form</a>
      </li>
      <li>
        <a href="tab.html">Tab</a>
      </li>
      <li>
        <a href="typography-2.html">Typography</a>
      </li>
      <li>
        <a href="card-view-multi-select.html">Card View - Multi Select</a>
      </li>
      <li>
        <a href="card-view-single-select.html">Card View - Single Select</a>
      </li>
      <li>
        <a href="cards.html">Cards</a>
      </li>
      <li>
        <a href="pagination-card-view.html">Pagination - Card View</a>
      </li>
    </ul>
  </div>
</nav>
<div className="container-fluid">
  <div className="row toolbar-pf">
    <div className="col-sm-12">
      <form className="toolbar-pf-actions">
        <div className="form-group toolbar-pf-filter">
          <label className="sr-only" htmlFor="filter14">Name</label>
          <div className="input-group">
            <div className="input-group-btn">
              <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Name <span className="caret"></span></button>
              <ul className="dropdown-menu">
                <li className="selected"><a href="#">Name</a></li>
                <li><a href="#">Type</a></li>
                <li><a href="#">Color</a></li>
              </ul>
            </div>
            <input type="text" className="form-control" id="filter14" placeholder="Filter By Name..."/>
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
            <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebab66" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span className="fa fa-ellipsis-v"></span>
            </button>
            <ul className="dropdown-menu " aria-labelledby="dropdownKebab66">
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
              <input type="text" className="form-control" id="find44" placeholder="Find By Keyword..."/>
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
            <button className="btn btn-link active"><i className="fa fa-th"></i></button>
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
</div>
    );
  }
};