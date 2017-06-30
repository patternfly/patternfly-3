(function (window) {
  'use strict';

  var patternfly = {
    version: "3.25.1",
  };

  // definition of breakpoint sizes for tablet and desktop modes
  patternfly.pfBreakpoints = {
    'tablet': 768,
    'desktop': 1200
  };

  window.patternfly = patternfly;

})(window);

(function (window) {
  'use strict';

  // Util: PatternFly Palette colors
  patternfly.pfPaletteColors = {
    black:         '#030303',
    black100:      '#fafafa',
    black200:      '#ededed',
    black300:      '#d1d1d1',
    black400:      '#bbbbbb',
    black500:      '#8b8d8f',
    black600:      '#72767b',
    black700:      '#4d5258',
    black800:      '#393f44',
    black900:      '#292e34',
    blue:          '#0088ce',
    blue100:       '#bee1f4',
    blue200:       '#7dc3e8',
    blue300:       '#39a5dc',
    blue400:       '#0088ce',
    blue500:       '#00659c',
    blue600:       '#004368',
    blue700:       '#002235',
    gold:          '#f0ab00',
    gold100:       '#fbeabc',
    gold200:       '#f9d67a',
    gold300:       '#f5c12e',
    gold400:       '#f0ab00',
    gold500:       '#b58100',
    gold600:       '#795600',
    gold700:       '#3d2c00',
    orange:        '#ec7a08',
    orange100:     '#fbdebf',
    orange200:     '#f7bd7f',
    orange300:     '#f39d3c',
    orange400:     '#ec7a08',
    orange500:     '#b35c00',
    orange600:     '#773d00',
    orange700:     '#3b1f00',
    lightBlue:     '#00b9e4',
    lightBlue100:  '#beedf9',
    lightBlue200:  '#7cdbf3',
    lightBlue300:  '#35caed',
    lightBlue400:  '#00b9e4',
    lightBlue500:  '#008bad',
    lightBlue600:  '#005c73',
    lightBlue700:  '#002d39',
    green:         '#3f9c35',
    green100:      '#cfe7cd',
    green200:      '#9ecf99',
    green300:      '#6ec664',
    green400:      '#3f9c35',
    green500:      '#2d7623',
    green600:      '#1e4f18',
    green700:      '#0f280d',
    lightGreen:    '#92d400',
    lightGreen100: '#e4f5bc',
    lightGreen200: '#c8eb79',
    lightGreen300: '#ace12e',
    lightGreen400: '#92d400',
    lightGreen500: '#6ca100',
    lightGreen600: '#486b00',
    lightGreen700: '#253600',
    cyan:          '#007a87',
    cyan100:       '#bedee1',
    cyan200:       '#7dbdc3',
    cyan300:       '#3a9ca6',
    cyan400:       '#007a87',
    cyan500:       '#005c66',
    cyan600:       '#003d44',
    cyan700:       '#001f22',
    purple:        '#703fec',
    purple100:     '#c7bfff',
    purple200:     '#a18fff',
    purple300:     '#8461f7',
    purple400:     '#703fec',
    purple500:     '#582fc0',
    purple600:     '#40199a',
    purple700:     '#1f0066',
    red:           '#cc0000',
    red100:        '#cc0000',
    red200:        '#a30000',
    red300:        '#8b0000',
    red400:        '#470000',
    red500:        '#2c0000'
  };
})(window);


