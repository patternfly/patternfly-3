module.exports = [{
  removeSelectors: ['.page-header + .alert'],
  label: 'tabs',
  url: 'dist/tests/tabs.html',
  disabled: false
}, {
  label: 'tabs-with-dropdown',
  url: 'dist/tests/tabs.html',
  onReadyScript: 'chromy/tabs.js',
  selectors: ['#tabs-with-dropdown-wrapper']
}, {
  label: 'tabs-pf-with-dropdown',
  url: 'dist/tests/tabs.html',
  onReadyScript: 'chromy/tabs.js',
  selectors: ['#tabs-pf-with-dropdown-wrapper']
}]
