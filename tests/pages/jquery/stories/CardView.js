import React from 'react';
import Brand from './img/brand.svg';

export default class CardView extends React.Component {
  componentDidMount() {
    // matchHeight the contents of each .card-pf and then the .card-pf itself
    $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-body").matchHeight();
    // Card Single Select
    $('.card-pf-view-single-select').click(function() {
      if ($(this).hasClass('active'))
      { $(this).removeClass('active'); }
      else
      { $('.card-pf-view-single-select').removeClass('active'); $(this).addClass('active'); }
    });
  }

  render() {
    return (
      <div className="cards-pf">
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
                <a className="nav-item-iconic" id="dropdownMenu77" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  <span title="Help" className="fa pficon-help"></span>
                  <span className="caret"></span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu77">
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
            </ul>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row toolbar-pf">
            <div className="col-sm-12">
              <form className="toolbar-pf-actions">
                <div className="form-group toolbar-pf-filter">
                  <label className="sr-only" htmlFor="filter11">Name</label>
                  <div className="input-group">
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Name <span className="caret"></span></button>
                      <ul className="dropdown-menu">
                        <li className="selected"><a href="#">Name</a></li>
                        <li><a href="#">Type</a></li>
                        <li><a href="#">Color</a></li>
                      </ul>
                    </div>
                    <input type="text" className="form-control" id="filter11" placeholder="Filter By Name..."/>
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
                    <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebab11" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span className="fa fa-ellipsis-v"></span>
                    </button>
                    <ul className="dropdown-menu " aria-labelledby="dropdownKebab11s">
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
                      <input type="text" className="form-control" id="find1" placeholder="Find By Keyword..."/>
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
        <div className="container-fluid container-cards-pf">
          <div className="row row-cards-pf">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card-pf card-pf-view card-pf-view-select card-pf-view-single-select">
                <div className="card-pf-body">
                  <div className="card-pf-top-element">
                    <span className="fa fa-birthday-cake card-pf-icon-circle"></span>
                  </div>
                  <h2 className="card-pf-title text-center">
                    Cake Service
                  </h2>
                  <div className="card-pf-items text-center">
                    <div className="card-pf-item">
                      <span className="pficon pficon-screen"></span>
                      <span className="card-pf-item-text">8</span>
                    </div>
                    <div className="card-pf-item">
                      <span className="fa fa-check"></span>
                    </div>
                  </div>
                  <p className="card-pf-info text-center"><strong>Created On</strong> 2015-03-01 02:00 AM <br/> Never Expires</p>
                </div>
                <div className="card-pf-view-checkbox">
                  <input type="checkbox"/>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card-pf card-pf-view card-pf-view-select card-pf-view-single-select">
                <div className="card-pf-body">
                  <div className="card-pf-top-element">
                    <span className="fa fa-birthday-cake card-pf-icon-circle"></span>
                  </div>
                  <h2 className="card-pf-title text-center">
                    Cake Service
                  </h2>
                  <div className="card-pf-items text-center">
                    <div className="card-pf-item">
                      <span className="pficon pficon-screen"></span>
                      <span className="card-pf-item-text">8</span>
                    </div>
                    <div className="card-pf-item">
                      <span className="fa fa-check"></span>
                    </div>
                  </div>
                  <p className="card-pf-info text-center"><strong>Created On</strong> 2015-03-01 02:00 AM <br/> Never Expires</p>
                </div>
                <div className="card-pf-view-checkbox">
                  <input type="checkbox"/>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card-pf card-pf-view card-pf-view-select card-pf-view-single-select">
                <div className="card-pf-body">
                  <div className="card-pf-top-element">
                    <span className="fa fa-birthday-cake card-pf-icon-circle"></span>
                  </div>
                  <h2 className="card-pf-title text-center">
                    Cake Service
                  </h2>
                  <div className="card-pf-items text-center">
                    <div className="card-pf-item">
                      <span className="pficon pficon-screen"></span>
                      <span className="card-pf-item-text">8</span>
                    </div>
                    <div className="card-pf-item">
                      <span className="fa fa-check"></span>
                    </div>
                  </div>
                  <p className="card-pf-info text-center"><strong>Created On</strong> 2015-03-01 02:00 AM <br/> Never Expires</p>
                </div>
                <div className="card-pf-view-checkbox">
                  <input type="checkbox"/>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card-pf card-pf-view card-pf-view-select card-pf-view-single-select">
                <div className="card-pf-body">
                  <div className="card-pf-top-element">
                    <span className="fa fa-birthday-cake card-pf-icon-circle"></span>
                  </div>
                  <h2 className="card-pf-title text-center">
                    Cake Service
                  </h2>
                  <div className="card-pf-items text-center">
                    <div className="card-pf-item">
                      <span className="pficon pficon-screen"></span>
                      <span className="card-pf-item-text">8</span>
                    </div>
                    <div className="card-pf-item">
                      <span className="fa fa-check"></span>
                    </div>
                  </div>
                  <p className="card-pf-info text-center"><strong>Created On</strong> 2015-03-01 02:00 AM <br/> Never Expires</p>
                </div>
                <div className="card-pf-view-checkbox">
                  <input type="checkbox"/>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card-pf card-pf-view card-pf-view-select card-pf-view-single-select">
                <div className="card-pf-body">
                  <div className="card-pf-top-element">
                    <span className="fa fa-birthday-cake card-pf-icon-circle"></span>
                  </div>
                  <h2 className="card-pf-title text-center">
                    Cake Service
                  </h2>
                  <div className="card-pf-items text-center">
                    <div className="card-pf-item">
                      <span className="pficon pficon-screen"></span>
                      <span className="card-pf-item-text">8</span>
                    </div>
                    <div className="card-pf-item">
                      <span className="fa fa-check"></span>
                    </div>
                  </div>
                  <p className="card-pf-info text-center"><strong>Created On</strong> 2015-03-01 02:00 AM <br/> Never Expires</p>
                </div>
                <div className="card-pf-view-checkbox">
                  <input type="checkbox"/>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card-pf card-pf-view card-pf-view-select card-pf-view-single-select">
                <div className="card-pf-body">
                  <div className="card-pf-top-element">
                    <span className="fa fa-birthday-cake card-pf-icon-circle"></span>
                  </div>
                  <h2 className="card-pf-title text-center">
                    Cake Service
                  </h2>
                  <div className="card-pf-items text-center">
                    <div className="card-pf-item">
                      <span className="pficon pficon-screen"></span>
                      <span className="card-pf-item-text">8</span>
                    </div>
                    <div className="card-pf-item">
                      <span className="fa fa-check"></span>
                    </div>
                  </div>
                  <p className="card-pf-info text-center"><strong>Created On</strong> 2015-03-01 02:00 AM <br/> Never Expires</p>
                </div>
                <div className="card-pf-view-checkbox">
                  <input type="checkbox"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};