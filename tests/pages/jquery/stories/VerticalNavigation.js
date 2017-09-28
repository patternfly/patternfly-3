import React from 'react';
import Logo from './img/logo-alt.svg';
import Brand from './img/brand-alt.svg';

export default class VerticalNavigation extends React.Component {
  componentDidMount() {
    // $('a').on('click', function(e) { e.preventDefault() });
    // matchHeight the contents of each .card-pf and then the .card-pf itself
    $(".row-cards-pf > [class*='col'] > .card-pf .card-pf-title").matchHeight();
    $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-body").matchHeight();
    $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-footer").matchHeight();
    $(".row-cards-pf > [class*='col'] > .card-pf").matchHeight();

    // initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Initialize the vertical navigation
    $().setupVerticalNavigation(true);

    // Generate c3 charts
    require(["d3", "c3"], function(d3, c3) {
      var donutConfig1 = $().c3ChartDefaults().getDefaultDonutConfig('A');
      donutConfig1.bindto = '#chart-pf-donut-1';
      donutConfig1.color =  {
        pattern: ["#cc0000","#D1D1D1"]
      };
      donutConfig1.data = {
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
      donutConfig1.tooltip = {
        contents: function (d) {
          return '<span className="donut-tooltip-pf" style="white-space: nowrap;">' +
            Math.round(d[0].ratio * 100) + '%' + ' MHz ' + d[0].name +
            '</span>';
        }
      };

      c3.generate(donutConfig1);
      var donutChartTitle1 = d3.select("#chart-pf-donut-1").select('text.c3-chart-arcs-title');
      donutChartTitle1.text("");
      donutChartTitle1.insert('tspan').text("950").classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
      donutChartTitle1.insert('tspan').text("MHz Used").classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);

      var sparklineConfig1 = $().c3ChartDefaults().getDefaultSparklineConfig();
      sparklineConfig1.bindto = '#chart-pf-sparkline-1';
      sparklineConfig1.data = {
        columns: [
          ['%', 10, 50, 28, 20, 31, 27, 60, 36, 52, 55, 62, 68, 69, 88, 74, 88, 95],
        ],
        type: 'area'
      };
      c3.generate(sparklineConfig1);

      var donutConfig2 = $().c3ChartDefaults().getDefaultDonutConfig('A');
      donutConfig2.bindto = '#chart-pf-donut-2';
      donutConfig2.color =  { pattern: ["#3f9c35","#D1D1D1"] };
      donutConfig2.data = {
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
      donutConfig2.tooltip = {
        contents: function (d) {
          return '<span className="donut-tooltip-pf" style="white-space: nowrap;">' +
            Math.round(d[0].ratio * 100) + '%' + ' GB ' + d[0].name +
            '</span>';
        }
      };

      c3.generate(donutConfig2);
      var donutChartTitle2 = d3.select("#chart-pf-donut-2").select('text.c3-chart-arcs-title');
      donutChartTitle2.text("");
      donutChartTitle2.insert('tspan').text("176").classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
      donutChartTitle2.insert('tspan').text("GB Used").classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);

      var sparklineConfig2 = $().c3ChartDefaults().getDefaultSparklineConfig();
      sparklineConfig2.bindto = '#chart-pf-sparkline-2';
      sparklineConfig2.data = {
        columns: [
          ['%', 35, 36, 20, 30, 31, 22, 44, 36, 40, 41, 55, 52, 48, 48, 50, 40, 41],
        ],
        type: 'area'
      };
      c3.generate(sparklineConfig2);

      var donutConfig3 = $().c3ChartDefaults().getDefaultDonutConfig('A');
      donutConfig3.bindto = '#chart-pf-donut-3';
      donutConfig3.color =  { pattern: ["#EC7A08","#D1D1D1"] };
      donutConfig3.data = {
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
      donutConfig3.tooltip = {
        contents: function (d) {
          return '<span className="donut-tooltip-pf" style="white-space: nowrap;">' +
            Math.round(d[0].ratio * 100) + '%' + ' Gbps ' + d[0].name + '</span>';
        }
      };

      c3.generate(donutConfig3);
      var donutChartTitle3 = d3.select("#chart-pf-donut-3").select('text.c3-chart-arcs-title');
      donutChartTitle3.text("");
      donutChartTitle3.insert('tspan').text("1100").classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
      donutChartTitle3.insert('tspan').text("Gbps Used").classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);

      var sparklineConfig3 = $().c3ChartDefaults().getDefaultSparklineConfig();
      sparklineConfig3.bindto = '#chart-pf-sparkline-3';
      sparklineConfig3.data = {
        columns: [
          ['%', 60, 55, 70, 44, 31, 67, 54, 46, 58, 75, 62, 68, 69, 88, 74, 88, 85],
        ],
        type: 'area'
      };
      c3.generate(sparklineConfig3);

      var donutConfig4 = $().c3ChartDefaults().getDefaultDonutConfig('A');
      donutConfig4.bindto = '#chart-pf-donut-4';
      donutConfig4.color = { pattern: ["#EC7A08","#D1D1D1"] };
      donutConfig4.data = {
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
      donutConfig4.tooltip = {
        contents: function (d) {
          return '<span className="donut-tooltip-pf" style="white-space: nowrap;">' +
            Math.round(d[0].ratio * 100) + '%' + ' Gbps ' + d[0].name + '</span>';
        }
      };

      c3.generate(donutConfig4);
      var donutChartTitle4 = d3.select("#chart-pf-donut-4").select('text.c3-chart-arcs-title');
      donutChartTitle4.text("");
      donutChartTitle4.insert('tspan').text("1100").classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
      donutChartTitle4.insert('tspan').text("Gbps Used").classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);

      var sparklineConfig4 = $().c3ChartDefaults().getDefaultSparklineConfig();
      sparklineConfig4.bindto = '#chart-pf-sparkline-4';
      sparklineConfig4.data = {
        columns: [
          ['%', 60, 55, 70, 44, 31, 67, 54, 46, 58, 75, 62, 68, 69, 88, 74, 88, 85],
        ],
        type: 'area'
      };
      c3.generate(sparklineConfig4);
    });
  }