(function (window) {
  'use strict';

  // Util: PatternFly C3 Chart Defaults
  patternfly.pfSetDonutChartTitle = function (selector, primary, secondary) {
    var donutChartRightTitle = window.d3.select(selector).select('text.c3-chart-arcs-title');
    donutChartRightTitle.text("");
    donutChartRightTitle.insert('tspan').text(primary).classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
    donutChartRightTitle.insert('tspan').text(secondary).classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);
  };

  patternfly.pfDonutTooltipContents = function (d, defaultTitleFormat, defaultValueFormat, color) {
    return '<table class="c3-tooltip">' +
      '  <tr>' +
      '    <td><span style="background-color:' + color(d[0].id) + '"></span>' + '<strong>' + d[0].value + '</strong> ' + d[0].name + '</td>' +
      '    <td>' + (Math.round(d[0].ratio * 1000) / 10) + '%</td>' +
      '  </tr>' +
      '</table>';
  };

  patternfly.pfGetUtilizationDonutTooltipContentsFn = function (units) {
    return function (d) {
      return '<span class="donut-tooltip-pf" style="white-space: nowrap;">' +
        (Math.round(d[0].ratio * 1000) / 10) + '%' + ' ' + units + ' ' + d[0].name +
        '</span>';
    };
  };

  patternfly.pfGetBarChartTooltipContentsFn = function (categories) {
    return function (d) {
      var name = categories ? categories[d[0].index] : d[0].index;
      return '<table class="c3-tooltip">' +
        '  <tr>' +
        '    <td><strong>' + name + ':</td>' +
        '    <td>' + d[0].value + '</td>' +
        '  </tr>' +
        '</table>';
    };
  };

  patternfly.pfSingleLineChartTooltipContentsFn = function (categories) {
    return function (d) {
      var name = categories ? categories[d[0].index] : d[0].index;
      return '<table class="c3-tooltip">' +
        '  <tr>' +
        '    <td><strong>' + name + ':</td>' +
        '    <td>' + d[0].value + '</td>' +
        '  </tr>' +
        '</table>';
    };
  };

  patternfly.pfPieTooltipContents = function (d, defaultTitleFormat, defaultValueFormat, color) {
    return patternfly.pfDonutTooltipContents(d, defaultTitleFormat, defaultValueFormat, color);
  };

  patternfly.c3ChartDefaults = function () {
    var
      getDefaultColors = function () {
        return {
          pattern: [
            patternfly.pfPaletteColors.blue,
            patternfly.pfPaletteColors.blue300,
            patternfly.pfPaletteColors.green,
            patternfly.pfPaletteColors.orange,
            patternfly.pfPaletteColors.red
          ]
        };
      },
      getDefaultBarGrid = function () {
        return {
          y: {
            show: true
          }
        };
      },
      getDefaultBarTooltip = function (categories) {
        return {
          contents: patternfly.pfGetBarChartTooltipContentsFn(categories)
        };
      },
      getDefaultBarLegend = function () {
        return {
          show: false
        };
      },
      getDefaultBarConfig = function (categories) {
        return {
          color: this.getDefaultColors(),
          grid: this.getDefaultBarGrid(),
          tooltip: this.getDefaultBarTooltip(categories),
          legend: this.getDefaultBarLegend()
        };
      },
      getDefaultGroupedBarGrid = function () {
        return {
          y: {
            show: true
          }
        };
      },
      getDefaultGroupedBarLegend = function () {
        return {
          show: true,
          position: 'bottom'
        };
      },
      getDefaultGroupedBarConfig = function () {
        return {
          color: this.getDefaultColors(),
          grid: this.getDefaultGroupedBarGrid(),
          legend: this.getDefaultGroupedBarLegend()
        };
      },
      getDefaultStackedBarGrid = function () {
        return {
          y: {
            show: true
          }
        };
      },
      getDefaultStackedBarLegend = function () {
        return {
          show: true,
          position: 'bottom'
        };
      },
      getDefaultStackedBarConfig = function () {
        return {
          color: this.getDefaultColors(),
          grid: this.getDefaultStackedBarGrid(),
          legend: this.getDefaultStackedBarLegend()
        };
      },
      getDefaultDonut = function (title) {
        return {
          title: title,
          label: {
            show: false
          },
          width: 11
        };
      },
      getDefaultDonutSize = function () {
        return {
          height: 171 // produces a diameter of 150 and a centered chart when there is no legend
          // Don't set a width here, the default is to center horizontally in the parent container
        };
      },
      getDefaultDonutColors = function () {
        return {
          pattern: [
            patternfly.pfPaletteColors.blue,
            patternfly.pfPaletteColors.black300
          ]
        };
      },
      getDefaultDonutTooltip = function () {
        return {
          show: false
        };
      },
      getDefaultDonutLegend = function () {
        return {
          show: false
        };
      },
      getDefaultDonutConfig = function (title) {
        return {
          donut: this.getDefaultDonut(title),
          size: this.getDefaultDonutSize(),
          legend: this.getDefaultDonutLegend(),
          color: this.getDefaultDonutColors(),
          tooltip: this.getDefaultDonutTooltip()
        };
      },
      getDefaultPie = function () {
        return {
          expand: true,
          label: {
            show: false
          }
        };
      },
      getDefaultPieSize = function () {
        return {
          height: 171 // produces a diameter of 150 and a centered chart when there is no legend
          // Don't set a width here, default is to center horizontally in the parent container
        };
      },
      getDefaultPieColors = function () {
        return {
          pattern: [
            patternfly.pfPaletteColors.blue,
            patternfly.pfPaletteColors.black300
          ]
        };
      },
      getDefaultPieTooltip = function () {
        return {
          contents: patternfly.pfPieTooltipContents
        };
      },
      getDefaultPieLegend = function () {
        return {
          show: false
        };
      },
      getDefaultPieConfig = function () {
        return {
          pie: this.getDefaultPie(),
          size: this.getDefaultPieSize(),
          legend: this.getDefaultPieLegend(),
          color: this.getDefaultPieColors(),
          tooltip: this.getDefaultPieTooltip()
        };
      },
      getDefaultSparklineArea = function () {
        return {
          zerobased: true
        };
      },
      getDefaultSparklineSize = function () {
        return {
          height: 60
        };
      },
      getDefaultSparklineAxis = function () {
        return {
          x: {
            show: false
          },
          y: {
            show: false
          }
        };
      },
      getDefaultSparklineLegend = function () {
        return {
          show: false
        };
      },
      getDefaultSparklinePoint = function () {
        return {
          r: 1,
          focus: {
            expand: {
              r: 4
            }
          }
        };
      },
      getDefaultSparklineTooltip = function () {
        return {
          // because a sparkline should only contain a single data column,
          // the tooltip will only work for a single data column
          contents: function (d) {
            return '<span class="c3-tooltip-sparkline">' + d[0].value + ' ' + d[0].name + '</span>';
          }
        };
      },
      getDefaultSparklineConfig = function () {
        return {
          area: getDefaultSparklineArea(),
          size: getDefaultSparklineSize(),
          axis: getDefaultSparklineAxis(),
          color: getDefaultColors(),
          legend: getDefaultSparklineLegend(),
          point: getDefaultSparklinePoint(),
          tooltip: getDefaultSparklineTooltip()
        };
      },
      getDefaultLineAxis = function () {
        return {
          x: {
            show: true
          },
          y: {
            show: true
          }
        };
      },
      getDefaultLineGrid = function () {
        return {
          x: {
            show: false
          },
          y: {
            show: true
          }
        };
      },
      getDefaultLineLegend = function () {
        return {
          show: true
        };
      },
      getDefaultLinePoint = function () {
        return {
          r: 3,
          focus: {
            expand: {
              r: 5
            }
          }
        };
      },
      getDefaultLineConfig = function () {
        return {
          axis: getDefaultLineAxis(),
          grid: getDefaultLineGrid(),
          color: getDefaultColors(),
          legend: getDefaultLineLegend(),
          point: getDefaultLinePoint()
        };
      },
      getDefaultSingleLineTooltip = function () {
        return {
          contents: patternfly.pfGetBarChartTooltipContentsFn()
        };
      },
      getDefaultSingleLineLegend = function () {
        return {
          show: false
        };
      },
      getDefaultSingleLineConfig = function () {
        return {
          axis: getDefaultLineAxis(),
          grid: getDefaultLineGrid(),
          color: getDefaultColors(),
          legend: getDefaultSingleLineLegend(),
          point: getDefaultLinePoint(),
          tooltip: getDefaultSingleLineTooltip()
        };
      },
      getDefaultAreaAxis = function () {
        return getDefaultLineAxis();
      },
      getDefaultAreaGrid = function () {
        return getDefaultLineGrid();
      },
      getDefaultAreaLegend = function () {
        return getDefaultLineLegend();
      },
      getDefaultAreaPoint = function () {
        return getDefaultLinePoint();
      },
      getDefaultAreaConfig = function () {
        return {
          axis: getDefaultAreaAxis(),
          grid: getDefaultAreaGrid(),
          color: getDefaultColors(),
          legend: getDefaultAreaLegend(),
          point: getDefaultAreaPoint()
        };
      },
      getDefaultSingleAreaTooltip = function () {
        return {
          contents: patternfly.pfGetBarChartTooltipContentsFn()
        };
      },
      getDefaultSingleAreaLegend = function () {
        return getDefaultSingleLineLegend();
      },
      getDefaultSingleAreaConfig = function () {
        return {
          axis: getDefaultAreaAxis(),
          grid: getDefaultAreaGrid(),
          color: getDefaultColors(),
          legend: getDefaultSingleAreaLegend(),
          point: getDefaultAreaPoint(),
          tooltip: getDefaultSingleAreaTooltip()
        };
      };
    return {
      getDefaultColors: getDefaultColors,
      getDefaultBarGrid: getDefaultBarGrid,
      getDefaultBarTooltip: getDefaultBarTooltip,
      getDefaultBarLegend: getDefaultBarLegend,
      getDefaultBarConfig: getDefaultBarConfig,
      getDefaultGroupedBarGrid: getDefaultGroupedBarGrid,
      getDefaultGroupedBarLegend: getDefaultGroupedBarLegend,
      getDefaultGroupedBarConfig: getDefaultGroupedBarConfig,
      getDefaultStackedBarGrid: getDefaultStackedBarGrid,
      getDefaultStackedBarLegend: getDefaultStackedBarLegend,
      getDefaultStackedBarConfig: getDefaultStackedBarConfig,
      getDefaultDonut: getDefaultDonut,
      getDefaultDonutSize: getDefaultDonutSize,
      getDefaultDonutColors: getDefaultDonutColors,
      getDefaultDonutTooltip: getDefaultDonutTooltip,
      getDefaultDonutLegend: getDefaultDonutLegend,
      getDefaultDonutConfig: getDefaultDonutConfig,
      getDefaultPie: getDefaultPie,
      getDefaultPieSize: getDefaultPieSize,
      getDefaultPieColors: getDefaultPieColors,
      getDefaultPieTooltip: getDefaultPieTooltip,
      getDefaultPieLegend: getDefaultPieLegend,
      getDefaultPieConfig: getDefaultPieConfig,
      getDefaultSparklineArea: getDefaultSparklineArea,
      getDefaultSparklineSize: getDefaultSparklineSize,
      getDefaultSparklineAxis: getDefaultSparklineAxis,
      getDefaultSparklineLegend: getDefaultSparklineLegend,
      getDefaultSparklinePoint: getDefaultSparklinePoint,
      getDefaultSparklineTooltip: getDefaultSparklineTooltip,
      getDefaultSparklineConfig: getDefaultSparklineConfig,
      getDefaultLineAxis: getDefaultLineAxis,
      getDefaultLineGrid: getDefaultLineGrid,
      getDefaultLineLegend: getDefaultLineLegend,
      getDefaultLinePoint: getDefaultLinePoint,
      getDefaultLineConfig: getDefaultLineConfig,
      getDefaultSingleLineTooltip: getDefaultSingleLineTooltip,
      getDefaultSingleLineConfig: getDefaultSingleLineConfig,
      getDefaultAreaAxis: getDefaultAreaAxis,
      getDefaultAreaGrid: getDefaultAreaGrid,
      getDefaultAreaLegend: getDefaultAreaLegend,
      getDefaultAreaPoint: getDefaultAreaPoint,
      getDefaultAreaConfig: getDefaultAreaConfig,
      getDefaultSingleAreaTooltip: getDefaultSingleAreaTooltip,
      getDefaultSingleAreaConfig: getDefaultSingleAreaConfig
    };
  };
})(window);
