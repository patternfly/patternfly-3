module.exports = [{
  removeSelectors: ['.page-header + .alert'],
  label: 'filter',
  url: 'dist/tests/filter.html',
  disabled: false
}, {
  label: 'filter-input',
  url: 'dist/tests/filter.html',
  onReadyScript: 'chromy/filter.js',
  selectors: ['#input-filters']
}, {
  label: 'filter-select-dropdown1',
  url: 'dist/tests/filter.html',
  onReadyScript: 'chromy/filter.js',
  selectors: ['#select-filters']
}, {
  label: 'filter-select-dropdown2',
  url: 'dist/tests/filter.html',
  onReadyScript: 'chromy/filter.js',
  selectors: ['#select-filters']
}, {
  label: 'filter-category-dropdown1',
  url: 'dist/tests/filter.html',
  onReadyScript: 'chromy/filter.js',
  selectors: ['#category-filters']
}, {
  label: 'filter-category-dropdown2',
  url: 'dist/tests/filter.html',
  onReadyScript: 'chromy/filter.js',
  selectors: ['#category-filters']
}, {
  label: 'filter-category-dropdown3',
  url: 'dist/tests/filter.html',
  onReadyScript: 'chromy/filter.js',
  selectors: ['#category-filters']
}]
