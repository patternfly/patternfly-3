import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import withReadme from 'storybook-readme/with-readme';

import Accordion from './Accordion';
import AccordionDoc from './Accordion.md';
import AggregateCard from './AggregateCard';
import AggregateCardDoc from './AggregateCard.md';
import ApplicationLauncher from './ApplicationLauncher/ApplicationLauncher';
import ApplicationLauncherDoc from './ApplicationLauncher/ApplicationLauncher.md';
import BootstrapCombobox from './BootstrapCombobox';
import BootstrapComboboxDoc from './BootstrapCombobox.md';
import BootstrapDatepicker from './BootstrapDatepicker';
import BootstrapDatepickerDoc from './BootstrapDatepicker.md';
import BootstrapSelect from './BootstrapSelect';
import BootstrapSelectDoc from './BootstrapSelect.md';
import BootstrapSwitch from './BootstrapSwitch';
import BootstrapSwitchDoc from './BootstrapSwitch.md';
import BootstrapTouchspin from './BootstrapTouchspin';
import BootstrapTouchspinDoc from './BootstrapTouchspin.md';
import BootstrapTreeView from './BootstrapTreeView';
import BootstrapTreeViewDoc from './BootstrapTreeView.md';
import CardView from './CardView';
import CardViewDoc from './CardView.md';
import CountRemainingCharacters from './CountRemainingCharacters';
import CountRemainingCharactersDoc from './CountRemainingCharacters.md';
import HorizontalNavigation from './HorizontalNavigation';
import HorizontalNavigationDoc from './HorizontalNavigation.md';
import BasicListWithExpansion from './BasicListWithExpansion';
import BasicListWithExpansionDoc from './BasicListWithExpansion.md';
import ListView from './ListView';
import ListViewDoc from './ListView.md';
import ListViewRows from './ListViewRows';
import ListViewRowsDoc from './ListViewRows.md';
import HorizontalNavigationWithND from './NotificationDrawer/HorizontalNavigation';
import HorizontalNavigationWithNDDoc from './NotificationDrawer/HorizontalNavigation.md';
import VerticalNavigationWithND from './NotificationDrawer/VerticalNavigation';
import VerticalNavigationWithNDDoc from './NotificationDrawer/VerticalNavigation.md';
import Popover from './Popover';
import PopoverDoc from './Popover.md';
import ProgressBarsWithTooltip from './ProgressBarsWithTooltip';
import ProgressBarsWithTooltipDoc from './ProgressBarsWithTooltip.md';
import Search from './Search';
import SearchDoc from './Search.md';
import TableView from './TableView';
import TableViewDoc from './TableView.md';
import Timepicker from './Timepicker';
import TimepickerDoc from './Timepicker.md';
import Toolbar from './Toolbar';
import ToolbarDoc from './Toolbar.md';
import Tooltip from './Tooltip';
import TooltipDoc from './Tooltip.md';
import TreeGridTable from './TreeGridTable';
import TreeGridTableDoc from './TreeGridTable.md';
import UtilizationBarChart from './UtilizationBarChart';
import UtilizationBarChartDoc from './UtilizationBarChart.md';
import VerticalNavigation from './VerticalNavigation';
import VerticalNavigationDoc from './VerticalNavigation.md';
import Wizard from './Wizard';
import WizardDoc from './Wizard.md';

import jquery from 'jquery';
global.$ = jquery;
global.jQuery = jquery;
require('bootstrap');
require(__dirname + '/../../../../dist/js/patternfly.min.js');
require('jquery-match-height');
require(__dirname + '/../../../../node_modules/patternfly-bootstrap-combobox/js/bootstrap-combobox.js');
require('bootstrap-datepicker');
require('bootstrap-select');
require('bootstrap-switch');
require('bootstrap-touchspin');
require('patternfly-bootstrap-treeview');
require('datatables.net');
require('datatables.net-select');
require('eonasdan-bootstrap-datetimepicker');

import '../../../../dist/css/patternfly.min.css';
import '../../../../dist/css/patternfly-additions.min.css';
import '../../../../dist/css/patternfly-jquery.min.css';

storiesOf('Application Framework', module)
  .add('Application Launcher', withReadme(ApplicationLauncherDoc, () => (
    <ApplicationLauncher/>
  )));

storiesOf('Cards', module)
  .add('Aggregate Status Card', withReadme(AggregateCardDoc, () => (
    <div className="doc-example">
      <AggregateCard/>
    </div>
  )));

