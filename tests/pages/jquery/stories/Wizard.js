import React from 'react';

export default class Wizard extends React.Component {
  componentDidMount() {
    var wizard = function(id) {
      var self = this, modal, tabs, tabCount, tabLast, currentGroup, currentTab, contents;
      self.id = id;

      $(self.id).click(function() {
        self.init(this)
      });

      this.init = function(button){
        // get id of open modal
        self.modal = $(button).data("target");

        // open modal
        $(self.modal).modal('show');
        // adjust height of contents row (while steps and sidebar are hidden and loading message displays)
        self.updateWizardLayout();

        // assign data attribute to all tabs
        $(self.modal + " .wizard-pf-sidebar .list-group-item").each(function() {
          // set the first digit (i.e. n.0) equal to the index of the parent tab group
          // set the second digit (i.e. 0.n) equal to the index of the tab within the tab group
          $(this).attr("data-tab", ($(this).parent().index() +1 + ($(this).index()/10 + .1)));
        });
        // assign data attribute to all tabgroups
        $(self.modal + " .wizard-pf-sidebar .list-group").each(function() {
          // set the value equal to the index of the tab group
          $(this).attr("data-tabgroup", ($(this).index() +1));
        });

        // create array of all tabs, using the data attribute, and determine the last tab
        self.tabs = $(self.modal + " .wizard-pf-sidebar .list-group-item" ).map(function()
          {
            return $(this).data("tab");
          }
        );
        self.tabCount = self.tabs.length;
        self.tabSummary = self.tabs[self.tabCount - 2]; // second to last tab displays summary
        self.tabLast = self.tabs[self.tabCount - 1]; // last tab displays progress
        // set first tab group and tab as current tab
        // if someone wants to target a specific tab, that could be handled here
        self.currentGroup = 1;
        self.currentTab = 1.1;
        self.updateTabGroup();
        // hide loading message
        $(self.modal + " .wizard-pf-loading").addClass("hidden");
        // show tabs and tab groups
        $(self.modal + " .wizard-pf-steps").removeClass("hidden");
        $(self.modal + " .wizard-pf-sidebar").removeClass("hidden");
        // remove active class from all tabs
        $(self.modal + " .wizard-pf-sidebar .list-group-item.active").removeClass("active");
        // apply active class to new current tab and associated contents
        self.updateActiveTab();
        // adjust height of contents row (while steps and sidebar and tab contents are visible)
        self.updateWizardLayout();
        self.updateWizardFooterDisplay();

        //initialize click listeners
        self.tabGroupSelect();
        self.tabSelect();
        self.backBtnClicked();
        self.nextBtnClicked();
        self.finishBtnClick();
        self.cancelBtnClick();

        $( window ).resize(function() {
          self.updateWizardLayout();
        });
      };

      // update which tab group is active
      this.updateTabGroup = function() {
        $(self.modal + " .wizard-pf-step.active").removeClass("active");
        $(self.modal + " .wizard-pf-step[data-tabgroup='" + self.currentGroup + "']").addClass("active");
        $(self.modal + " .wizard-pf-sidebar .list-group").addClass("hidden");
        $(self.modal + " .list-group[data-tabgroup='" + self.currentGroup + "']").removeClass("hidden");
      };

      // update which tab is active
      this.updateActiveTab = function() {
        $(self.modal + " .list-group-item[data-tab='" + self.currentTab + "']").addClass("active");
        self.updateVisibleContents();
      };

      // update which contents are visible
      this.updateVisibleContents = function() {
        var tabIndex = ($.inArray(self.currentTab, self.tabs));
        // displaying contents associated with currentTab
        $(self.modal + " .wizard-pf-contents").addClass("hidden");
        $(self.modal + " .wizard-pf-contents:eq(" + tabIndex + ")").removeClass("hidden");
        // setting focus to first form field in active contents
        setTimeout (function() {
          $(".wizard-pf-contents:not(.hidden) form input, .wizard-pf-contents:not(.hidden) form textarea, .wizard-pf-contents:not(.hidden) form select").first().focus(); // this does not account for disabled or read-only inputs
        }, 100);
      };

      // update display state of Back button
      this.updateBackBtnDisplay = function() {
        if (self.currentTab == self.tabs[0]) {
          $(self.modal + " .wizard-pf-back").addClass("disabled");
        }
      };

      // update display state of next/finish button
      this.updateNextBtnDisplay = function() {
        if (self.currentTab == self.tabSummary) {
          $(self.modal + " .wizard-pf-next").addClass("hidden");
          $(self.modal + " .wizard-pf-finish").removeClass("hidden");
        } else {
          $(self.modal + " .wizard-pf-finish").addClass("hidden");
          $(self.modal + " .wizard-pf-next").removeClass("hidden");
        }
      };

      // update display state of buttons in the footer
      this.updateWizardFooterDisplay = function() {
        $(self.modal + " .wizard-pf-footer .disabled").removeClass("disabled");
        self.updateBackBtnDisplay();
        self.updateNextBtnDisplay();
      };

      // adjust layout of panels in wizard
      this.updateWizardLayout = function() {
        var top = ($(self.modal + " .modal-header").outerHeight() + $(self.modal + " .wizard-pf-steps").outerHeight()) + "px",
            bottom = $(self.modal + " .modal-footer").outerHeight() + "px",
            sidebarwidth = $(self.modal + " .wizard-pf-sidebar").outerWidth() + "px";
        $(self.modal + " .wizard-pf-row").css("top", top);
        $(self.modal + " .wizard-pf-row").css("bottom", bottom);
        $(self.modal + " .wizard-pf-main").css("margin-left", sidebarwidth);
      };

      // when the user clicks a step, then the tab group for that step is displayed
      this.tabGroupSelect = function() {
        $(self.modal + " .wizard-pf-step>a").click(function() {
          // remove active class active tabgroup and add active class to the
          // clicked tab group (but don't remove the active class from current tab)
          self.currentGroup = $(this).parent().data("tabgroup");
          self.updateTabGroup();
          // update value for currentTab -- if a tab is already marked as active
          // for the new tab group, use that, otherwise set it to the first tab
          // in the tab group
          self.currentTab = $(self.modal + " .list-group[data-tabgroup='" + self.currentGroup + "'] .list-group-item.active").data("tab");
          if (self.currentTab == undefined) {
            self.currentTab = $(self.modal + " .list-group[data-tabgroup='" + self.currentGroup + "'] .list-group-item:first-child").data("tab");
            // apply active class to new current tab and associated contents
            self.updateActiveTab();
          } else {
            // use already active tab and just update contents
            self.updateVisibleContents();
          }
          // show/hide/disable/enable buttons if needed
          self.updateWizardFooterDisplay();
        });
      };

      // when the user clicks a tab, then the tab contents are displayed
      this.tabSelect = function() {
        $(self.modal + " .wizard-pf-sidebar .list-group-item>a").click(function() {
          // update value of currentTab to new active tab
          self.currentTab = $(this).parent().data("tab");
          // remove active class from active tab in current active tab group (i.e.
          // don't remove the class from tabs in other groups)
          $(self.modal + " .list-group[data-tabgroup='" + self.currentGroup + "'] .list-group-item.active").removeClass("active");
          // add active class to the clicked tab and the associated contents
          $(this).parent().addClass("active");
          self.updateVisibleContents();
          if (self.currentTab == self.tabLast) {
            $(self.modal + " .wizard-pf-next").addClass("hidden");
            $(self.modal + " .wizard-pf-finish").removeClass("hidden");
            self.finish();
          } else {
            // show/hide/disable/enable buttons if needed
            self.updateWizardFooterDisplay();
          }
        });
      };

      // Back button clicked
      this.backBtnClicked = function() {
        $(self.modal + " .wizard-pf-back").click(function() {
          // if not the first page
          if (self.currentTab != self.tabs[0]) {
            // go back a page (i.e. -1)
            self.wizardPaging(-1);
            // show/hide/disable/enable buttons if needed
            self.updateWizardFooterDisplay();
          }
        });
      };

      // Next button clicked
      this.nextBtnClicked = function() {
        $(self.modal + " .wizard-pf-next").click(function() {
          // go forward a page (i.e. +1)
          self.wizardPaging(1);
          // show/hide/disable/enable buttons if needed
          self.updateWizardFooterDisplay();
        });
      };

      // Finish button clicked
      // Deploy/Finish button would only display during the second to last step.
      this.finishBtnClick = function() {
        $(self.modal + " .wizard-pf-finish").click(function() {
          self.wizardPaging(1);
          self.finish();
        });
      };

      // Cancel/Close button clicked
      this.cancelBtnClick = function() {
        $(self.modal + " .wizard-pf-dismiss").click(function() {
          // close the modal
          $(self.modal).modal('hide');
          // drop click event listeners
          $(self.modal + " .wizard-pf-step>a").off("click");
          $(self.modal + " .wizard-pf-sidebar .list-group-item>a").off("click");
          $(self.modal + " .wizard-pf-back").off("click");
          $(self.modal + " .wizard-pf-next").off("click");
          $(self.modal + " .wizard-pf-finish").off("click");
          $(self.modal + " .wizard-pf-dismiss").off("click");
          // reset final step
          $(self.modal + " .wizard-pf-process").removeClass("hidden");
          $(self.modal + " .wizard-pf-complete").addClass("hidden");
          // reset loading message
          $(self.modal + " .wizard-pf-contents").addClass("hidden");
          $(self.modal + " .wizard-pf-loading").removeClass("hidden");
          // remove tabs and tab groups
          $(self.modal + " .wizard-pf-steps").addClass("hidden");
          $(self.modal + " .wizard-pf-sidebar").addClass("hidden");
          // reset buttons in final step
          $(self.modal + " .wizard-pf-close").addClass("hidden");
          $(self.modal + " .wizard-pf-cancel").removeClass("hidden");
        });
      };

      // when the user clicks Next/Back, then the next/previous tab and contents display
      this.wizardPaging = function(direction) {
        // get n.n value of next tab using the index of next tab in tabs array
        var tabIndex = ($.inArray(self.currentTab, self.tabs)) + direction;
        var newTab = self.tabs[tabIndex];
        // add/remove active class from current tab group
        // included math.round to trim off extra .000000000002 that was getting added
        if (newTab != Math.round(10*(direction*.1 + self.currentTab))/10) {
          // this statement is true when the next tab is in the next tab group
          // if next tab is in next tab group (e.g. next tab data-tab value is
          // not equal to current tab +.1) then apply active class to next
          // tab group and step, and update the value for var currentGroup +/-1
          self.currentGroup = self.currentGroup + direction;
          self.updateTabGroup();
        }
        self.currentTab = newTab;
        // remove active class from active tab in current tab group
        $(self.modal + " .list-group[data-tabgroup='" + self.currentGroup + "'] .list-group-item.active").removeClass("active");
        // apply active class to new current tab and associated contents
        self.updateActiveTab();
      };

      // This code keeps the same contents div active, but switches out what
      // contents display in that div (i.e. replaces process message with
      // success message).
      this.finish = function() {
        $(self.modal + " .wizard-pf-back").addClass("disabled"); // if Back remains enabled during this step, then the Close button needs to be removed when the user clicks Back
        $(self.modal + " .wizard-pf-finish").addClass("disabled");
        // code for kicking off process goes here
        // the next code is just to simulate the expected experience, in that
        // when the process is complete, the success message etc. would display
        setTimeout (function() {
          $(self.modal + " .wizard-pf-cancel").addClass("hidden");
          $(self.modal + " .wizard-pf-finish").addClass("hidden");
          $(self.modal + " .wizard-pf-close").removeClass("hidden");
          $(self.modal + " .wizard-pf-process").addClass("hidden");
          $(self.modal + " .wizard-pf-complete").removeClass("hidden");
        }, 3000);
      };
    };
    var completeWizard = new wizard(".btn.wizard-pf-complete");
  }

