/**
 * @summary     pfSelect for DataTables
 * @description A collection of API methods providing individual row selection and select all functionality in a
 * DataTable using traditional HTML checkboxes. This ensures the DataTable meets the Patternfly design pattern while
 * maintaining accessibility. Selection checkboxes are expected to be located in the first column of the DataTable.
 *
 * The following selection styles are supported for user interaction with the DataTable:
 *
 * api - Selection can only be performed via the API
 * multi - Multiple items can be selected
 * multi+shift - a hybrid between the os style and multi
 * os - Operating system style selection with complex behaviors such as ctrl/cmd, shift and an unmodified click
 * single - Only a single item can be selected
 *
 * For details see: https://datatables.net/reference/option/select.style
 *
 * Example:
 *
 * <div class="table-view-pf">
 *   <table class="table table-striped table-bordered table-hover" id="table2">
 *     <thead>
 *       <tr>
 *         <th><input type="checkbox" name="selectAll"></th>
 *         <th>Test</th>
 *       </tr>
 *     </thead>
 *   </table>
 * </div>
 * <script>
 * $(document).ready(function() {
 *   var dt = $('#table2').DataTable({
 *     columns: [{
 *       data: null,
 *       className: "table-view-pf-select",
 *       render: function (data, type, full, meta) {
 *         return '<input type="checkbox" name="select">';
 *       },
 *       sortable: false
 *     }, {
 *       data: "test"
 *     }],
 *     data: [{ test: "1" }, { test: "2" }],
 *     dom: 't',
 *     order: [[ 1, 'asc' ]],
 *     select: {
 *       allSelector: 'th:first-child input[type="checkbox"]',
 *       selector: 'td:first-child input[type="checkbox"]',
 *       style: 'multi'
 *     }
 *   });
 *   dt.table().pfSelect.selectAllRows(true); // Select all rows
 * });
 * </script>
 *
 * Note: This functionality requires the following Javascript library files to be loaded:
 *
 * https://cdn.datatables.net/select/1.2.0/js/dataTables.select.min.js
 */
