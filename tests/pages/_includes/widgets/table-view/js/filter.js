/**
 * Utility for filtering Table View rows.
 *
 * Note: This functionality currently expects column 0 to contain checkboxes and that
 * all data columns may be filtered.
 *
 * @param {object} config - Config properties associated with a Table View
 * @param {string} config.tableId - Identifier of the table
 * @param {string} config.toolbarId - Identifier of the toolbar
 */
var filterTableViewUtil = function(config) {
  var RESULTS_SELECTOR = '.toolbar-pf-results'; // Toolbar results area displaying selected rows text
  var self = this;

  this.table = $(config.tableId); // Table
  this.toolbar = $(config.toolbarId); // Toolbar

  this.activeControls = this.toolbar.find('.list-inline'); // Active filter controls container
  this.activeFilters = this.activeControls.closest('div'); // Active filters container
  this.clearAllFilters = this.toolbar.find('.toolbar-pf-results a'); // Clear all filters control
  this.dt = this.table.DataTable(); // Data table
  this.filters = []; // Filters array
  this.filterMenu = this.toolbar.find('.toolbar-pf-filter button'); // Filter menu
  this.filterColumn = 1; // Current column to filter
  this.filterLabel = this.toolbar.find('.toolbar-pf-filter label'); // Filter label
  this.filterOptions = this.toolbar.find('.toolbar-pf-filter a');
  this.filterName = this.filterOptions.first().get(0).text; // Name of current filter
  this.filterInput = this.toolbar.find('.toolbar-pf-filter input'); // Filter input

  // Helper function to add active filter control
  this.addActiveFilterControl = function (filter) {
    // Append active filter control
    self.activeControls.append('<li><span class="label label-info">' + filter.name + ': ' + filter.value +
        '<a href="#"><span class="pficon pficon-close"/></a></span></li>');

    // Handle click to clear active filter
    self.activeControls.find('a').last().on('click', function (e) {
      // Find existing filter and remove
      for (var i = 0; i < self.filters.length; i++) {
        if (self.filters[i].column === filter.column && self.filters[i].value === filter.value) {
          self.filters.splice(i, 1);
          $(this).parents('li').remove();
          break;
        }
      }
      if (self.filters.length === 0) {
        self.activeFilters.addClass('hidden'); // Hide
      }
      self.dt.draw();
      self.updateActiveFiltersText();
    });
    // Show active filters
    self.activeFilters.removeClass('hidden');
  };

  // Update active filter results text
  this.updateActiveFiltersText = function () {
    var filteredRows = self.dt.rows({'page': 'current', 'search': 'applied'}).flatten().length;
    var results = $(self.toolbar).find(RESULTS_SELECTOR + " h5");
    if (results === undefined) {
      return;
    }
    results.html(filteredRows + " Results");
  }

  // Handle enter key press on filter input to apply filter
  this.filterInput.on('keypress', function (e) {
    var newFilter;
    var found = false;
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode === 13 && this.value.trim().length > 0) {
      newFilter = {
        column: self.filterColumn,
        name: self.filterName,
        value: this.value
      };
      // Find existing entry
      $.grep(self.filters, function(f) {
        if (f.column === newFilter.column && f.value === newFilter.value) {
          found = true;
        }
      });
      // Add new filter
      if (!found) {
        self.addActiveFilterControl(newFilter);
        self.filters.push(newFilter);
        self.dt.draw();
        self.updateActiveFiltersText();
      }
      self.filterInput.get(0).value = ""; // Clear input
    }
  });

  // Handle click on filter menu to set current filter column and name
  for (var i = 0; i < this.filterOptions.length; i++) {
    (function(i) {
      $(self.filterOptions[i]).on('click', function (e) {
        self.filterLabel.html($(this).text()); // Set filter label
        self.filterMenu.html($(this).text() + " <span class='caret'></span>"); // Set filter button
        self.filterInput.get(0).placeholder = "Filter By " + this.text + "..."; // Set input placeholder
        self.filterName = $(this).text(); // Save filter name for active filter control
        self.filterColumn = i + 1; // Expecting column 0 to contain checkboxes
      });
    })(i);
  }

  // Handle click on clear all filters control
  this.clearAllFilters.on('click', function (e) {
    self.filters.length = 0; // Reset filters
    self.activeControls.html(""); // Remove all active filter controls
    self.activeFilters.addClass('hidden'); // Hide active filters area
    self.dt.draw();
  });

  // Disable form submit on FF when pressing enter in filter input.
  $('.toolbar-pf-actions').submit(function (event) {
    event.preventDefault();
  });

  // Custom filter
  $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
    var showThisRow = true;
    // Must match all filters
    $.each(self.filters, function (index, filter) {
      if (data[filter.column].indexOf(filter.value) === -1) {
        showThisRow = false;
      }
    });
    return showThisRow;
  });
};

// Initialize filtering util
new filterTableViewUtil({
  tableId: ".table",
  toolbarId: ".toolbar-pf"
});
