module.exports = [{
  removeSelectors: ['.page-header + .alert'],
  label: 'wizard',
  url: 'dist/tests/wizard.html',
  disabled: false
}, {
  label: 'wizard-first-step',
  url: 'dist/tests/wizard.html',
  removeSelectors: ['.page-header + .alert'],
  selectors: ['body'],
  clickSelector: '[data-target="#complete"]',
  postInteractionWait: 3000
}, {
  label: 'wizard-initializing',
  url: 'dist/tests/wizard.html',
  removeSelectors: ['.page-header + .alert'],
  selectors: ['body'],
  clickSelector: '[data-target="#initializing"]'
}, {
  label: 'wizard-last-step',
  url: 'dist/tests/wizard.html',
  removeSelectors: ['.page-header + .alert'],
  selectors: ['body'],
  clickSelector: '[data-target="#done"]'
}]
