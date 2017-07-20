// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/bootstrap/index.d.ts" />


module Wizard {
	export class Init {
		clickedButton:string;
		wizard: JQuery;
		wizardId: string;
		tabs: any;
		tabCount: number;
		tabSummary:  any;
		tabLast: number;
		currentGroup: number;
		currentTab: number;
		customOnLoadFunction:any;
		customTabUpdateFunction: any;
		customFinishFunction: any;

		constructor(selector:string) {
			this.clickedButton = selector;
			
		}
		
		click(currentGroup?: number, currentTab?: number, customOnLoadFunction?: any, customTabUpdateFunction?: any, customFinishFunction?: any) {

			// tabs will default to tabgroup 1 and tab 1.1 unless specified
			this.currentGroup = currentGroup != null ? currentGroup : 1;
			this.currentTab = currentTab != null ? currentTab : 1.1;

			this.customTabUpdateFunction = customTabUpdateFunction != null ? customTabUpdateFunction : null;
			this.customFinishFunction = customFinishFunction != null ? customFinishFunction : null;
			this.customOnLoadFunction = customOnLoadFunction != null ? customOnLoadFunction : null;

			// get id of open modal
			this.wizardId = $(this.clickedButton).data("target");
			//open Modal
			$(this.wizardId).modal("show");
			// adjust height of contents row (while steps and sidebar are hidden and loading message displays)
			var modal = this.wizardId;
			this.updateWizardLayout();

			// assign data attribute to all tabs and tabgroups
			this.assignTabData();
			// create array of all tabs, using the data attribute, and determine the last tab
			var selector = modal + " .wizard-pf-sidebar .list-group-item";
			this.tabs = $(selector).map(function(){
					
						return $(this).data("tab");
					
				}
				//this.setTabs(selector)
			);
			 
			this.tabCount = this.tabs.length;
			this.tabSummary = this.tabs[this.tabCount - 2]; // second to last tab displays summary
			this.tabLast = this.tabs[this.tabCount - 1]; // last tab displays progress
			
			
			this.updateTabGroup();

			// hide loading message
			$(modal + " .wizard-pf-loading").addClass("hidden");
			// show tabs and tab groups
			$(modal + " .wizard-pf-steps").removeClass("hidden");
			$(modal + " .wizard-pf-sidebar").removeClass("hidden");
			// remove active class from all tabs
			$(modal + " .wizard-pf-sidebar .list-group-item.active").removeClass("active");
			// apply active class to new current tab and associated contents
			this.updateActiveTab();
			// adjust height of contents row (while steps and sidebar and tab contents are visible)
			this.updateWizardLayout();
			this.updateWizardFooterDisplay();

			//initialize click listeners
			this.tabGroupSelect();
			this.tabSelect();
			this.backBtnClicked();
			this.nextBtnClicked();
			this.finishBtnClick();
			this.cancelBtnClick();

			if (this.customOnLoadFunction != null) {
				this.customOnLoadFunction();
			}
		}
		
