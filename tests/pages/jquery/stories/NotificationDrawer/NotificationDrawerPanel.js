import React from 'react';
import Kebab from './Kebab';

export default function NotificationDrawerPanel(props) {
  return (
    <div>
      <div className="drawer-pf-notification unread">
        <Kebab dropmenuType="dropdown" dropmenuPosition="pull-right" dropmenuId={'dropdownKebabRight1' + props.id} dropdownPosition="dropdown-menu-right" dropmenuVariation="dropdown-kebab-pf"/>
        <span className="pficon pficon-info pull-left"></span>
        <div className="drawer-pf-notification-content">
          <span className="drawer-pf-notification-message">A New Event! Huzzah! Bold!</span>
          <div className="drawer-pf-notification-info">
            <span className="date">3/31/16</span>
            <span className="time">12:12:44 PM</span>
          </div>
        </div>
      </div>
      <div className="drawer-pf-notification unread">
        <Kebab dropmenuType="dropdown" dropmenuPosition="pull-right" dropmenuId={'dropdownKebabRight2' + props.id} dropdownPosition="dropdown-menu-right" dropmenuVariation="dropdown-kebab-pf"/>
        <span className="pficon pficon-ok pull-left"></span>
        <div className="drawer-pf-notification-content">
          <span className="drawer-pf-notification-message">Another Event Notification</span>
          <div className="drawer-pf-notification-info">
            <span className="date">3/31/16</span>
            <span className="time">12:12:44 PM</span>
          </div>
        </div>
      </div>
      <div className="drawer-pf-notification">
        <Kebab dropmenuType="dropdown" dropmenuPosition="pull-right" dropmenuId={'dropdownKebabRight3' + props.id} dropdownPosition="dropdown-menu-right" dropmenuVariation="dropdown-kebab-pf"/>
        <span className="pficon pficon-warning-triangle-o pull-left"></span>
        <div className="drawer-pf-notification-content">
          <span className="drawer-pf-notification-message">Another Event Notification that is really long to see how it reacts on smaller screens sizes.</span>
          <div className="drawer-pf-notification-info">
            <span className="date">3/31/16</span>
            <span className="time">12:12:44 PM</span>
          </div>
        </div>
      </div>
      <div className="drawer-pf-notification">
        <Kebab dropmenuType="dropdown" dropmenuPosition="pull-right" dropmenuId={'dropdownKebabRight4' + props.id} dropdownPosition="dropdown-menu-right" dropmenuVariation="dropdown-kebab-pf"/>
        <span className="pficon pficon-error-circle-o pull-left"></span>
        <div className="drawer-pf-notification-content">
          <span className="drawer-pf-notification-message">Another Event Notification</span>
          <div className="drawer-pf-notification-info">
            <span className="date">3/31/16</span>
            <span className="time">12:12:44 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}