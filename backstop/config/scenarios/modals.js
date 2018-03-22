module.exports = [{
  removeSelectors: ['.page-header + .alert'],
  label: 'modals',
  url: 'dist/tests/modals.html',
  disabled: false
}, {
  label: 'modals-show-modal',
  url: 'dist/tests/modals.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '[data-target="#myModal"]',
  selectors: ['body']
}]