  render() {
    return (
<div className="modal" id="complete" tabIndex="-1" role="dialog">
  <div className="modal-dialog modal-lg wizard-pf">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close wizard-pf-dismiss" aria-label="Close"><span
          aria-hidden="true">&times;</span></button>
        <dt className="modal-title">Wizard Title</dt>
      </div>
      <div className="modal-body wizard-pf-body clearfix">
        <div className="wizard-pf-steps hidden">
          <ul className="wizard-pf-steps-indicator">
            <li className="wizard-pf-step active" data-tabgroup="1">
              <a><span className="wizard-pf-step-number">1</span><span className="wizard-pf-step-title">First Step</span></a>
            </li>
            <li className="wizard-pf-step" data-tabgroup="2">
              <a><span className="wizard-pf-step-number">2</span><span className="wizard-pf-step-title">Second Step</span></a>
            </li>
            <li className="wizard-pf-step" data-tabgroup="3">
              <a><span className="wizard-pf-step-number">3</span><span className="wizard-pf-step-title">Review</span></a>
            </li>
          </ul>
        </div>

        <div className="wizard-pf-row">
          <div className="wizard-pf-sidebar hidden">
            <ul className="list-group">
              <li className="list-group-item active">
                <a href="#">
                  <span className="wizard-pf-substep-number">1A.</span>
                  <span className="wizard-pf-substep-title">Details</span>
                </a>
              </li>
              <li className="list-group-item">
                <a href="#">
                  <span className="wizard-pf-substep-number">1B.</span>
                  <span className="wizard-pf-substep-title">Settings</span>
                </a>
              </li>
            </ul>
            <ul className="list-group hidden">
              <li className="list-group-item">
                <a href="#">
                  <span className="wizard-pf-substep-number">2A.</span>
                  <span className="wizard-pf-substep-title">Details</span>
                </a>
              </li>
              <li className="list-group-item">
                <a href="#">
                  <span className="wizard-pf-substep-number">2B.</span>
                  <span className="wizard-pf-substep-title">Settings</span>
                </a>
              </li>
            </ul>
            <ul className="list-group hidden">
              <li className="list-group-item">
                <a>
                  <span className="wizard-pf-substep-number">3A.</span>
                  <span className="wizard-pf-substep-title">Summary</span>
                </a>
              </li>
              <li className="list-group-item">
                <a>
                  <span className="wizard-pf-substep-number">3B.</span>
                  <span className="wizard-pf-substep-title">Progress</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="wizard-pf-main">
            <div className="wizard-pf-loading blank-slate-pf">
              <div className="spinner spinner-lg blank-slate-pf-icon"></div>
              <h3 className="blank-slate-pf-main-action">Loading Wizard</h3>
              <p className="blank-slate-pf-secondary-action">Lorem ipsum dolor sit amet, porta at suspendisse ac, ut wisi
                vivamus, lorem sociosqu eget nunc amet. </p>
            </div>
            <div className="wizard-pf-contents hidden">
              <form className="form-horizontal">
                <div className="form-group required">
                  <label className="col-sm-2 control-label" htmlFor="textInput-markup">Name</label>
                  <div className="col-sm-10">
                    <input type="text" data-id="textInput-markup" className="form-control"/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label" htmlFor="descriptionInput-markup">Description (Optional)</label>
                  <div className="col-sm-10">
                    <textarea data-id="descriptionInput-markup" className="form-control" rows="2"></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div className="wizard-pf-contents hidden">
              <form className="form-horizontal">
                <div className="form-group required">
                  <label className="col-sm-2 control-label" htmlFor="lorem">Lorem ipsum</label>
                  <div className="col-sm-10">
                    <input type="text" id="lorem" className="form-control"/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label" htmlFor="dolor">Dolor (Optional)</label>
                  <div className="col-sm-10">
                    <textarea id="dolor" className="form-control" rows="2"></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div className="wizard-pf-contents hidden">
              <form className="form-horizontal">
                <div className="form-group required">
                  <label className="col-sm-2 control-label" htmlFor="aliquam">Aliquam</label>
                  <div className="col-sm-10">
                    <input type="text" id="aliquam" className="form-control"/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label" htmlFor="fermentum">Fermentum</label>
                  <div className="col-sm-10">
                    <textarea id="fermentum" className="form-control" rows="2"></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div className="wizard-pf-contents hidden">
              <form className="form-horizontal">
                <div className="form-group required">
                  <label className="col-sm-2 control-label" htmlFor="consectetur">Consectetur</label>
                  <div className="col-sm-10">
                    <input type="text" id="consectetur" className="form-control"/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label" htmlFor="adipiscing">Adipiscing</label>
                  <div className="col-sm-10">
                    <textarea id="adipiscing" className="form-control" rows="2"></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div className="wizard-pf-contents hidden">
              <div className="wizard-pf-review-steps">
                <ul className="list-group">
                  <li className="list-group-item">
                    <a onClick={(e) => {$(this).toggleClass('collapsed'); $('#reviewStep1').toggleClass('collapse');}}>First Step</a>
                    <div id="reviewStep1" className="wizard-pf-review-substeps">
                      <ul className="list-group">
                        <li className="list-group-item">
                          <a onClick={(e) => {$(this).toggleClass('collapsed'); $('#reviewStep1Substep1').toggleClass('collapse');}}>
                            <span className="wizard-pf-substep-number">1A.</span>
                            <span className="wizard-pf-substep-title">Details</span>
                          </a>
                          <div id="reviewStep1Substep1" className="wizard-pf-review-content">
                            <form className="form">
                              <div className="wizard-pf-review-item">
                                <span className="wizard-pf-review-item-label">Name:</span>
                                <span className="wizard-pf-review-item-value">First Last</span>
                              </div>
                              <div className="wizard-pf-review-item">
                                <span className="wizard-pf-review-item-label">Description:</span>
                                <span className="wizard-pf-review-item-value">This is the description</span>
                              </div>
                            </form>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <a onClick={(e) => {$(this).toggleClass('collapsed'); $('#reviewStep1Substep2').toggleClass('collapse');}}>
                            <span className="wizard-pf-substep-number">1B.</span>
                            <span className="wizard-pf-substep-title">Settings</span>
                          </a>
                          <div id="reviewStep1Substep2" className="wizard-pf-review-content">
                            <form className="form">
                              <div className="wizard-pf-review-item">
                                <div className="wizard-pf-review-item-field">Setting A</div>
                                <div className="wizard-pf-review-item-field">Setting B</div>
                              </div>
                            </form>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <a onClick={(e) => {$(this).toggleClass('collapsed'); $('#reviewStep2').toggleClass('collapse');}}>Second Step</a>
                    <div id="reviewStep2" className="wizard-pf-review-substeps">
                      <ul className="list-group">
                        <li className="list-group-item">
                          <a onClick={(e) => {$(this).toggleClass('collapsed'); $('#reviewStep2Substep1').toggleClass('collapse');}}>
                            <span className="wizard-pf-substep-number">2A.</span>
                            <span className="wizard-pf-substep-title">Details</span>
                          </a>
                          <div id="reviewStep2Substep1" className="wizard-pf-review-content">
                            <form className="form">
                              <div className="wizard-pf-review-item">
                                <span className="wizard-pf-review-item-label">Name:</span>
                                <span className="wizard-pf-review-item-value">First Last</span>
                              </div>
                              <div className="wizard-pf-review-item">
                                <span className="wizard-pf-review-item-label">Description:</span>
                                <span className="wizard-pf-review-item-value">This is the description</span>
                              </div>
                            </form>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <a onClick={(e) => {$(this).toggleClass('collapsed'); $('#reviewStep2Substep2').toggleClass('collapse');}}>
                            <span className="wizard-pf-substep-number">2B.</span>
                            <span className="wizard-pf-substep-title">Settings</span>
                          </a>
                          <div id="reviewStep2Substep2" className="wizard-pf-review-content">
                            <form className="form">
                              <div className="wizard-pf-review-item">
                                <div className="wizard-pf-review-item-field">Setting A</div>
                                <div className="wizard-pf-review-item-field">Setting B</div>
                              </div>
                            </form>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="wizard-pf-contents hidden">
              <div className="wizard-pf-process blank-slate-pf">
                <div className="spinner spinner-lg blank-slate-pf-icon"></div>
                <h3 className="blank-slate-pf-main-action">Deployment in progress</h3>
                <p className="blank-slate-pf-secondary-action">Lorem ipsum dolor sit amet, porta at suspendisse ac, ut wisi
                  vivamus, lorem sociosqu eget nunc amet. </p>
              </div>
              <div className="wizard-pf-complete blank-slate-pf hidden">
                <div className="wizard-pf-success-icon"><span className="glyphicon glyphicon-ok-circle"></span></div>
                <h3 className="blank-slate-pf-main-action">Deployment was successful</h3>
                <p className="blank-slate-pf-secondary-action">Lorem ipsum dolor sit amet, porta at suspendisse ac, ut wisi
                  vivamus, lorem sociosqu eget nunc amet. </p>
                <button type="button" className="btn btn-lg btn-primary">
                  View Deployment
                </button>

              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="modal-footer wizard-pf-footer">
        <button type="button" className="btn btn-default btn-cancel wizard-pf-cancel wizard-pf-dismiss">Cancel</button>
        <button type="button" className="btn btn-default wizard-pf-back disabled">
          <span className="i fa fa-angle-left"></span>
          Back
        </button>
        <button type="button" className="btn btn-primary wizard-pf-next disabled">
          Next
          <span className="i fa fa-angle-right"></span>
        </button>
        <button type="button" className="btn btn-primary hidden wizard-pf-finish">
          Deploy
          <span className="i fa fa-angle-right"></span>
        </button>
        <button type="button" className="btn btn-primary hidden wizard-pf-close wizard-pf-dismiss">Close</button>

      </div>
    </div>
  </div>
</div>
    );
  }
};