storiesOf('Communication/Notification Drawer', module)
  .add('Horizontal Navigation', withReadme(HorizontalNavigationWithNDDoc, () => (
    <div className="doc-example">
      <HorizontalNavigationWithND/>
    </div>
  )))
  .add('Vertical Navigation', withReadme(VerticalNavigationWithNDDoc, () => (
    <div className="doc-example">
      <VerticalNavigationWithND/>
    </div>
  )));

storiesOf('Communication/Wizard', module)
  .add('default', withReadme(WizardDoc, () => (
    <div className="doc-example">
      <button className="btn btn-default wizard-pf-open wizard-pf-complete" data-target="#complete">Launch wizard</button>
      <Wizard/>
    </div>
  )));

storiesOf('Content Views/Card View', module)
  .add('default', withReadme(CardViewDoc, () => (
    <div className="doc-example">
      <CardView/>
    </div>
  )));

storiesOf('Content Views/List View', module)
  .add('Standard List View', withReadme(ListViewDoc, () => (
    <div className="doc-example">
      <ListView/>
    </div>
  )))
  .add('List View Rows', withReadme(ListViewRowsDoc, () => (
    <div className="doc-example">
      <ListViewRows/>
    </div>
  )))
  .add('Basic List With Expansion', withReadme(BasicListWithExpansionDoc, () => (
    <div className="doc-example">
      <BasicListWithExpansion/>
    </div>
  )));

storiesOf('Content Views/Table View', module)
  .add('default', withReadme(TableViewDoc, () => (
    <div className="doc-example">
      <TableView/>
    </div>
  )));

storiesOf('Data Visualization', module)
  .add('Utilization Bar Chart', withReadme(UtilizationBarChartDoc, () => (
    <div className="doc-example">
      <UtilizationBarChart/>
    </div>
  )));

storiesOf('Forms and Controls', module)
  .add('Toolbar', withReadme(ToolbarDoc, () => (
    <div className="doc-example">
      <Toolbar/>
    </div>
  )));

storiesOf('Navigation', module)
  .add('Horizontal Navigation', withReadme(HorizontalNavigationDoc, () => (
    <div className="doc-example">
      <HorizontalNavigation/>
    </div>
  )))
  .add('Vertical Navigation', withReadme(VerticalNavigationDoc, () => (
    <div className="doc-example">
      <VerticalNavigation/>
    </div>
  )));

storiesOf('Widgets', module)
  .add('Bootstrap Combobox', withReadme(BootstrapComboboxDoc, () => (
    <div className="doc-example">
      <label>State</label>
      <BootstrapCombobox/>
    </div>
  )))
  .add('Bootstrap Datepicker', withReadme(BootstrapDatepickerDoc, () => (
    <div className="doc-example" style={{paddingTop: '28em'}}>
      <BootstrapDatepicker/>
    </div>
  )))
  .add('Bootstrap Select', withReadme(BootstrapSelectDoc, () => (
    <div className="doc-example">
      <BootstrapSelect/>
    </div>
  )))
  .add('Bootstrap Switch', withReadme(BootstrapSwitchDoc, () => (
    <div className="doc-example">
      <BootstrapSwitch/>
    </div>
  )))
  .add('Bootstrap Touchspin', withReadme(BootstrapTouchspinDoc, () => (
    <div className="doc-example">
      <BootstrapTouchspin/>
    </div>
  )))
  .add('Bootstrap Tree View', withReadme(BootstrapTreeViewDoc, () => (
    <div className="doc-example">
      <BootstrapTreeView/>
    </div>
  )))
  .add('Count Remaining Characters', withReadme(CountRemainingCharactersDoc, () => (
    <div className="doc-example">
      <CountRemainingCharacters/>
    </div>
  )))
  .add('Fixed Height Accordion', withReadme(AccordionDoc, () => (
    <div className="doc-example">
      <Accordion/>
    </div>
  )))
  .add('Popover', withReadme(PopoverDoc, () => (
    <div className="doc-example">
      <Popover/>
    </div>
  )))
  .add('Progress Bars With Tooltip', withReadme(ProgressBarsWithTooltipDoc, () => (
    <div className="doc-example">
      <ProgressBarsWithTooltip/>
    </div>
  )))
  .add('Search', withReadme(SearchDoc, () => (
    <div className="doc-example">
      <Search/>
    </div>
  )))
  .add('Timepicker', withReadme(TimepickerDoc, () => (
    <div className="doc-example">
      <Timepicker/>
    </div>
  )))
  .add('Tooltip', withReadme(TooltipDoc, () => (
    <div className="doc-example">
      <Tooltip/>
    </div>
  )))
  .add('TreeGrid Table', withReadme(TreeGridTableDoc, () => (
    <div className="doc-example">
      <TreeGridTable/>
    </div>
  )));