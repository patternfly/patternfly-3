/// <reference path="../typings/bootstrap/index.d.ts" />
/// <reference path="../typings/patternfly/patternfly.d.ts" />

//todo:  possibly refactor further
//todo: simon will most likely need more configuration on the axes.
//todo: extract colours out?

var c3ChartDefaults = $().c3ChartDefaults();
//all chart class should implement the ChartBase so that the api calls are available and to keepo code dry.
class ChartBase {
	
	config: PfBaseGraphConfig;
	chartType: string;
	chartSelector: string;
	categories?: string[];
	columnsData: any[];
	clickFunction?: ()=>{};
	chart: any;
	constructor(chartType: string,
		chartSelector: string,
		columnsData: any[],
		categories?: string[],
		clickFunction?: () => {}
	) {
		this.chartType = chartType;
		this.chartSelector = chartSelector;
		this.categories = categories;
		this.columnsData = columnsData;
		this.clickFunction = clickFunction;
	}
	getConfig() {
		var func:(d)=>{} = this.clickFunction;
		this.config.bindto = this.chartSelector;
		this.config.data = {
			type: this.chartType,
			columns: this.columnsData,
			onclick(d, element) {
				func(d);
			}
		}
	}

	setAxisX() {
		this.config.axis = {
			x: {
				categories: this.categories,
				type: 'category'
			}
		};
	}
	setColourPalette(colorsArray?) {
		//use default colour scheme if none provided
		if (colorsArray == null) {
			this.config.color = {
				pattern: [
					patternfly.pfPaletteColors.blue,
					patternfly.pfPaletteColors.purple,
					patternfly.pfPaletteColors.green,
					patternfly.pfPaletteColors.orange,
					patternfly.pfPaletteColors.red
				]
			};
		} else {
			this.config.color = {
				pattern: colorsArray
			};
		}
	}
	hidePoint() {
		this.config.point= {
			show: false
		}
	}
	hideLegend() {
		this.config.legend = {
			show: false
		}
	}
	setLegend(position:string) {
		this.config.legend = {
			show: true,
			position: position
		}
	}

	getChart() {
		this.getConfig();
		this.chart = c3.generate(this.config);
		return this.chart;
	}

}
//RoundBase is for use with pie and donut charts
class RoundBase extends ChartBase {
	title?: string;
	columns: [(string | number)[]];
	groups: [(string | string)[]];
	width: number;
	height: number;
	constructor(type: string, chartSelector: string,
		columns: [(string | number)[]],
		groups: [(string | string)[]],
		width: number,
		height: number,
		title?: string) {
		super(type, chartSelector, columns);
		this.title = title != null ? title : "";
		this.config = c3ChartDefaults.getDefaultDonutConfig(this.title);
		this.groups = groups;
		this.width = width;
		this.height = height;

	}

	getConfig() {
		super.getConfig();
		if (this.groups != null)
		{ this.config.data.groups = this.groups; }
		this.config.size = {
			width: this.width,
			height: this.height
		};
	}

	setTooltip(units?: string) {
		this.config.tooltip = {
			show: true
		};
	}
	setTitle(primaryText: string, secondaryText: string) {
		$().pfSetDonutChartTitle(this.chartSelector, primaryText, secondaryText);
	}

}

module AreaCharts {

	export class SingleAreaChart extends ChartBase {

		constructor(chartSelector: string, columnsData: any[]) {
			super('area-spline', chartSelector, columnsData);

			this.config = c3ChartDefaults.getDefaultSingleAreaConfig();
		}
		getConfig() {
			super.getConfig();
		}
	}

	
	export class AreaChart extends ChartBase {
		colours: { [key: string]: string | d3.Rgb };
		types: {[key: string]: string};
		constructor(chartSelector: string, columnsData: any[], types: { [key: string]: string},colours: { [key: string]: string | d3.Rgb }) {
			super('area-spline', chartSelector, columnsData);

			this.config = c3ChartDefaults.getDefaultAreaConfig();
			this.colours = colours;
		}
		getConfig() {
			super.getConfig();
			this.config.data.colors = this.colours;
			this.config.data.types = this.types;
		}
	}
}

module BarCharts {

	export class BarChart extends ChartBase {

		rotated: boolean;

		constructor(chartSelector: string, categories: string[], columnsData: any[], clickFunction?: () => {}, horizantalBar?: boolean) {
			super('bar', chartSelector, columnsData, categories, clickFunction);
			this.rotated = !(horizantalBar==null);
			this.config = c3ChartDefaults.getDefaultBarConfig(this.categories);
		}

		getConfig() {
			super.getConfig();
			this.config.axis = {
				x: {
					categories: this.categories,
					type: 'category'
				},
				rotated: this.rotated
		};
			
		};
	}


	export class GroupedBarCharts extends ChartBase {

		colorsArray?: pfPaletteColors[];
		rotated: boolean;

