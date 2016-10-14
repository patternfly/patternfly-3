/**
 * Utility to resize inline actions with IE
 *
 * @param {object} config - Config properties associated with a Table View
 * @param {string} config.buttonActionsId - Identifier of inline actions
 */
var resizeTableViewUtil = function (config) {
  var self = this;

  // Detect IE
  this.isIE = function () {
    return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
  };

  // Helper function to reset table cell height prior to resizing inline actions
  this.reset = function () {
    $(config.actionsId).each(function (index, el) {
      $(el).css({height: "auto"});
    });
  };

  // Resize inline actions to fill table cells
  this.resize = function () {
    $(config.actionsId).each(function (index, el) {
      var parent = $(el).parent('td');
      var height, width;
      if (parent === undefined || parent.length === 0) {
        return;
      }
      $(el).css({height: parent[0].clientHeight});
    });
  };

  if (self.isIE()) {
    // Initialize
    self.resize();

    // Resize buttons to fill table cells.
    $(window).on('resize', function () {
      self.reset();
      self.resize();
    });
  }
};

// Initialize resize util
new resizeTableViewUtil({
  actionsId: "td.table-view-pf-actions > .btn, td.table-view-pf-actions > .dropdown"
});
