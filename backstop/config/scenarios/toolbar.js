module.exports = [{
  removeSelectors: ['.page-header + .alert'],
  label: 'toolbar',
  url: 'dist/tests/toolbar.html',
  disabled: false
}, {
  label: 'toolbar-input-filter-button',
  url: 'dist/tests/toolbar.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '#input-filter-button'
}, {
  label: 'toolbar-filter-button',
  url: 'dist/tests/toolbar.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '#filter-button'
}, {
  label: 'toolbar-dropdownKebab',
  url: 'dist/tests/toolbar.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '#dropdownKebab'
}, {
  label: 'toolbar-find-button',
  url: 'dist/tests/toolbar.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '.btn-find'
}]
