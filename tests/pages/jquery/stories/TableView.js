import React from 'react';

export default class TableView extends React.Component {
  componentDidMount() {
  // JSON data for Table View
  var dataSet = [{
    engine: "Trident",
    browser: "Internet Explorer 4.0",
    platforms: "Win 95+",
    version: "4",
    grade: "X"
  },{
    engine: "Trident",
    browser: "Internet Explorer 5.0",
    platforms: "Win 95+",
    version: "5",
    grade: "C"
  }, {
    engine: "Trident",
    browser: "Internet Explorer 5.5",
    platforms: "Win 95+",
    version: "5.5",
    grade: "A"
  }, {
    engine: "Trident",
    browser: "Internet Explorer 6",
    platforms: "Win 98+",
    version: "6",
    grade: "A"
  }, {
    engine: "Trident",
    browser: "Internet Explorer 7",
    platforms: "Win XP SP2+",
    version: "7",
    grade: "A"
  }, {
    engine: "Trident",
    browser: "AOL browser (AOL desktop)",
    platforms: "Win XP",
    version: "6",
    grade: "A"
  }, {
    engine: "Gecko",
    browser: "Firefox 1.0",
    platforms: "Win 98+ / OSX.2+",
    version: "1.7",
    grade: "A"
  }, {
    engine: "Gecko",
    browser: "Firefox 1.5",
    platforms: "Win 98+ / OSX.2+",
    version: "1.8",
    grade: "A"
  }, {
    engine: "Gecko",
    browser: "Firefox 2.0",
    platforms: "Win 98+ / OSX.2+",
    version: "1.8",
    grade: "A"
  }, {
    engine: "Gecko",
    browser: "Firefox 3.0",
    platforms: "Win 2k+ / OSX.3+",
    version: "1.9",
    grade: "A"
  }, {
    engine: "Gecko",
    browser: "Camino 1.0",
    platforms: "OSX.2+",
    version: "1.8",
    grade: "A"
  }, {
    engine: "Gecko",
    browser: "Camino 1.5",
    platforms: "OSX.3+",
    version: "1.8",
    grade: "A"
  }, {
    engine: "Gecko",
    browser: "Netscape 7.2",
    platforms: "Win 95+ / Mac OS 8.6-9.2",
    version: "1.7",
    grade: "A"
  }, {
    engine: "Gecko",
    browser: "Netscape Browser 8",
    platforms: "Win 98SE+",
    version: "1.7",
    grade: "A"
  }, {
    engine: "Gecko",
    browser: "Netscape Navigator 9",
    platforms: "Win 98+ / OSX.2+",
    version: "1.8",
    grade: "A"
  }, {
    engine: "Gecko",
    browser: "Mozilla 1.0",
    platforms: "Win 95+ / OSX.1+",
    version: "1",
    grade: "A"
  }, {
    engine: "Gecko",
    browser: "Mozilla 1.1",
    platforms: "Win 95+ / OSX.1+",
    version: "1.1",
    grade: "A"
  }, {
    engine: "Gecko",
    browser: "Mozilla 1.2",
    platforms: "Win 95+ / OSX.1+",
    version: "1.2",
    grade: "A"
  }, {
    engine: "Gecko",
    browser: "Mozilla 1.3",
    platforms: "Win 95+ / OSX.1+",
    version: "1.3",
    grade: "A"
  }, {
    engine: "Gecko",
    browser: "Mozilla 1.4",
    platforms: "Win 95+ / OSX.1+",
    version: "1.4",
    grade: "A"
  }, {
    engine: "Gecko",
    browser: "Mozilla 1.5",
    platforms: "Win 95+ / OSX.1+",
    version: "1.5",
    grade: "A"
  }, {
    engine: "Gecko",
    browser: "Mozilla 1.6",
    platforms: "Win 95+ / OSX.1+",
    version: "1.6",
    grade: "A"
  }, {
    engine: "Gecko",
    browser: "Mozilla 1.7",
    platforms: "Win 98+ / OSX.1+",
    version: "1.7",
    grade: "A"
  }, {
    engine: "Gecko",
    browser: "Mozilla 1.8",
    platforms: "Win 98+ / OSX.1+",
    version: "1.8",
    grade: "A"
  }, {
    engine: "Gecko",
    browser: "Seamonkey 1.1",
    platforms: "Win 98+ / OSX.2+",
    version: "1.8",
    grade: "A"
  }, {
    engine: "Gecko",
    browser: "Epiphany 2.20",
    platforms: "Gnome",
    version: "1.8",
    grade: "A"
  }, {
    engine: "Webkit",
    browser: "Safari 1.2",
    platforms: "OSX.3",
    version: "125.5",
    grade: "A"
  }, {
    engine: "Webkit",
    browser: "Safari 1.3",
    platforms: "OSX.3",
    version: "312.8",
    grade: "A"
  }, {
    engine: "Webkit",
    browser: "Safari 2.0",
    platforms: "OSX.4+",
    version: "419.3",
    grade: "A"
  }, {
    engine: "Webkit",
    browser: "Safari 3.0",
    platforms: "OSX.4+",
    version: "522.1",
    grade: "A"
  }, {
    engine: "Webkit",
    browser: "OmniWeb 5.5",
    platforms: "OSX.4+",
    version: "420",
    grade: "A"
  }, {
    engine: "Webkit",
    browser: "iPod Touch / iPhone",
    platforms: "iPod",
    version: "420.1",
    grade: "A"
  }, {
    engine: "Webkit",
    browser: "S60",
    platforms: "S60",
    version: "413",
    grade: "A"
  }, {
    engine: "Presto",
    browser: "Opera 7.0",
    platforms: "Win 95+ / OSX.1+",
    version: "-",
    grade: "A"
  }, {
    engine: "Presto",
    browser: "Opera 7.5",
    platforms: "Win 95+ / OSX.2+",
    version: "-",
    grade: "A"
  }, {
    engine: "Presto",
    browser: "Opera 8.0",
    platforms: "Win 95+ / OSX.2+",
    version: "-",
    grade: "A"
  }, {
    engine: "Presto",
    browser: "Opera 8.5",
    platforms: "Win 95+ / OSX.2+",
    version: "-",
    grade: "A"
  }, {
    engine: "Presto",
    browser: "Opera 9.0",
    platforms: "Win 95+ / OSX.3+",
    version: "-",
    grade: "A"
  }, {
    engine: "Presto",
    browser: "Opera 9.2",
    platforms: "Win 88+ / OSX.3+",
    version: "-",
    grade: "A"
  }, {
    engine: "Presto",
    browser: "Opera 9.5",
    platforms: "Win 88+ / OSX.3+",
    version: "-",
    grade: "A"
  }, {
    engine: "Presto",
    browser: "Opera for Wii",
    platforms: "Wii",
    version: "-",
    grade: "A"
  }, {
    engine: "Presto",
    browser: "Nokia N800",
    platforms: "N800",
    version: "-",
    grade: "A"
  }, {
    engine: "Presto",
    browser: "Nintendo DS browser",
    platforms: "Nintendo DS",
    version: "8.5",
    grade: "C/A<sup>1</sup>"
  }, {
    engine: "KHTML",
    browser: "Konqureror 3.1",
    platforms: "KDE 3.1",
    version: "3.1",
    grade: "C"
  }, {
    engine: "KHTML",
    browser: "Konqureror 3.3",
    platforms: "KDE 3.3",
    version: "3.3",
    grade: "A"
  }, {
    engine: "KHTML",
    browser: "Konqureror 3.5",
    platforms: "KDE 3.5",
    version: "3.5",
    grade: "A"
  }, {
    engine: "Tasman",
    browser: "Internet Explorer 4.5",
    platforms: "Mac OS 8-9",
    version: "-",
    grade: "X"
  }, {
    engine: "Tasman",
    browser: "Internet Explorer 5.1",
    platforms: "Mac OS 7.6-9",
    version: "1",
    grade: "C"
  }, {
    engine: "Tasman",
    browser: "Internet Explorer 5.2",
    platforms: "Mac OS 8-X",
    version: "1",
    grade: "C"
  }, {
    engine: "Misc",
    browser: "NetFront 3.1",
    platforms: "Embedded devices",
    version: "-",
    grade: "C"
  }, {
    engine: "Misc",
    browser: "NetFront 3.4",
    platforms: "Embedded devices",
    version: "-",
    grade: "A"
  }, {
    engine: "Misc",
    browser: "Dillo 0.8",
    platforms: "Embedded devices",
    version: "-",
    grade: "X"
  }, {
    engine: "Misc",
    browser: "Links",
    platforms: "Text only",
    version: "-",
    grade: "X"
  }, {
    engine: "Misc",
    browser: "Lynx",
    platforms: "Text only",
    version: "-",
    grade: "X"
  }, {
    engine: "Misc",
    browser: "IE Mobile",
    platforms: "Windows Mobile 6",
    version: "-",
    grade: "C"
  }, {
    engine: "Misc",
    browser: "PSP browser",
    platforms: "PSP",
    version: "-",
    grade: "C"
  }, {
    engine: "Other browsers",
    browser: "All others",
    platforms: "-",
    version: "-",
    grade: "U"
  }];

  // DataTable Config
  $("#table1").DataTable({
    columns: [
      { data: null,
        className: "table-view-pf-select",
        render: function (data, type, full, meta) {
          // Select row checkbox renderer
          var id = "select" + meta.row;
          return '<label class="sr-only" for="' + id + '">Select row ' + meta.row +
            '</label><input type="checkbox" id="' + id + '" name="' + id + '">';
        },
        sortable: false
      },
      { data: "engine" },
      { data: "browser" },
      { data: "platforms" },
      { data: "version" },
      { data: "grade"},
      { data: null,
        className: "table-view-pf-actions",
        render: function (data, type, full, meta) {
          // Inline action button renderer
          return '<div class="table-view-pf-btn"><button class="btn btn-default" type="button">Actions</button></div>';
        }
      }, {
        data: null,
        className: "table-view-pf-actions",
        render: function (data, type, full, meta) {
          // Inline action kebab renderer
          return '<div class="dropdown dropdown-kebab-pf">' +
            '<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
            '<span class="fa fa-ellipsis-v"></span></button>' +
            '<ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight">' +
            '<li><a href="#">Action</a></li>' +
            '<li><a href="#">Another action</a></li>' +
            '<li><a href="#">Something else here</a></li>' +
            '<li role="separator" class="divider"></li>' +
            '<li><a href="#">Separated link</a></li></ul></div>';
        }
      }
    ],
    data: dataSet,
    dom: "t",
    language: {
      zeroRecords: "No records found"
    },
    order: [[ 1, 'asc' ]],
    pfConfig: {
      emptyStateSelector: "#emptyState1",
      filterCaseInsensitive: true,
      filterCols: [
        null,
        {
          default: true,
          optionSelector: "#filter1",
          placeholder: "Filter By Rendering Engine..."
        }, {
          optionSelector: "#filter2",
          placeholder: "Filter By Browser..."
        }, {
          optionSelector: "#filter3",
          placeholder: "Filter By Platform(s)..."
        }, {
          optionSelector: "#filter4",
          placeholder: "Filter By Engine Version..."
        }, {
          optionSelector: "#filter5",
          placeholder: "Filter By CSS Grade..."
        }
      ],
      paginationSelector: "#pagination1",
      toolbarSelector: "#toolbar1",
      selectAllSelector: 'th:first-child input[type="checkbox"]',
      colvisMenuSelector: '.table-view-pf-colvis-menu'
    },
    select: {
      selector: 'td:first-child input[type="checkbox"]',
      style: 'multi'
    },
  });

  /**
   * Utility to show empty Table View
   *
   * @param {object} config - Config properties associated with a Table View
   * @param {object} config.data - Data set for DataTable
   * @param {string} config.deleteRowsSelector - Selector for delete rows control
   * @param {string} config.restoreRowsSelector - Selector for restore rows control
   * @param {string} config.tableSelector - Selector for the HTML table
   */
  var emptyTableViewUtil = function (config) {
    var self = this;

    this.dt = $(config.tableSelector).DataTable(); // DataTable
    this.deleteRows = $(config.deleteRowsSelector); // Delete rows control
    this.restoreRows = $(config.restoreRowsSelector); // Restore rows control

    // Handle click on delete rows control
    this.deleteRows.on('click', function() {
      self.dt.clear().draw();
      $(self.restoreRows).prop("disabled", false);
    });

    // Handle click on restore rows control
    this.restoreRows.on('click', function() {
      self.dt.rows.add(config.data).draw();
      $(this).prop("disabled", true);
    });

    // Initialize restore rows
    if (this.dt.data().length === 0) {
      $(this.restoreRows).prop("disabled", false);
    }
  };

  // Initialize empty Table View util
  new emptyTableViewUtil({
    data: dataSet,
    deleteRowsSelector: "#deleteRows1",
    restoreRowsSelector: "#restoreRows1",
    tableSelector: "#table1"
  });

  /**
   * Utility to find items in Table View
   */
  var findTableViewUtil = function (config) {
    // Upon clicking the find button, show the find dropdown content
    $(".btn-find").click(function () {
      $(this).parent().find(".find-pf-dropdown-container").toggle();
    });

    // Upon clicking the find close button, hide the find dropdown content
    $(".btn-find-close").click(function () {
      $(".find-pf-dropdown-container").hide();
    });
  };

  // Initialize find util
  new findTableViewUtil();
  }

