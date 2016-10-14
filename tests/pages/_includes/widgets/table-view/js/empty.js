/**
 * Utility to show empty Table View
 *
 * Note: This functionality currently expects the Table View toolbar contains delete all and restore controls.
 *
 * @param {object} config - Config properties associated with a Table View
 * @param {string} config.blankSlateId - Identifier of the blank slate container
 * @param {object} config.data - Data set for the data table
 * @param {string} config.deleteAllRowsId - Identifier of the delete all rows control
 * @param {string} config.tableId - Identifier of the table
 * @param {string} config.toolbarId - Identifier of the toolbar
 * @param {string} config.restoreRowsId - Identifier of the restore rows control
 */
var emptyTableViewUtil = function (config) {
  var self = this;

  this.blankSlate = $(config.blankSlateId); // Blank slate for empty table
  this.table = $(config.tableId); // Table
  this.toolbar = $(config.toolbarId); // Toolbar

  this.actions = this.toolbar.find('.toolbar-pf-actions'); // Toolbar actions container
  this.activeFilters = this.toolbar.find('.list-inline').closest('div'); // Active filters container
  this.deleteAllRows = $(config.deleteAllRowsId); // Delete all rows control
  this.dt = this.table.DataTable(); // Data table
  this.restoreRows = $(config.restoreRowsId); // Restore rows control
  this.results = this.toolbar.find('.toolbar-pf-results'); // Toolbar results container
  this.tbody = this.table.find('tbody'); // Table body
  this.thead = this.table.find('thead'); // Table head

  // Handle click on delete all control
  this.deleteAllRows.on('click', function() {
    self.actions.find('button').prop('disabled', true); // Disable all buttons
    self.actions.find('input').prop('disabled', true); // Disable all inputs
    self.blankSlate.removeClass('hidden'); // Show blank slate
    self.restoreRows.get(0).disabled = false; // Enable restore rows control
    self.results.children().addClass('hidden'); // Hide results container
    self.tbody.addClass('hidden'); // Hide zero records message
    self.thead.addClass('hidden'); // Hide column headers
    self.dt.clear().draw();
  });

  // Handle click on restore rows control
  this.restoreRows.on('click', function() {
    self.actions.find('button').prop('disabled', false); // Enable all buttons
    self.actions.find('input').prop('disabled', false); // Enable all inputs
    self.blankSlate.addClass('hidden'); // Hide blank slate
    self.restoreRows.get(0).disabled = true; // Disable restore rows control
    self.results.children().removeClass('hidden'); // Show results container
    self.tbody.removeClass('hidden'); // Show table body
    self.thead.removeClass('hidden'); // Show column headers
    self.dt.rows.add(config.data).draw();
  });

  // Initialize restore rows control.
  this.restoreRows.get(0).disabled = true;
};

// Initialize empty Table View util
new emptyTableViewUtil({
  blankSlateId: ".blank-slate-pf",
  data: dataSet,
  deleteAllRowsId: "#deleteAllRows",
  restoreRowsId: "#restoreRows",
  tableId: ".table",
  toolbarId: ".toolbar-pf"
});
