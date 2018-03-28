module.exports = [{
  removeSelectors: ['.page-header + .alert'],
  label: 'tooltip',
  url: 'dist/tests/tooltip.html',
  disabled: false
}, {
  label: 'tooltip-default-tooltip',
  url: 'dist/tests/tooltip.html',
  removeSelectors: ['.page-header + .alert'],
  hoverSelector: 'a[data-toggle="tooltip"]'
}, {
  label: 'tooltip-on-left',
  url: 'dist/tests/tooltip.html',
  removeSelectors: ['.page-header + .alert'],
  hoverSelector: '[data-placement="left"]'
}, {
  label: 'tooltip-on-top',
  url: 'dist/tests/tooltip.html',
  removeSelectors: ['.page-header + .alert'],
  hoverSelector: '[data-placement="top"]'
}, {
  label: 'tooltip-on-bottom',
  url: 'dist/tests/tooltip.html',
  removeSelectors: ['.page-header + .alert'],
  hoverSelector: '[data-placement="bottom"]'
}, {
  label: 'tooltip-on-right',
  url: 'dist/tests/tooltip.html',
  removeSelectors: ['.page-header + .alert'],
  hoverSelector: '[data-placement="right"]'
}]