  render() {
    return (
<div className="layout-pf layout-pf-fixed">
<nav className="navbar navbar-pf-vertical">
  <div className="navbar-header">
    <button type="button" className="navbar-toggle">
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </button>
    <a href="/" className="navbar-brand">
      <img className="navbar-brand-icon" src={Logo} alt=""/><img className="navbar-brand-name" src={Brand} alt="PatternFly Enterprise Application" />
    </a>
  </div>
  <nav className="collapse navbar-collapse">
    <ul className="nav navbar-nav navbar-right navbar-iconic navbar-utility">

      <li className="dropdown">
        <a className="dropdown-toggle nav-item-iconic" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          <span title="Help" className="fa pficon-help"></span>
          <span className="caret"></span>
        </a>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li><a href="#">Help</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </li>
      <li className="dropdown">
        <a className="dropdown-toggle nav-item-iconic" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          <span title="Username" className="fa pficon-user"></span>
          Brian Johnson <span className="caret"></span>
        </a>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li><a href="#">Preferences</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </li>
    </ul>
    <div className="drawer-pf hide drawer-pf-notifications-non-clickable">
      <div className="drawer-pf-title">
        <a className="drawer-pf-toggle-expand fa fa-angle-double-left"></a>
        <a  className="drawer-pf-close pficon pficon-close"></a>
        <h3 className="text-center">Notifications Drawer</h3>
      </div>
      <div className="panel-group" id="notification-drawer-accordion2">
        <div className="panel panel-default">
          <div className="panel-heading" data-component="collapse-heading">
            <h4 className="panel-title">
              <a data-toggle="collapse" data-parent="#notification-drawer-accordion2" href="#fixedCollapseOne">
                Notification Tab 1
              </a>
            </h4>
            <span className="panel-counter">5 New Events</span>
          </div>
          <div id="fixedCollapseOne" className="panel-collapse collapse in">
            <div className="panel-body">
              <div className="drawer-pf-notification unread">

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight29" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight29">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

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

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight30" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight30">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

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

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight31" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight31">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

                <span className="pficon pficon-warning-triangle-o pull-left"></span>
                <div className="drawer-pf-notification-content">
                  <span className="drawer-pf-notification-message">Another Event Notification</span>
                  <div className="drawer-pf-notification-info">
                    <span className="date">3/31/16</span>
                    <span className="time">12:12:44 PM</span>
                  </div>
                </div>
              </div>
              <div className="drawer-pf-notification">

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight32" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight32">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

                <div className="drawer-pf-notification-content">
                  <span className="pficon pficon-error-circle-o pull-left"></span>
                  <span className="drawer-pf-notification-message">Another Event Notification</span>
                  <div className="drawer-pf-notification-info">
                    <span className="date">3/31/16</span>
                    <span className="time">12:12:44 PM</span>
                  </div>
                </div>
              </div>

            </div>
            <div className="blank-slate-pf hidden">
              <div className="blank-slate-pf-icon">
                <span className="pficon-info"></span>
              </div>
              <h1>There are no notifications to display.</h1>
            </div>
            <div className="drawer-pf-action">
              <div className="drawer-pf-action-link" data-toggle="mark-all-read">
                <button className="btn btn-link">Mark All Read</button>
              </div>
              <div className="drawer-pf-action-link" data-toggle="clear-all">
                <button className="btn btn-link">
                  <span className="pficon pficon-close"></span>
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading" data-component="collapse-heading">
            <h4 className="panel-title">
              <a className="collapsed" data-toggle="collapse" data-parent="#notification-drawer-accordion2" href="#fixedCollapseTwo">
                Notification Tab 2
              </a>
            </h4>
            <span className="panel-counter">5 New Events</span>
          </div>
          <div id="fixedCollapseTwo" className="panel-collapse collapse">
            <div className="panel-body">
              <div className="drawer-pf-notification unread">

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight33" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight33">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

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

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight34" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight34">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

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

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight35" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight35">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

                <span className="pficon pficon-warning-triangle-o pull-left"></span>
                <div className="drawer-pf-notification-content">
                  <span className="drawer-pf-notification-message">Another Event Notification</span>
                  <div className="drawer-pf-notification-info">
                    <span className="date">3/31/16</span>
                    <span className="time">12:12:44 PM</span>
                  </div>
                </div>
              </div>
              <div className="drawer-pf-notification">

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight36" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight36">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

                <div className="drawer-pf-notification-content">
                  <span className="pficon pficon-error-circle-o pull-left"></span>
                  <span className="drawer-pf-notification-message">Another Event Notification</span>
                  <div className="drawer-pf-notification-info">
                    <span className="date">3/31/16</span>
                    <span className="time">12:12:44 PM</span>
                  </div>
                </div>
              </div>

              <div className="drawer-pf-notification unread">

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight37" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight37">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

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

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight38" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight38">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

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

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight39" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight39">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

                <span className="pficon pficon-warning-triangle-o pull-left"></span>
                <div className="drawer-pf-notification-content">
                  <span className="drawer-pf-notification-message">Another Event Notification</span>
                  <div className="drawer-pf-notification-info">
                    <span className="date">3/31/16</span>
                    <span className="time">12:12:44 PM</span>
                  </div>
                </div>
              </div>
              <div className="drawer-pf-notification">

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight40" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight40">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

                <div className="drawer-pf-notification-content">
                  <span className="pficon pficon-error-circle-o pull-left"></span>
                  <span className="drawer-pf-notification-message">Another Event Notification</span>
                  <div className="drawer-pf-notification-info">
                    <span className="date">3/31/16</span>
                    <span className="time">12:12:44 PM</span>
                  </div>
                </div>
              </div>

              <div className="drawer-pf-notification unread">

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight41" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight41">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

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

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight42" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight42">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

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

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight43" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight43">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

                <span className="pficon pficon-warning-triangle-o pull-left"></span>
                <div className="drawer-pf-notification-content">
                  <span className="drawer-pf-notification-message">Another Event Notification</span>
                  <div className="drawer-pf-notification-info">
                    <span className="date">3/31/16</span>
                    <span className="time">12:12:44 PM</span>
                  </div>
                </div>
              </div>
              <div className="drawer-pf-notification">

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight44" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight44">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

                <div className="drawer-pf-notification-content">
                  <span className="pficon pficon-error-circle-o pull-left"></span>
                  <span className="drawer-pf-notification-message">Another Event Notification</span>
                  <div className="drawer-pf-notification-info">
                    <span className="date">3/31/16</span>
                    <span className="time">12:12:44 PM</span>
                  </div>
                </div>
              </div>

              <div className="drawer-pf-loading text-center">
                <span className="spinner spinner-xs spinner-inline"></span> Loading More
              </div>
            </div>
            <div className="blank-slate-pf hidden">
              <div className="blank-slate-pf-icon">
                <span className="pficon-info"></span>
              </div>
              <h1>There are no notifications to display.</h1>
            </div>
            <div className="drawer-pf-action">
              <div className="drawer-pf-action-link" data-toggle="mark-all-read">
                <button className="btn btn-link">Mark All Read</button>
              </div>
              <div className="drawer-pf-action-link" data-toggle="clear-all">
                <button className="btn btn-link">
                  <span className="pficon pficon-close"></span>
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading" data-component="collapse-heading">
            <h4 className="panel-title">
              <a className="collapsed" data-toggle="collapse" data-parent="#notification-drawer-accordion2" href="#fixedCollapseThree">
                Notification Tab 3
              </a>
            </h4>
            <span className="panel-counter">5 New Events</span>
          </div>
          <div id="fixedCollapseThree" className="panel-collapse collapse">
            <div className="panel-body">
              <div className="drawer-pf-notification unread">

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight45" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight45">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

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

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight46" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight46">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

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

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight47" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight47">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

                <span className="pficon pficon-warning-triangle-o pull-left"></span>
                <div className="drawer-pf-notification-content">
                  <span className="drawer-pf-notification-message">Another Event Notification</span>
                  <div className="drawer-pf-notification-info">
                    <span className="date">3/31/16</span>
                    <span className="time">12:12:44 PM</span>
                  </div>
                </div>
              </div>
              <div className="drawer-pf-notification">

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight48" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight48">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

                <div className="drawer-pf-notification-content">
                  <span className="pficon pficon-error-circle-o pull-left"></span>
                  <span className="drawer-pf-notification-message">Another Event Notification</span>
                  <div className="drawer-pf-notification-info">
                    <span className="date">3/31/16</span>
                    <span className="time">12:12:44 PM</span>
                  </div>
                </div>
              </div>

              <div className="drawer-pf-notification unread">

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight49" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight49">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

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

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight50" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight50">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

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

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight51" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight51">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

                <span className="pficon pficon-warning-triangle-o pull-left"></span>
                <div className="drawer-pf-notification-content">
                  <span className="drawer-pf-notification-message">Another Event Notification</span>
                  <div className="drawer-pf-notification-info">
                    <span className="date">3/31/16</span>
                    <span className="time">12:12:44 PM</span>
                  </div>
                </div>
              </div>
              <div className="drawer-pf-notification">

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight52" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight52">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

                <div className="drawer-pf-notification-content">
                  <span className="pficon pficon-error-circle-o pull-left"></span>
                  <span className="drawer-pf-notification-message">Another Event Notification</span>
                  <div className="drawer-pf-notification-info">
                    <span className="date">3/31/16</span>
                    <span className="time">12:12:44 PM</span>
                  </div>
                </div>
              </div>

              <div className="drawer-pf-notification unread">

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight53" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight53">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

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

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight54" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight54">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

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

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight55" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight55">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

                <span className="pficon pficon-warning-triangle-o pull-left"></span>
                <div className="drawer-pf-notification-content">
                  <span className="drawer-pf-notification-message">Another Event Notification</span>
                  <div className="drawer-pf-notification-info">
                    <span className="date">3/31/16</span>
                    <span className="time">12:12:44 PM</span>
                  </div>
                </div>
              </div>
              <div className="drawer-pf-notification">

                <div className="dropdown pull-right dropdown-kebab-pf">
                  <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight56" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className="fa fa-ellipsis-v"></span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight56">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>

                <div className="drawer-pf-notification-content">
                  <span className="pficon pficon-error-circle-o pull-left"></span>
                  <span className="drawer-pf-notification-message">Another Event Notification</span>
                  <div className="drawer-pf-notification-info">
                    <span className="date">3/31/16</span>
                    <span className="time">12:12:44 PM</span>
                  </div>
                </div>
              </div>

            </div>
            <div className="blank-slate-pf hidden">
              <div className="blank-slate-pf-icon">
                <span className="pficon-info"></span>
              </div>
              <h1>There are no notifications to display.</h1>
            </div>
            <div className="drawer-pf-action">
              <div className="drawer-pf-action-link" data-toggle="mark-all-read">
                <button className="btn btn-link">Mark All Read</button>
              </div>
              <div className="drawer-pf-action-link" data-toggle="clear-all">
                <button className="btn btn-link">
                  <span className="pficon pficon-close"></span>
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</nav>
<div className="nav-pf-vertical nav-pf-vertical-with-sub-menus hidden-icons-pf">
  <ul className="list-group">
    <li className="list-group-item">
      <a>
        <span className="fa fa-dashboard" data-toggle="tooltip" title="Dashboard"></span>
        <span className="list-group-item-value">Dashboard</span>
      </a>
    </li>
    <li className="list-group-item">
      <a>
        <span className="fa fa-shield" data-toggle="tooltip" title="Dolor"></span>
        <span className="list-group-item-value">Dolor</span>

      </a>
    </li>
    <li className="list-group-item active secondary-nav-item-pf" data-target="#ipsum-secondary">
      <a>
        <span className="fa fa-space-shuttle" data-toggle="tooltip" title="Ipsum"></span>
        <span className="list-group-item-value">Ipsum</span>
      </a>
      <div id="-secondary" className="nav-pf-secondary-nav">
        <div className="nav-item-pf-header">
          <a href="#0" className="secondary-collapse-toggle-pf" data-toggle="collapse-secondary-nav"></a>
          <span>Ipsum</span>
        </div>
        <ul className="list-group">
          <li className="list-group-item active tertiary-nav-item-pf" data-target="#ipsum-intellegam-tertiary">
            <a href="#0">
              <span className="list-group-item-value">Intellegam</span>
            </a>
            <div id="compute-containers-tertiary" className="nav-pf-tertiary-nav">
              <div className="nav-item-pf-header">
                <a href="#0" className="tertiary-collapse-toggle-pf" data-toggle="collapse-tertiary-nav"></a>
                <span>Intellegam</span>
              </div>
              <ul className="list-group">
                <li className="list-group-item active">
                  <a href="#0">
                    <span id="compute-containers-users-nav-item" className="list-group-item-value">Recteque</span>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#0">
                    <span id="compute-containers-groups-nav-item" className="list-group-item-value">Suavitate</span>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#0">
                    <span id="compute-containers-roles-nav-item" className="list-group-item-value">Vituperatoribus</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="list-group-item tertiary-nav-item-pf" data-target="#ipsum-copiosae-tertiary">
            <a href="#0">
              <span className="list-group-item-value">Copiosae</span>
            </a>
            <div id="compute-infrastructure-tertiary" className="nav-pf-tertiary-nav">
              <div className="nav-item-pf-header">
                <a href="#0" className="tertiary-collapse-toggle-pf" data-toggle="collapse-tertiary-nav"></a>
                <span>Copiosae</span>
              </div>
              <ul className="list-group">
                <li className="list-group-item">
                  <a href="#0">
                    <span className="list-group-item-value">Exerci</span>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#0">
                    <span className="list-group-item-value">Quaeque</span>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#0">
                    <span className="list-group-item-value">Utroque</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="list-group-item tertiary-nav-item-pf" data-target="#ipsum-patrioque-tertiary">
            <a href="#0" >
              <span className="list-group-item-value">Patrioque</span>
            </a>
            <div id="compute-clouds-tertiary" className="nav-pf-tertiary-nav">
              <div className="nav-item-pf-header">
                <a href="#0" className="tertiary-collapse-toggle-pf" data-toggle="collapse-tertiary-nav"></a>
                <span>Patrioque</span>
              </div>
              <ul className="list-group">
                <li className="list-group-item">
                  <a href="#0">
                    <span className="list-group-item-value">Novum</span>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#0">
                    <span className="list-group-item-value">Pericula</span>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#0">
                    <span className="list-group-item-value">Gubergren</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="list-group-item">
            <a href="#0">
              <span className="list-group-item-value">Accumsan</span>
            </a>
          </li>
        </ul>
      </div>
    </li>
    <li className="list-group-item secondary-nav-item-pf" data-target="#amet-secondary">
      <a>
        <span className="fa fa-paper-plane" data-toggle="tooltip" title="Amet"></span>
        <span className="list-group-item-value">Amet</span>
      </a>
      <div id="amet-secondary" className="nav-pf-secondary-nav">
        <div className="nav-item-pf-header">
          <a href="#0" className="secondary-collapse-toggle-pf" data-toggle="collapse-secondary-nav"></a>
          <span>Amet</span>
        </div>
        <ul className="list-group">
          <li className="list-group-item tertiary-nav-item-pf" data-target="#amet-detracto-tertiary">
            <a href="#0">
              <span className="list-group-item-value">Detracto Suscipiantur</span>
            </a>
            <div id="amet-detracto-tertiary" className="nav-pf-tertiary-nav">
              <div className="nav-item-pf-header">
                <a href="#0" className="tertiary-collapse-toggle-pf" data-toggle="collapse-tertiary-nav"></a>
                <span>Detracto</span>
              </div>
              <ul className="list-group">
                <li className="list-group-item">
                  <a href="#0">
                    <span className="list-group-item-value">Delicatissimi</span>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#0">
                    <span className="list-group-item-value">Aliquam</span>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#0">
                    <span className="list-group-item-value">Principes</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="list-group-item tertiary-nav-item-pf" data-target="#amet-mediocrem-tertiary">
            <a href="#0">
              <span className="list-group-item-value">Mediocrem</span>
            </a>
            <div id="amet-mediocrem-tertiary" className="nav-pf-tertiary-nav">
              <div className="nav-item-pf-header">
                <a href="#0" className="tertiary-collapse-toggle-pf" data-toggle="collapse-tertiary-nav"></a>
                <span>Mediocrem</span>
              </div>
              <ul className="list-group">
                <li className="list-group-item">
                  <a href="#0">
                    <span className="list-group-item-value">Convenire</span>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#0">
                    <span className="list-group-item-value">Nonumy</span>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#0">
                    <span className="list-group-item-value">Deserunt</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="list-group-item tertiary-nav-item-pf" data-target="#amet-corrumpit-tertiary">
            <a href="#0">
              <span className="list-group-item-value">Corrumpit Cupidatat Proident Deserunt</span>
            </a>
            <div id="amet-corrumpit-tertiary" className="nav-pf-tertiary-nav">
              <div className="nav-item-pf-header">
                <a href="#0" className="tertiary-collapse-toggle-pf" data-toggle="collapse-tertiary-nav"></a>
                <span>Corrumpit</span>
              </div>
              <ul className="list-group">
                <li className="list-group-item">
                  <a href="#0">
                    <span className="list-group-item-value">Aeque</span>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#0">
                    <span className="list-group-item-value">Delenit</span>
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#0">
                    <span className="list-group-item-value">Qualisque</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="list-group-item">
            <a href="#0">
              <span className="list-group-item-value">Urbanitas Habitant Morbi Tristique</span>
            </a>
          </li>
        </ul>
      </div>
    </li>
    <li className="list-group-item">
      <a>
        <span className="fa fa-graduation-cap" data-toggle="tooltip" title="Adipscing"></span>
        <span className="list-group-item-value">Adipscing</span>
      </a>
    </li>
    <li className="list-group-item">
      <a>
        <span className="fa fa-gamepad" data-toggle="tooltip" title="Lorem"></span>
        <span className="list-group-item-value">Lorem</span>
      </a>
    </li>

    <li className="list-group-item secondary-nav-item-pf mobile-nav-item-pf visible-xs-block" data-target="#amet-secondary">
      <a>
        <span className="pficon pficon-user" data-toggle="tooltip" title="" data-original-title="User"></span>
        <span className="list-group-item-value">User</span>
      </a>
      <div id="user-secondary" className="nav-pf-secondary-nav">
        <div className="nav-item-pf-header">
          <a className="secondary-collapse-toggle-pf" data-toggle="collapse-secondary-nav"></a>
          <span>User</span>
        </div>

        <ul className="list-group">
          <li className="list-group-item">
            <a>
              <span className="list-group-item-value">Preferences</span>
            </a>
          </li>

          <li className="list-group-item">
            <a>
              <span className="list-group-item-value">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </li>

    <li className="list-group-item secondary-nav-item-pf mobile-nav-item-pf visible-xs-block" data-target="#amet-secondary">
      <a>
        <span className="pficon pficon-help" data-toggle="tooltip" title="" data-original-title="Amet"></span>
        <span className="list-group-item-value">Help</span>
      </a>
      <div id="help-secondary" className="nav-pf-secondary-nav">
        <div className="nav-item-pf-header">
          <a className="secondary-collapse-toggle-pf" data-toggle="collapse-secondary-nav"></a>
          <span>Help</span>
        </div>
        <ul className="list-group">
          <li className="list-group-item">
            <a>
              <span className="list-group-item-value">Help</span>
            </a>
          </li>
          <li className="list-group-item">
            <a>
              <span className="list-group-item-value">About</span>
            </a>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</div>

<div className="container-fluid container-cards-pf container-pf-nav-pf-vertical">
  <div className="row row-cards-pf">
    <div className="col-xs-12 col-sm-6 col-md-3">
      <div className="card-pf card-pf-accented card-pf-aggregate-status">
        <h2 className="card-pf-title">
          <span className="fa fa-shield"></span><span className="card-pf-aggregate-status-count">0</span> Ipsum
        </h2>
        <div className="card-pf-body">
          <p className="card-pf-aggregate-status-notifications">
            <span className="card-pf-aggregate-status-notification"><a href="#" className="add" data-toggle="tooltip" data-placement="top" title="Add Ipsum"><span className="pficon pficon-add-circle-o"></span></a></span>
          </p>
        </div>
      </div>

    </div>
    <div className="col-xs-12 col-sm-6 col-md-3">
      <div className="card-pf card-pf-accented card-pf-aggregate-status">
        <h2 className="card-pf-title">
          <a href="#"><span className="fa fa-shield"></span><span className="card-pf-aggregate-status-count">20</span> Amet</a>
        </h2>
        <div className="card-pf-body">
          <p className="card-pf-aggregate-status-notifications">
            <span className="card-pf-aggregate-status-notification"><a href="#"><span className="pficon pficon-error-circle-o"></span>4</a></span>
            <span className="card-pf-aggregate-status-notification"><a href="#"><span className="pficon pficon-warning-triangle-o"></span>1</a></span>
          </p>
        </div>
      </div>
    </div>
    <div className="col-xs-12 col-sm-6 col-md-3">
      <div className="card-pf card-pf-accented card-pf-aggregate-status">
        <h2 className="card-pf-title">
          <a href="#"><span className="fa fa-shield"></span><span className="card-pf-aggregate-status-count">9</span> Adipiscing</a>
        </h2>
        <div className="card-pf-body">
          <p className="card-pf-aggregate-status-notifications">
            <span className="card-pf-aggregate-status-notification"><span className="pficon pficon-ok"></span></span>
          </p>
        </div>
      </div>
    </div>
    <div className="col-xs-12 col-sm-6 col-md-3">
      <div className="card-pf card-pf-accented card-pf-aggregate-status">
        <h2 className="card-pf-title">
          <a href="#"><span className="fa fa-shield"></span><span className="card-pf-aggregate-status-count">12</span> Lorem</a>
        </h2>
        <div className="card-pf-body">
          <p className="card-pf-aggregate-status-notifications">
            <a href="#"><span className="card-pf-aggregate-status-notification"><span className="pficon pficon-error-circle-o"></span>1</span></a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="row row-cards-pf">
    <div className="col-xs-12 col-sm-6 col-md-3">
      <div className="card-pf card-pf-accented card-pf-aggregate-status card-pf-aggregate-status-mini">
        <h2 className="card-pf-title">
          <span className="fa fa-rebel"></span>
          <span className="card-pf-aggregate-status-count">0</span> Ipsum
        </h2>
        <div className="card-pf-body">
          <p className="card-pf-aggregate-status-notifications">
            <span className="card-pf-aggregate-status-notification"><a href="#" className="add" data-toggle="tooltip" data-placement="top" title="Add Ipsum"><span className="pficon pficon-add-circle-o"></span></a></span>
          </p>
        </div>
      </div>

    </div>
    <div className="col-xs-12 col-sm-6 col-md-3">
      <div className="card-pf card-pf-accented card-pf-aggregate-status card-pf-aggregate-status-mini">
        <h2 className="card-pf-title">
          <a href="#">
            <span className="fa fa-paper-plane"></span>
            <span className="card-pf-aggregate-status-count">20</span> Amet
          </a>
        </h2>
        <div className="card-pf-body">
          <p className="card-pf-aggregate-status-notifications">
            <span className="card-pf-aggregate-status-notification"><a href="#"><span className="pficon pficon-error-circle-o"></span>4</a></span>
          </p>
        </div>
      </div>

    </div>
    <div className="col-xs-12 col-sm-6 col-md-3">
      <div className="card-pf card-pf-accented card-pf-aggregate-status card-pf-aggregate-status-mini">
        <h2 className="card-pf-title">
          <a href="#">
            <span className="pficon pficon-cluster"></span>
            <span className="card-pf-aggregate-status-count">9</span> Adipiscing
          </a>
        </h2>
        <div className="card-pf-body">
          <p className="card-pf-aggregate-status-notifications">
            <span className="card-pf-aggregate-status-notification"><span className="pficon pficon-ok"></span></span>
          </p>
        </div>
      </div>

    </div>
    <div className="col-xs-12 col-sm-6 col-md-3">
      <div className="card-pf card-pf-accented card-pf-aggregate-status card-pf-aggregate-status-mini">
        <h2 className="card-pf-title">
          <a href="#">
            <span className="pficon pficon-image"></span>
            <span className="card-pf-aggregate-status-count">12</span> Lorem
          </a>
        </h2>
        <div className="card-pf-body">
          <p className="card-pf-aggregate-status-notifications">
            <a href="#"><span className="card-pf-aggregate-status-notification"><span className="pficon pficon-error-circle-o"></span>1</span></a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="row row-cards-pf">
    <div className="col-xs-12 col-sm-6">
      <div className="card-pf">
        <div className="card-pf-heading">
          <h2 className="card-pf-title">
            Top Utilized Clusters
          </h2>
        </div>
        <div className="card-pf-body">
          <div className="progress-description">
            RHOS6-Controller
          </div>
          <div className="progress progress-label-top-right">
            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: '95%'}}  data-toggle="tooltip" title="95% Used">
              <span><strong>190.0 of 200.0 GB</strong> Used</span>
            </div>
            <div className="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100" style={{width: '5%'}} data-toggle="tooltip" title="5% Available">
              <span className="sr-only">5% Available</span>
            </div>
          </div>
          <div className="progress-description">
            CFMEQE-Cluster
          </div>
          <div className="progress progress-label-top-right">
            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}}  data-toggle="tooltip" title="50% Used">
              <span><strong>100.0 of 200.0 GB</strong> Used</span>
            </div>
            <div className="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}} data-toggle="tooltip" title="50% Available">
              <span className="sr-only">50% Available</span>
            </div>
          </div>
          <div className="progress-description">
            RHOS-Undercloud
          </div>
          <div className="progress progress-label-top-right">
            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}  data-toggle="tooltip" title="70% Used">
              <span><strong>140.0 of 200.0 GB</strong> Used</span>
            </div>
            <div className="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{width: '30%'}} data-toggle="tooltip" title="30% Available">
              <span className="sr-only">30% Available</span>
            </div>
          </div>
          <div className="progress-description">
            RHEL6-Controller
          </div>
          <div className="progress progress-label-top-right">
            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="76.5" aria-valuemin="0" aria-valuemax="100" style={{width: '76.5%'}}  data-toggle="tooltip" title="76.5% Used">
              <span><strong>153.0 of 200.0 GB</strong> Used</span>
            </div>
            <div className="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="23.5" aria-valuemin="0" aria-valuemax="100" style={{width: '23.5%'}} data-toggle="tooltip" title="23.5% Available">
              <span className="sr-only">23.5% Available</span>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div className="col-xs-12 col-sm-6">
      <div className="card-pf">
        <div className="card-pf-heading">
          <h2 className="card-pf-title">
            Quotas
          </h2>
        </div>
        <div className="card-pf-body">
          <div className="progress-container progress-description-left progress-label-right">
            <div className="progress-description">
              CPU
            </div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: '25%'}} data-toggle="tooltip" title="25% Used">
                <span><strong>115 of 460</strong> MHz</span>
              </div>
              <div className="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '75%'}} data-toggle="tooltip" title="75% Available">
                <span className="sr-only">75% Available</span>
              </div>
            </div>
          </div>
          <div className="progress-container progress-description-left progress-label-right">
            <div className="progress-description">
              Memory
            </div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}} data-toggle="tooltip" title="8 GB Used">
                <span><strong>8 of 16</strong> GB</span>
              </div>
              <div className="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}} data-toggle="tooltip" title="8 GB Available">
                <span className="sr-only">50% Available</span>
              </div>
            </div>
          </div>
          <div className="progress-container progress-description-left progress-label-right">
            <div className="progress-description">
              Pods
            </div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="62.5" aria-valuemin="0" aria-valuemax="100" style={{width: '62.5%'}} data-toggle="tooltip" title="62.5% Used">
                <span><strong>5 of 8</strong> Total</span>
              </div>
              <div className="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="37.5" aria-valuemin="0" aria-valuemax="100" style={{width: '37.5%'}} data-toggle="tooltip" title="37.5% Available">
                <span className="sr-only">37.5% Available</span>
              </div>
            </div>
          </div>
          <div className="progress-container progress-description-left progress-label-right">
            <div className="progress-description">
              Services
            </div>
            <div className="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}} data-toggle="tooltip" title="100% Used">
                <span><strong>2 of 2</strong> Total</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div className="row row-cards-pf">
    <div className="col-md-12">
      <div className="card-pf card-pf-utilization">
        <div className="card-pf-heading">
          <p className="card-pf-heading-details">Last 30 days</p>
          <h2 className="card-pf-title">
            Utilization
          </h2>
        </div>
        <div className="card-pf-body">
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h3 className="card-pf-subtitle">CPU</h3>
              <p className="card-pf-utilization-details">
                <span className="card-pf-utilization-card-details-count">50</span>
                <span className="card-pf-utilization-card-details-description">
              <span className="card-pf-utilization-card-details-line-1">Available</span>
              <span className="card-pf-utilization-card-details-line-2">of 1000 MHz</span>
            </span>
              </p>
              <div id="chart-pf-donut-1"></div>
              <div className="chart-pf-sparkline" id="chart-pf-sparkline-9"></div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h3 className="card-pf-subtitle">Memory</h3>
              <p className="card-pf-utilization-details">
                <span className="card-pf-utilization-card-details-count">256</span>
                <span className="card-pf-utilization-card-details-description">
              <span className="card-pf-utilization-card-details-line-1">Available</span>
              <span className="card-pf-utilization-card-details-line-2">of 432 GB</span>
            </span>
              </p>
              <div id="chart-pf-donut-2"></div>
              <div className="chart-pf-sparkline" id="chart-pf-sparkline-10"></div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h3 className="card-pf-subtitle">Network</h3>
              <p className="card-pf-utilization-details">
                <span className="card-pf-utilization-card-details-count">200</span>
                <span className="card-pf-utilization-card-details-description">
              <span className="card-pf-utilization-card-details-line-1">Available</span>
              <span className="card-pf-utilization-card-details-line-2">of 1300 Gbps</span>
            </span>
              </p>
              <div id="chart-pf-donut-3"></div>
              <div className="chart-pf-sparkline" id="chart-pf-sparkline-11"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div className="row row-cards-pf">
    <div className="col-xs-12 col-sm-4 col-md-4">
      <div className="card-pf card-pf-utilization">
        <h2 className="card-pf-title">
          Network
        </h2>
        <div className="card-pf-body">
          <p className="card-pf-utilization-details">
            <span className="card-pf-utilization-card-details-count">200</span>
            <span className="card-pf-utilization-card-details-description">
          <span className="card-pf-utilization-card-details-line-1">Available</span>
          <span className="card-pf-utilization-card-details-line-2">of 1300 Gbps</span>
        </span>
          </p>
          <div id="chart-pf-donut-4"></div>
          <div className="chart-pf-sparkline" id="chart-pf-sparkline-12"></div>
        </div>
      </div>

    </div>
  </div>
  <div className="row row-cards-pf">
    <div className="col-xs-12 col-sm-6 col-md-5">
      <div className="card-pf">
        <div className="card-pf-heading">
          <div className="dropdown card-pf-time-frame-filter">
            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
              Last 30 Days <span className="caret"></span>
            </button>
            <ul className="dropdown-menu dropdown-menu-right" role="menu">
              <li className="selected"><a href="#">Last 30 Days</a></li>
              <li><a href="#">Last 60 Days</a></li>
              <li><a href="#">Last 90 Days</a></li>
            </ul>
          </div>
          <h2 className="card-pf-title">
            Card Title
          </h2>
        </div>
        <div className="card-pf-body">
          <p>[card contents]</p>
        </div>
      </div>

    </div>
    <div className="col-xs-12 col-sm-6 col-md-7">
      <div className="card-pf">
        <h2 className="card-pf-title">
          Card Title
        </h2>
        <div className="card-pf-body">
          <p>[card contents]</p>
        </div>
        <div className="card-pf-footer">
          <div className="dropdown card-pf-time-frame-filter">
            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
              Last 30 Days <span className="caret"></span>
            </button>
            <ul className="dropdown-menu dropdown-menu-right" role="menu">
              <li className="selected"><a href="#">Last 30 Days</a></li>
              <li><a href="#">Last 60 Days</a></li>
              <li><a href="#">Last 90 Days</a></li>
            </ul>
          </div>
          <p>
            <a href="#" className="card-pf-link-with-icon">
              <span className="pficon pficon-add-circle-o"></span>Add New Cluster
            </a>
          </p>
        </div>
      </div>

    </div>
  </div>
  <div className="row row-cards-pf">
    <div className="col-xs-12 col-sm-5 col-md-5">
      <div className="card-pf">
        <h2 className="card-pf-title">
          Card Title
        </h2>
        <div className="card-pf-body">
          <p>[card contents]</p>
        </div>
        <div className="card-pf-footer">
          <div className="dropdown card-pf-time-frame-filter">
            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
              Last 30 Days <span className="caret"></span>
            </button>
            <ul className="dropdown-menu dropdown-menu-right" role="menu">
              <li className="selected"><a href="#">Last 30 Days</a></li>
              <li><a href="#">Last 60 Days</a></li>
              <li><a href="#">Last 90 Days</a></li>
            </ul>
          </div>
          <p>
            <a href="#" className="card-pf-link-with-icon">
              <span className="pficon pficon-flag"></span>View CPU Events
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="col-xs-12 col-sm-7 col-md-7">
      <div className="card-pf">
        <h2 className="card-pf-title">
          Card Title
        </h2>
        <div className="card-pf-body">
          <p>[card contents]</p>
        </div>
      </div>
    </div>
  </div>
  <div className="row row-cards-pf">
    <div className="col-xs-6 col-sm-8 col-md-8">
      <div className="card-pf">
        <div className="card-pf-body">
          <p>[card contents]</p>
        </div>
        <div className="card-pf-footer">
          <p><a href="#">Footer link</a></p>
        </div>
      </div>
    </div>
    <div className="col-xs-6 col-sm-4 col-md-4">
      <div className="card-pf">
        <div className="card-pf-body">
          <p>[card contents]</p>
        </div>
        <div className="card-pf-footer">
          <p><a href="#">Footer link</a></p>
        </div>
      </div>
    </div>
  </div>
  <div className="row row-cards-pf">
    <div className="col-xs-6 col-sm-6 col-md-6">
      <div className="card-pf">
        <div className="card-pf-body">
          <p>[card contents]</p>
        </div>
      </div>
    </div>
    <div className="col-xs-6 col-sm-6 col-md-6">
      <div className="card-pf">
        <div className="card-pf-body">
          <p>[card contents]</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

    );
  }
}