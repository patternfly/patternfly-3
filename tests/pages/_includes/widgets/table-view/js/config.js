// DataTable Config
var dt = $('table').DataTable({
  columns: [
    { data: null,
      className: "table-view-pf-select",
      render: function (data, type, full, meta) {
        // Select row checkbox renderer
        return '<label class="sr-only">Select row ' + meta.row + '</label><input type="checkbox" name="select">';
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
        return '<button class="btn btn-default" type="button">Actions</button>';
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
  select: {
    allSelector: 'th:first-child input[type="checkbox"]',
    selector: 'td:first-child input[type="checkbox"]',
    style: 'multi'
  }
});
