module.exports = [{
  removeSelectors: ['.page-header + .alert'],
  label: 'about-modal',
  url: 'dist/tests/about-modal.html',
  disabled: false
}, {
  label: 'about-modal-show-modal',
  url: 'dist/tests/about-modal.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '[data-target="#about-modal-1"]',
  selectors: ['body']
}]
