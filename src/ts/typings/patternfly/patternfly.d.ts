/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../c3/index.d.ts" />
// Type definitions for Patternfly "3.23.2"
// Definitions by: Layla Porter <https://github.com/Layla-P/>

interface pfPaletteColors extends d3.Rgb {
	black: string;
	black100: string;
	black200: string;
	black300: string;
	black400: string;
	black500: string;
	black600: string;
	black700: string;
	black800: string;
	black900: string;
	blue: string;
	blue100: string;
	blue200: string;
	blue300: string;
	blue400: string;
	blue500: string;
	blue600: string;
	blue700: string;
	gold: string;
	gold100: string;
	gold200: string;
	gold300: string;
	gold400: string;
	gold500: string;
	gold600: string;
	gold700: string;
	orange: string;
	orange100: string;
	orange200: string;
	orange300: string;
	orange400: string;
	orange500: string;
	orange600: string;
	orange700: string;
	lightBlue: string;
	lightBlue100: string;
	lightBlue200: string;
	lightBlue300: string;
	lightBlue400: string;
	lightBlue500: string;
	lightBlue600: string;
	lightBlue700: string;
	green: string;
	green100: string;
	green200: string;
	green300: string;
	green400: string;
	green500: string;
	green600: string;
	green700: string;
	lightGreen: string;
	lightGreen100: string;
	lightGreen200: string;
	lightGreen300: string;
	lightGreen400: string;
	lightGreen500: string;
	lightGreen600: string;
	lightGreen700: string;
	cyan: string;
	cyan100: string;
	cyan200: string;
	cyan300: string;
	cyan400: string;
	cyan500: string;
	cyan600: string;
	cyan700: string;
	purple: string;
	purple100: string;
	purple200: string;
	purple300: string;
	purple400: string;
	purple500: string;
	purple600: string;
	purple700: string;
	red: string;
	red100: string;
	red200: string;
	red300: string;
	red400: string;
	red500: string;
}

interface PfVisibility {
	show: boolean;
	position?: string;
}

interface PfGetDefaultColors {
	pattern: pfPaletteColors[]
}

interface PfXAxisConfiguration extends c3.XAxisConfiguration {
	categories: any;
	type: string;
}

interface PfYAxisConfiguration extends c3.YAxisConfiguration {
	categories?: any;
	type?: string;
}

interface PfBaseGraphConfig extends c3.ChartConfiguration {

}

interface PfNavigation {
	navElement: any;
	bodyContentElement: any;
	toggleNavBarButton: any;
	explicitCollapse: boolean;
	checkNavState: { width: number, navElement:PfBaseGraphConfig; bodyContentElement:PfBaseGraphConfig };
	collapseMenu:PfBaseGraphConfig;
	enableTransitions: any;
	expandMenu:PfBaseGraphConfig;
	bindMenuBehavior:PfBaseGraphConfig;
	setTooltips: any;
	init:PfBaseGraphConfig;
}

interface PfInitCollapseHeights {
	setCollapseHeights(): void;
}

interface PfCountRemainingChars {
	settings: any;
	charsRemainingFn(charsLength: number): { charsRemaining: number };
}

interface PfSetupVerticalNavigation {
	hideMenu(): void;
	showMenu(): void;
	isVisible(): boolean;
}

 interface Patternfly {
	pfSetDonutChartTitle(selector: any, primary: any, secondary: any): void;
	pfDonutTooltipContents(data: any, defaultTitleFormat: string, defaultValueFormat: string, color: any): string;
	pfGetUtilizationDonutTooltipContentsFn(units: any): (data: any, defaultTitleFormat: string, defaultValueFormat: string, color: any) => string;
	pfGetBarChartTooltipContentsFn(categories: any): string;
	pfSingleLineChartTooltipContentsFn(categories: any): string;
	pfPieTooltipContents(d: number, defaultTitleFormat: any, defaultValueFormat: any, color: any): string;
	pfPaletteColors: pfPaletteColors;
	c3ChartDefaults(): c3ChartDefaults;
	pfBreakpoints: { [name: string]: string | number };
}

