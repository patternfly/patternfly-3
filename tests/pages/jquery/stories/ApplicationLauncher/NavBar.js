import React from 'react';
import Brand from '../img/brand.svg'

export default class NavBar extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
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
            <li className={"applauncher-pf dropdown dropdown-kebab-pf" + (this.props.className ? " " + this.props.className : "")}>
              <a className="dropdown-toggle drawer-pf-trigger-icon" data-toggle="dropdown" href="#">
                <i className="fa fa-th applauncher-pf-icon" aria-hidden="true"></i>
                <span className="applauncher-pf-title">
                  Application Launcher
                  <span className="caret" aria-hidden="true"></span>
                </span>
              </a>
              {this.props.children}
            </li>
            <li>
              <a href="#">Status</a>
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
        </div>
      </nav>
    );
  }
};