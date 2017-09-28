import React from 'react';
import NavBar from './NavBar';

export default class AppllicationLauncher extends React.Component {
  componentDidMount() {
    $('.applauncher-pf .dropdown-toggle').eq(0).click();
  }

  render() {
    return (
      <div className="doc-example">
        <h2>Grid Menu</h2>
        <h3>Icons</h3>
        <NavBar className="applauncher-pf-block-list">
          <ul className="dropdown-menu dropdown-menu-right" role="menu">
            <li className="applauncher-pf-item" role="menuitem">
              <a className="applauncher-pf-link" href="#">
                <i className="applauncher-pf-link-icon pficon pficon-storage-domain" aria-hidden="true"></i>
                <span className="applauncher-pf-link-title">Recteque</span>
              </a>
            </li>
            <li className="applauncher-pf-item" role="menuitem">
              <a className="applauncher-pf-link" href="#">
                <i className="applauncher-pf-link-icon pficon pficon-build" aria-hidden="true"></i>
                <span className="applauncher-pf-link-title">Suavitate</span>
              </a>
            </li>
            <li className="applauncher-pf-item" role="menuitem">
              <a className="applauncher-pf-link" href="#">
                <i className="applauncher-pf-link-icon pficon pficon-domain" aria-hidden="true"></i>
                <span className="applauncher-pf-link-title">Lorem</span>
              </a>
            </li>
            <li className="applauncher-pf-item" role="menuitem">
              <a className="applauncher-pf-link" href="#">
                <i className="applauncher-pf-link-icon pficon pficon-home" aria-hidden="true"></i>
                <span className="applauncher-pf-link-title">Home</span>
              </a>
            </li>
          </ul>
        </NavBar>
        <h3>No Icons</h3>
        <NavBar className="applauncher-pf-block-list">
          <ul className="dropdown-menu dropdown-menu-right" role="menu">
            <li className="applauncher-pf-item" role="menuitem">
              <a className="applauncher-pf-link" href="#">
                <span className="applauncher-pf-link-title">Recteque</span>
              </a>
            </li>
            <li className="applauncher-pf-item" role="menuitem">
              <a className="applauncher-pf-link" href="#">
                <span className="applauncher-pf-link-title">Suavitate</span>
              </a>
            </li>
            <li className="applauncher-pf-item" role="menuitem">
              <a className="applauncher-pf-link" href="#">
                <span className="applauncher-pf-link-title">Lorem</span>
              </a>
            </li>
            <li className="applauncher-pf-item" role="menuitem">
              <a className="applauncher-pf-link" href="#">
                <span className="applauncher-pf-link-title">Home</span>
              </a>
            </li>
          </ul>
        </NavBar>
        <h2>List Menu</h2>
        <h3>Icons</h3>
        <NavBar>
          <ul className="dropdown-menu dropdown-menu-right" role="menu">
            <li className="applauncher-pf-item" role="menuitem">
              <a className="applauncher-pf-link" href="#">
                <i className="applauncher-pf-link-icon pficon pficon-storage-domain" aria-hidden="true"></i>
                <span className="applauncher-pf-link-title">Recteque</span>
              </a>
            </li>
            <li className="applauncher-pf-item" role="menuitem">
              <a className="applauncher-pf-link" href="#">
                <i className="applauncher-pf-link-icon pficon pficon-build" aria-hidden="true"></i>
                <span className="applauncher-pf-link-title">Suavitate</span>
              </a>
            </li>
            <li className="applauncher-pf-item" role="menuitem">
              <a className="applauncher-pf-link" href="#">
                <i className="applauncher-pf-link-icon pficon pficon-domain" aria-hidden="true"></i>
                <span className="applauncher-pf-link-title">Lorem</span>
              </a>
            </li>
            <li className="applauncher-pf-item" role="menuitem">
              <a className="applauncher-pf-link" href="#">
                <i className="applauncher-pf-link-icon pficon pficon-home" aria-hidden="true"></i>
                <span className="applauncher-pf-link-title">Home</span>
              </a>
            </li>
          </ul>
        </NavBar>
        <h3>No Icons</h3>
        <NavBar>
          <ul className="dropdown-menu dropdown-menu-right" role="menu">
            <li className="applauncher-pf-item" role="menuitem">
              <a className="applauncher-pf-link" href="#">
                <span className="applauncher-pf-link-title">Recteque</span>
              </a>
            </li>
            <li className="applauncher-pf-item" role="menuitem">
              <a className="applauncher-pf-link" href="#">
                <span className="applauncher-pf-link-title">Suavitate</span>
              </a>
            </li>
            <li className="applauncher-pf-item" role="menuitem">
              <a className="applauncher-pf-link" href="#">
                <span className="applauncher-pf-link-title">Lorem</span>
              </a>
            </li>
            <li className="applauncher-pf-item" role="menuitem">
              <a className="applauncher-pf-link" href="#">
                <span className="applauncher-pf-link-title">Home</span>
              </a>
            </li>
          </ul>
        </NavBar>
      </div>
    );
  }
}