interface JQuery{
	c3ChartDefaults(): c3ChartDefaults;
	sidebar(): { documentHeight: number, navbarpfHeight: number, colHeight: number };
	popovers(): JQuery;
	pfBreakpoints: { [name: string]: string | number };
	navigation(): PfNavigation;
	treegrid(options: any): { i: number, rows: any, _this: any };
	countRemainingChars(options: any): PfCountRemainingChars;
	initCollapseHeights(scrollSelector: string): void;
	setupVerticalNavigation(handleItemSelections: boolean): PfSetupVerticalNavigation;
	pfList: string | Element | JQuery;
	pfSetDonutChartTitle(selector: any, primary: any, secondary: any): void;
	pfDonutTooltipContents(data: any, defaultTitleFormat: string, defaultValueFormat: string, color: any): string;
	pfGetUtilizationDonutTooltipContentsFn(units: any): (data: any, defaultTitleFormat: string, defaultValueFormat: string, color: any) => string;
	pfGetBarChartTooltipContentsFn(categories: any): string;
	pfSingleLineChartTooltipContentsFn(categories: any): string;
	pfPieTooltipContents(d: number, defaultTitleFormat: any, defaultValueFormat: any, color: any): string;
}

interface c3ChartDefaults {
	getDefaultColors(): PfGetDefaultColors;
	getDefaultBarGrid(): c3.Grid;
	getDefaultBarTooltip(categories: any): c3.TooltipOptions;
	getDefaultBarLegend(): c3.LegendOptions;
	getDefaultBarConfig(categories: any):PfBaseGraphConfig;
	getDefaultGroupedBarGrid(): c3.Grid;
	getDefaultGroupedBarLegend(): c3.LegendOptions;
	getDefaultGroupedBarConfig():PfBaseGraphConfig;
	getDefaultStackedBarGrid(): c3.Grid;
	getDefaultStackedBarLegend(): c3.LegendOptions;
	getDefaultStackedBarConfig():PfBaseGraphConfig;
	getDefaultDonut(title: string): { title: string, label: PfVisibility, width: number };
	getDefaultDonutSize(): { height: number };
	getDefaultDonutColors(): { pattern: string[] };
	getDefaultDonutTooltip(): c3.TooltipOptions;
	getDefaultDonutLegend(): c3.LegendOptions;
	getDefaultDonutConfig(title: string):PfBaseGraphConfig;
	getDefaultPie: { expand: boolean, label: PfVisibility };
	getDefaultPieSize: { height: number };
	getDefaultPieColors(): { pattern: string[] };
	getDefaultPieTooltip(): c3.TooltipOptions;
	getDefaultPieLegend(): c3.LegendOptions;
	getDefaultPieConfig():PfBaseGraphConfig;
	getDefaultSparklineArea(): { zerobased: boolean };
	getDefaultSparklineSize(): { height: number };
	getDefaultSparklineAxis(): { x: PfVisibility, y: PfVisibility };
	getDefaultSparklineLegend(): c3.LegendOptions;
	getDefaultSparklinePoint(): { r: number, focus: { expand: { r: number } } };
	getDefaultSparklineTooltip(): { contents(d: number): string };
	getDefaultSparklineConfig():PfBaseGraphConfig;
	getDefaultLineAxis(): { x: PfVisibility, y: PfVisibility };
	getDefaultLineGrid(): c3.Grid;
	getDefaultLineLegend(): c3.LegendOptions;
	getDefaultLinePoint(): { r: number, focus: { expand: { r: number } } };
	getDefaultLineConfig():PfBaseGraphConfig;
	getDefaultSingleLineTooltip(): c3.TooltipOptions;
	getDefaultSingleLineLegend(): c3.LegendOptions;
	getDefaultSingleLineConfig():PfBaseGraphConfig;
	getDefaultAreaAxis(): { x: PfVisibility, y: PfVisibility };
	getDefaultAreaGrid(): c3.Grid;
	getDefaultAreaLegend(): c3.LegendOptions;
	getDefaultAreaPoint(): { r: number, focus: { expand: { r: number } } };
	getDefaultAreaConfig():PfBaseGraphConfig;
	getDefaultSingleAreaTooltip(): c3.TooltipOptions;
	getDefaultSingleAreaLegend(): c3.LegendOptions;
	getDefaultSingleAreaConfig():PfBaseGraphConfig;
}

declare var patternfly: Patternfly;

//export = patternfly;