		assignTabData() {
			var modal = this.wizardId;
			var selectortab =modal + " .wizard-pf-sidebar .list-group-item";
			$(selectortab).each(function () {
				// set the first digit (i.e. n.0) equal to the index of the parent tab group
				// set the second digit (i.e. 0.n) equal to the index of the tab within the tab group
				$(this).attr("data-tab", ($(this).parent().index() + 1 + ($(this).index() / 10 + .1)));
			});
			var selectortabGroup = modal + " .wizard-pf-sidebar .list-group";
			$(selectortabGroup).each(function () {
				// set the value equal to the index of the tab group
				$(this).attr("data-tabgroup", ($(this).index() + 1));
			});
		}
		updateTabGroup() {
			var modal = this.wizardId;
			$(modal + " .wizard-pf-step.active").removeClass("active");
			$(modal + " .wizard-pf-step[data-tabgroup='" + this.currentGroup + "']").addClass("active");
			$(modal + " .wizard-pf-sidebar .list-group").addClass("hidden");
			$(modal + " .list-group[data-tabgroup='" + this.currentGroup + "']").removeClass("hidden");
		};
		updateActiveTab() {
			var modal = this.wizardId;
			$(modal + " .list-group-item[data-tab='" + this.currentTab + "']").addClass("active");
			this.updateVisibleContents();
		};
		updateVisibleContents() {
			var modal = this.wizardId;
			var tabIndex = ($.inArray(this.currentTab, this.tabs));
			// displaying contents associated with currentTab
			$(modal + " .wizard-pf-contents").addClass("hidden");
			$(modal + " .wizard-pf-contents:eq(" + tabIndex + ")").removeClass("hidden");
			// setting focus to first form field in active contents
			if (this.customTabUpdateFunction != null) {
				//this can be done on every page update or only on a specific tab
				this.customTabUpdateFunction();
			}
		};
		// update display state of Back button
		updateBackBtnDisplay() {
			var modal = this.wizardId;
			if (this.currentTab == this.tabs[0]) {
				$(modal + " .wizard-pf-back").addClass("disabled");
			}
		};
		// update display state of next/finish button
		updateNextBtnDisplay() {
			var modal = this.wizardId;
			if (this.currentTab == this.tabSummary) {
				$(modal + " .wizard-pf-next").addClass("hidden");
				$(modal + " .wizard-pf-finish").removeClass("hidden");
			} else {
				$(modal + " .wizard-pf-finish").addClass("hidden");
				$(modal + " .wizard-pf-next").removeClass("hidden");
			}
		};
		// update display state of buttons in the footer
		updateWizardFooterDisplay() {
			var modal = this.wizardId;
			$(modal + " .wizard-pf-footer .disabled").removeClass("disabled");
			this.updateBackBtnDisplay();
			this.updateNextBtnDisplay();
		};
		// adjust layout of panels in wizard
		updateWizardLayout() {
			var modal = this.wizardId;
			var top = ($(modal + " .modal-header").outerHeight() + $(modal + " .wizard-pf-steps").outerHeight()) + "px",
				bottom = $(modal + " .modal-footer").outerHeight() + "px",
				sidebarwidth = $(modal + " .wizard-pf-sidebar").outerWidth() + "px";
			$(modal + " .wizard-pf-row").css("top", top);
			$(modal + " .wizard-pf-row").css("bottom", bottom);
			$(modal + " .wizard-pf-main").css("margin-left", sidebarwidth);
		};
		