		constructor(chartSelector: string,
			groupedCategories: string[],
			columnsData: any[],
			clickFunction?: () => {},
			colorsArray?: pfPaletteColors[],
			horizantalBar?: boolean) {
			super('bar', chartSelector, columnsData, groupedCategories, clickFunction);
			this.config = c3ChartDefaults.getDefaultGroupedBarConfig();
			this.colorsArray = colorsArray;
			this.rotated = !(horizantalBar == null);
		}

		getConfig() {
			super.getConfig();
			super.setColourPalette(this.colorsArray);
			super.setAxisX();
			this.config.axis.rotated = this.rotated;
		}
	}


	export class StackedBarCharts extends ChartBase {

		stackedData: string[][];
		colorsArray?: pfPaletteColors[];
		rotated: boolean;
		constructor(chartSelector: string,
			columnsData: any[],
			stackedData: string[][],
			colorsArray?: pfPaletteColors[],
			horizantalBar?: boolean) {
			super('bar', chartSelector, columnsData, null, null);
			this.config = c3ChartDefaults.getDefaultGroupedBarConfig();
			this.colorsArray = colorsArray;
			this.stackedData = stackedData;
			this.rotated = !(horizantalBar == null);
		}

		getConfig() {
			super.getConfig();
			this.config.data.groups = this.stackedData;
			this.config.axis = {
				rotated: this.rotated
			};
		}
	}
}

module DonutCharts {

	export class UtilizationDonutChart extends RoundBase {

		constructor(chartSelector: string,
			columns: [(string | number)[]],
			groups: [(string | string)[]],
			width: number,
			height: number,
			title?: string) {
			super('donut', chartSelector, columns, groups, width, height, title);
		}
		setTooltip(units: string) {
			super.setTooltip();
			this.config.tooltip = {
				contents: $().pfGetUtilizationDonutTooltipContentsFn(units)
			};
		}

	}

	export class DonutChart extends RoundBase {
		colours: { [key: string]: string | d3.Rgb };


		constructor(chartSelector: string,
			colours: { [key: string]: string | d3.Rgb },
			columnsData: [(string | number)[]],
			width: number,
			height: number,
			title?: string) {
			super('donut', chartSelector, columnsData, null, width, height, title);
			this.colours = colours;
			this.config = c3ChartDefaults.getDefaultDonutConfig(title);
		}
		getConfig() {
			super.getConfig();
			this.config.data.colors = this.colours;
			//data settings
			//onclick(d, i) { console.log("onclick", d, i); },
			//onmouseover(d, i) { console.log("onmouseover", d, i); },
			//onmouseout(d, i) { console.log("onmouseout", d, i); }

		}

		setTooltip() {
			super.setTooltip();
			this.config.tooltip.contents = $().pfDonutTooltipContents;

		}
	}
}

module LineCharts {
	export class LineChart extends ChartBase {

		constructor(chartSelector: string, columnsData: any[]) {
			super('line', chartSelector, columnsData);
			this.config = c3ChartDefaults.getDefaultLineConfig();
		}

	}
	export class SingleLineChart extends ChartBase {

		constructor(chartSelector: string, columnsData: any[]) {
			super('line', chartSelector, null, columnsData);
			this.config = c3ChartDefaults.getDefaultLineConfig();

		}
	}
}

module PieCharts {
	export class PieChart extends RoundBase {

		colours: { [key: string]: string | d3.Rgb };

		constructor(chartSelector: string,
			colours: { [key: string]: string | d3.Rgb },
			columnsData: [(string | number)[]],
			width: number,
			height: number,
			title?: string) {
			super('pie', chartSelector, columnsData, null, width, height, title);
			this.colours = colours;
			this.config = c3ChartDefaults.getDefaultPieConfig();
		}
		getConfig() {
			super.getConfig();
			this.config.data.colors = this.colours;
			//this.config.data = {
			//		onclick(d, i) { console.log("onclick", d, i); },
			//		onmouseover(d, i) { console.log("onmouseover", d, i); },
			//		onmouseout(d, i) { console.log("onmouseout", d, i); }
			//	};
		}
	}
}

module SparkLineCharts {
	export class SparkLine extends ChartBase {
		constructor(chartSelector: string, columnsData: [(string | number)[]]) {
			super('area', chartSelector, columnsData);
			this.config = c3ChartDefaults.getDefaultSparklineConfig();
		}
	}
}

module GaugeCharts {
	export class Gauge extends ChartBase {
		height: number;
		constructor(chartSelector: string, columnsData: [(string | number)[]], height:number) {
			super('gauge', chartSelector, columnsData);
			this.config = c3ChartDefaults.getDefaultSparklineConfig();
			this.height = height;
		}
		getConfig() {
			super.getConfig();
			super.setColourPalette();//set default colours
			this.config.data.columns = this.columnsData;
			//possibly extract and set as a constant
			this.config.color.threshold = {
				values: [30, 60, 90, 100]
			}
			this.config.size = {
				height: this.height
			};
		}
		
	}
}