(function (factory) {
  'use strict';
  if (typeof define === 'function' && define.amd ) {
    // AMD
    define (['jquery', 'datatables.net'], function ($) {
      return factory ($, window, document);
    });
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = function (root, $) {
      if (!root) {
        root = window;
      }
      if (!$ || !$.fn.dataTable) {
        $ = require('datatables.net')(root, $).$;
      }
      return factory($, root, root.document);
    };
  } else {
    // Browser
    factory(jQuery, window, document);
  }
}(function ($, window, document, undefined) {
  'use strict';
  var DataTable = $.fn.dataTable;
  var RESULTS_SELECTOR = '.table-view-pf-results-right'; // Toolbar results area displaying selected rows text
  var SELECT_ALL_SELECTOR = 'th:first-child input[type="checkbox"]'; // Default checkbox used to select all rows
  var SELECT_SELECTOR = 'td:first-child input[type="checkbox"]'; // Default checkboxes used for row selection

  DataTable.pfSelect = {};

  /**
   * Initialize
   *
   * @param {DataTable.Api} dt DataTable
   * @private
   */
  DataTable.pfSelect.init = function (dt) {
    var ctx = dt.settings()[0];
    var opts = ctx.oInit.select;
    var style = dt.select.style();

    // Set select and select all controls
    dt.pfSelect.allSelector = (opts && opts.allSelector !== undefined) ? opts.allSelector : SELECT_ALL_SELECTOR;
    dt.pfSelect.selector = (opts && opts.selector !== undefined) ? opts.selector : SELECT_SELECTOR;

    if (style === 'api') {
      // Select all checkbox
      $(dt.table().container()).on('click', dt.pfSelect.allSelector, function (evt) {
        evt.preventDefault();
      });

      // Select checkboxes
      $(dt.table().container()).on('click', dt.pfSelect.selector, function (evt) {
        evt.preventDefault();
      });

      dt.table().on('select.dt', function () {
        syncSelectCheckboxes(dt);
      });
    } else {
      // Select all checkbox
      $(dt.table().container()).on('click', dt.pfSelect.allSelector, function (evt) {
        selectAllRows(dt, evt.target.checked);
      });

      // Select checkboxes
      $(dt.table().container()).on('click', dt.pfSelect.selector, function (evt) {
        if (style !== 'multi' || style !== 'multi+shift') {
          syncSelectCheckboxes(dt); // No need to sync checkbox selections when "multi" is used
        } else {
          syncSelectAllCheckbox(dt); // Still need to sync select all checkbox
        }
      });
    }

    // Sync checkbox selections when paging and filtering is applied
    dt.table().on('draw.dt', function () {
      syncSelectCheckboxes(dt);
    });

    // Get results container
    DataTable.pfSelect.results = getResultsContainer($(dt.table().container()).parent()[0]);

    // Initialize selected rows text
    updateSelectedRowsText(dt);
  };

  // Local functions

  /**
   * Get results container
   *
   * @param {Object} el Element
   * @private
   */
  function getResultsContainer (el) {
    var results;
    if (el === undefined) {
      return undefined;
    }
    results = $(el).find(RESULTS_SELECTOR);
    if (results === undefined || results.length === 0) {
      results = getResultsContainer($(el).parent()[0]);
    }
    return results;
  }

  /**
   * Select all rows on current page
   *
   * @param {DataTable.Api} dt DataTable
   * @param {boolean} select True to select all rows on current page, defaults to false
   * @private
   */
  function selectAllRows (dt, select) {
    // Retrieve all rows taking into account currently applied filter
    var filteredRows = dt.rows({'page': 'current', 'search': 'applied'});

    // Check if style is single
    if (dt.select.style() === 'single') {
      throw new Error("Cannot select all rows with selection style 'single'");
    }

    // Select rows
    if (select) {
      filteredRows.select();
    } else {
      filteredRows.deselect();
    }
    $(dt.pfSelect.selector, dt.table().container()).prop('checked', select); // De/select checkboxes in view
    syncSelectAllCheckbox(dt);
  }

  /**
   * Sync select all checkbox with row selections on current page
   *
   * @param {DataTable.Api} dt DataTable
   * @private
   */
  function syncSelectAllCheckbox (dt) {
    // Retrieve all rows taking into account currently applied filter
    var filteredRows = dt.rows({'page': 'current', 'search': 'applied'}).flatten().length;
    var selectedFilteredRows = dt.rows({'page': 'current', 'search': 'applied', 'selected': true}).flatten().length;

    // De/select the select all checkbox
    var selectAll = $(dt.table().container()).find(dt.pfSelect.allSelector)[0];
    if (selectAll) {
      selectAll.checked = (filteredRows === selectedFilteredRows);
    }
    updateSelectedRowsText(dt);
  }

  /**
   * Sync select checkboxes with row selections on current page
   *
   * @param {DataTable.Api} dt DataTable
   * @private
   */
  function syncSelectCheckboxes (dt) {
    $(dt.pfSelect.selector, dt.table().container()).prop('checked', false); // Deselect all checkboxes
    dt.rows({'page': 'current', 'search': 'applied', 'selected': true}).every(function (index) {
      $(dt.pfSelect.selector, dt.table().row(index).node()).prop('checked', true); // Select checkbox for selected row
    });
    syncSelectAllCheckbox(dt);
  }

  /**
   * Update selection results text
   *
   * @param {DataTable.Api} dt DataTable
   * @private
   */
  function updateSelectedRowsText (dt) {
    var selectedRows = dt.rows({'selected': true}).flatten().length;
    var totalRows = dt.rows().flatten().length;
    if (DataTable.pfSelect.results === undefined) {
      return;
    }
    DataTable.pfSelect.results.html("<strong>" + selectedRows + "</strong> of <strong>" +
      totalRows + "</strong> selected");
  }

  // DataTables API

  /**
   * Select all rows on current page
   *
   * Example: dt.table().pfSelect.selectAllRows(true);
   *
   * @param {boolean} select True to select all rows on current page, defaults to false
   */
  DataTable.Api.register('pfSelect.selectAllRows()', function (select) {
    return this.iterator('table', function (ctx) {
      selectAllRows(new DataTable.Api(ctx), select);
    });
  });

  // DataTables creation
  $(document).on('preInit.dt.dtSelect', function (e, ctx) {
    if (e.namespace !== 'dt') {
      return;
    }
    DataTable.pfSelect.init(new DataTable.Api(ctx));
  });
  return DataTable.pfSelect;
}));