  render() {
    return (
<div>
<div className="row toolbar-pf table-view-pf-toolbar" id="toolbar1">
  <div className="col-sm-12">
    <form className="toolbar-pf-actions">
      <div className="form-group toolbar-pf-filter">
        <label className="sr-only" htmlFor="filter33">Rendering Engine</label>
        <div className="input-group">
          <div className="input-group-btn">
            <button type="button" className="btn btn-default dropdown-toggle" id="filter33" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Rendering Engine <span className="caret"></span></button>
            <ul className="dropdown-menu">
              <li><a href="#" id="filter1">Rendering Engine</a></li>
              <li><a href="#" id="filter2">Browser</a></li>
              <li><a href="#" id="filter3">Platform(s)</a></li>
              <li><a href="#" id="filter4">Engine Version</a></li>
              <li><a href="#" id="filter5">CSS Grade</a></li>
            </ul>
          </div>
          <input type="text" className="form-control" placeholder="Filter By Rendering Engine..." autoComplete="off" id="filterInput"/>
        </div>
      </div>
      <div className="form-group">
        <button className="btn btn-default" type="button" id="deleteRows1">Delete Rows</button>
        <button className="btn btn-default" type="button" id="restoreRows1" disabled>Restore Rows</button>
        <div className="dropdown btn-group  dropdown-kebab-pf">
          <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebab55" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <span className="fa fa-ellipsis-v"></span>
          </button>
          <ul className="dropdown-menu " aria-labelledby="dropdownKebab55">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>
      </div>
      <div className="toolbar-pf-action-right">
        <div className="form-group toolbar-pf-find">
          <button className="btn btn-link btn-find" type="button">
            <span className="fa fa-search"></span>
          </button>
          <div className="find-pf-dropdown-container">
            <input type="text" className="form-control" id="find23" placeholder="Find By Keyword..."/>
            <div className="find-pf-buttons">
              <span className="find-pf-nums">1 of 3</span>
              <button className="btn btn-link" type="button">
                <span className="fa fa-angle-up"></span>
              </button>
              <button className="btn btn-link" type="button">
                <span className="fa fa-angle-down"></span>
              </button>
              <button className="btn btn-link btn-find-close" type="button">
                <span className="pficon pficon-close"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div className="row toolbar-pf-results">
      <div className="col-sm-9">
        <div className="hidden">
          <h5>0 Results</h5>
          <p>Active filters:</p>
          <ul className="list-inline"></ul>
          <p><a href="#">Clear All Filters</a></p>
        </div>
      </div>
      <div className="col-sm-3 table-view-pf-select-results">
        <strong>0</strong> of <strong>0</strong> selected
      </div>
    </div>
  </div>
</div>
<table className="table table-striped table-bordered table-hover" id="table1">
  <thead>
  <tr>
    <th><label className="sr-only" htmlFor="selectAll">Select all rows</label><input type="checkbox" id="selectAll" name="selectAll"/></th>
    <th>Rendering Engine</th>
    <th>Browser</th>
    <th>Platform(s)</th>
    <th>Engine Version</th>
    <th>CSS Grade</th>
    <th>Actions</th>
    <th></th>
  </tr>
  </thead>
</table>
<form className="content-view-pf-pagination table-view-pf-pagination clearfix" id="pagination1">
  <div className="form-group">
    <select value="15" readOnly className="selectpicker pagination-pf-pagesize">
      <option value="6">6</option>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="25">25</option>
      <option value="50">50</option>
    </select>
    <span>per page</span>
  </div>
  <div className="form-group">
    <span><span className="pagination-pf-items-current">1-15</span> of <span className="pagination-pf-items-total">75</span></span>
    <ul className="pagination pagination-pf-back">
      <li className="disabled"><a href="#" title="First Page"><span className="i fa fa-angle-double-left"></span></a></li>
      <li className="disabled"><a href="#" title="Previous Page"><span className="i fa fa-angle-left"></span></a></li>
    </ul>
    <label htmlFor="pagination1-page" className="sr-only">Current Page</label>
    <input className="pagination-pf-page" type="text" value="1" id="pagination1-page" readOnly/>
    <span>of <span className="pagination-pf-pages">5</span></span>
    <ul className="pagination pagination-pf-forward">
      <li><a href="#" title="Next Page"><span className="i fa fa-angle-right"></span></a></li>
      <li><a href="#" title="Last Page"><span className="i fa fa-angle-double-right"></span></a></li>
    </ul>
  </div>
</form>
<div className="blank-slate-pf table-view-pf-empty hidden" id="emptyState1">
  <div className="blank-slate-pf-icon">
    <span className="pficon pficon pficon-add-circle-o"></span>
  </div>
  <h1>
    Empty State Title
  </h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
  <p>
    Learn more about this <a href="#">on the documentation</a>.
  </p>
  <div className="blank-slate-pf-main-action">
    <button className="btn btn-primary btn-lg"> Main Action </button>
  </div>
  <div className="blank-slate-pf-secondary-action">
    <button className="btn btn-default"> Secondary Action </button> <button className="btn btn-default"> Secondary Action </button> <button className="btn btn-default"> Secondary Action </button>
  </div>
</div>
</div>
    );
  }
};