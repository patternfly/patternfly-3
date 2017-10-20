import React from 'react';
import Brand from './img/brand.svg';

export default class HorizontalNavigation extends React.Component {
  componentDidMount() {
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
        <a className="nav-item-iconic" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          <span title="Help" className="fa pficon-help"></span>
          <span className="caret"></span>
        </a>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
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
        <a href="#">First Link</a>
      </li>
      <li className="active">
        <a href="#">Another Link</a>
      </li>
      <li>
        <a href="#">And Another</a>
      </li>
      <li>
        <a href="#">As a General Rule</a>
      </li>
      <li>
        <a href="#">Five to Seven Links</a>
      </li>
      <li>
        <a href="#">Is Good</a>
      </li>
    </ul>
  </div>
</nav>
<div className="container-fluid container-cards-pf">
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
            <div className="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}} data-toggle="tooltip" title="5% Available">
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
              <div className="chart-pf-sparkline" id="chart-pf-sparkline-1"></div>
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
              <div className="chart-pf-sparkline" id="chart-pf-sparkline-2"></div>
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
              <div className="chart-pf-sparkline" id="chart-pf-sparkline-3"></div>
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
          <div className="chart-pf-sparkline" id="chart-pf-sparkline-4"></div>
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
};