		// when the user clicks a step, then the tab group for that step is displayed
		tabGroupSelect(){
			var modal = this.wizardId;
			var currentGroup = this.currentGroup;
			var currentTab = this.currentTab;
			var utg = this.updateTabGroup;
			var uat = this.updateActiveTab;
			var uvc = this.updateVisibleContents;
			var uwfd = this.updateWizardFooterDisplay;
			$(modal + " .wizard-pf-step>a").click(()=> {
				// remove active class active tabgroup and add active class to the
				// clicked tab group (but don't remove the active class from current tab)

				currentGroup = $(modal + " .wizard-pf-step>a").parent().data("tabgroup");
				utg();
				// update value for currentTab -- if a tab is already marked as active
				// for the new tab group, use that, otherwise set it to the first tab
				// in the tab group
				currentTab = $(modal + " .list-group[data-tabgroup='" + currentGroup + "'] .list-group-item.active").data("tab");
				if (currentTab == undefined) {
					currentTab = $(modal + " .list-group[data-tabgroup='" + currentGroup + "'] .list-group-item:first-child").data("tab");
					// apply active class to new current tab and associated contents
					uat();
				} else {
					// use already active tab and just update contents
					uvc();
				}
				// show/hide/disable/enable buttons if needed
				uwfd();
			});
		};
		// when the user clicks a tab, then the tab contents are displayed
		tabSelect() {
			var modal = this.wizardId;
			var currentGroup = this.currentGroup;
			var currentTab = this.currentTab;
			var tabLast = this.tabLast;
			var uvc = this.updateVisibleContents;
			var fin = this.finish;
			var uwfd = this.updateWizardFooterDisplay;
			$(modal + " .wizard-pf-sidebar .list-group-item>a").click(() =>{
				var selector = modal + " .list-group[data-tabgroup='" + currentGroup + "'] .list-group-item.active";

				// update value of currentTab to new active tab
				currentTab = $(selector).parent().data("tab");
				// remove active class from active tab in current active tab group (i.e.
				// don't remove the class from tabs in other groups)
				$(selector).removeClass("active");
				// add active class to the clicked tab and the associated contents
				$(selector).parent().addClass("active");
				uvc();
				if (currentTab == tabLast) {
					$(modal + " .wizard-pf-next").addClass("hidden");
					$(modal + " .wizard-pf-finish").removeClass("hidden");
					fin();
				} else {
					// show/hide/disable/enable buttons if needed
					uwfd();
				}
			});
		};
		// Back button clicked
		backBtnClicked() {
			const modal = this.wizardId;
			var currentTab = this.currentTab;
			var tabs = this.tabs;
			var wp = this.wizardPaging;
			var upf = this.updateWizardFooterDisplay;
			$(modal + " .wizard-pf-back").click(()=> {
				// if not the first page
				if (currentTab != tabs[0]) {
					// go back a page (i.e. -1)
					wp(-1);
					// show/hide/disable/enable buttons if needed
					upf();
				}
			});
		};
		// Next button clicked
		nextBtnClicked() {
			const modal = this.wizardId;
			$(modal + " .wizard-pf-next").click(() => {
				// go forward a page (i.e. +1)
				this.wizardPaging(1);
				// show/hide/disable/enable buttons if needed
				this.updateWizardFooterDisplay();
			});
		};
		// Finish button clicked
		// Deploy/Finish button would only display during the second to last step.
		finishBtnClick() {
			var modal = this.wizardId;
			$(modal + " .wizard-pf-finish").click(() => {
				this.wizardPaging(1);
				this.finish();
			});
		};
		// Cancel/Close button clicked
		cancelBtnClick() {
			var modal = this.wizardId;
			$(modal + " .wizard-pf-dismiss").click(()=> {
				// close the modal
				$(modal).modal('hide');
				// drop click event listeners
				$(modal + " .wizard-pf-step>a").off("click");
				$(modal + " .wizard-pf-sidebar .list-group-item>a").off("click");
				$(modal + " .wizard-pf-back").off("click");
				$(modal + " .wizard-pf-next").off("click");
				$(modal + " .wizard-pf-finish").off("click");
				$(modal + " .wizard-pf-dismiss").off("click");
				// reset final step
				$(modal + " .wizard-pf-process").removeClass("hidden");
				$(modal + " .wizard-pf-complete").addClass("hidden");
				// reset loading message
				$(modal + " .wizard-pf-contents").addClass("hidden");
				$(modal + " .wizard-pf-loading").removeClass("hidden");
				// remove tabs and tab groups
				$(modal + " .wizard-pf-steps").addClass("hidden");
				$(modal + " .wizard-pf-sidebar").addClass("hidden");
				// reset buttons in final step
				$(modal + " .wizard-pf-close").addClass("hidden");
				$(modal + " .wizard-pf-cancel").removeClass("hidden");
			});
		};
		// when the user clicks Next/Back, then the next/previous tab and contents display
		wizardPaging(direction) {
			var modal = this.wizardId;
			// get n.n value of next tab using the index of next tab in tabs array
			var tabIndex = ($.inArray(this.currentTab, this.tabs)) + direction;
			var newTab = this.tabs[tabIndex];
			// add/remove active class from current tab group
			// included math.round to trim off extra .000000000002 that was getting added
			if (newTab != Math.round(10 * (direction * .1 + this.currentTab)) / 10) {
				// this statement is true when the next tab is in the next tab group
				// if next tab is in next tab group (e.g. next tab data-tab value is
				// not equal to current tab +.1) then apply active class to next
				// tab group and step, and update the value for var currentGroup +/-1
				this.currentGroup = this.currentGroup + direction;
				this.updateTabGroup();
			}
			this.currentTab = newTab;
			// remove active class from active tab in current tab group
			$(modal + " .list-group[data-tabgroup='" + this.currentGroup + "'] .list-group-item.active").removeClass("active");
			// apply active class to new current tab and associated contents
			this.updateActiveTab();
		};

		// This code keeps the same contents div active, but switches out what
		// contents display in that div (i.e. replaces process message with
		// success message).
		finish() {
			var modal = this.wizardId;
			$(modal + " .wizard-pf-back").addClass("disabled"); // if Back remains enabled during this step, then the Close button needs to be removed when the user clicks Back
			$(modal + " .wizard-pf-finish").addClass("disabled");
			
			if (this.customFinishFunction != null) {
				this.customFinishFunction();
			} else {
				// code for kicking off process goes here
				// the next code is just to simulate the expected experience, in that
				// when the process is complete, the success message etc. would display
				setTimeout(() => {
						$(modal + " .wizard-pf-cancel").addClass("hidden");
						$(modal + " .wizard-pf-finish").addClass("hidden");
						$(modal + " .wizard-pf-close").removeClass("hidden");
						$(modal + " .wizard-pf-process").addClass("hidden");
						$(modal + " .wizard-pf-complete").removeClass("hidden");
					},
					3000);
			}
		};
		
	}
}