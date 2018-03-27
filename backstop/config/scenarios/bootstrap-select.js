module.exports = [{
  removeSelectors: ['.page-header + .alert'],
  label: 'bootstrap-select',
  url: 'dist/tests/bootstrap-select.html',
  disabled: false
}, {
  label: 'bootstrap-select-single-select',
  url: 'dist/tests/bootstrap-select.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '#single-select-field .dropdown-toggle'
}, {
  label: 'bootstrap-select-option-groups',
  url: 'dist/tests/bootstrap-select.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '#option-groups-field .dropdown-toggle'
}, {
  label: 'bootstrap-select-multiple-select',
  url: 'dist/tests/bootstrap-select.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '#multiple-select-field .dropdown-toggle'
}, {
  label: 'bootstrap-select-data-live-search',
  url: 'dist/tests/bootstrap-select.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '#data-live-search-field .dropdown-toggle'
}, {
  label: 'bootstrap-select-icons',
  url: 'dist/tests/bootstrap-select.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '#icons-field .dropdown-toggle'
}, {
  label: 'bootstrap-select-with-help-text',
  url: 'dist/tests/bootstrap-select.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '#with-help-text-field .dropdown-toggle'
}, {
  label: 'bootstrap-select-with-success-state',
  url: 'dist/tests/bootstrap-select.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '#with-success-state-field .dropdown-toggle'
}, {
  label: 'bootstrap-select-with-warning-state',
  url: 'dist/tests/bootstrap-select.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '#with-warning-state-field .dropdown-toggle'
}, {
  label: 'bootstrap-select-with-error-state',
  url: 'dist/tests/bootstrap-select.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '#with-error-state-field .dropdown-toggle'
}]
