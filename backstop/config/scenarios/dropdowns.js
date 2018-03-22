module.exports = [{
  removeSelectors: ['.page-header + .alert'],
  label: 'dropdowns',
  url: 'dist/tests/dropdowns.html',
  disabled: false
}, {
  label: 'dropdowns-show-dropdownMenu1',
  url: 'dist/tests/dropdowns.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '#dropdownMenu1'
}, {
  label: 'dropdowns-show-dropdownMenu2',
  url: 'dist/tests/dropdowns.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '#dropdownMenu2'
}, {
  label: 'dropdowns-show-dropdownKebab',
  url: 'dist/tests/dropdowns.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '#dropdownKebab'
}, {
  label: 'dropdowns-show-dropdownKebabRight',
  url: 'dist/tests/dropdowns.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '#dropdownKebabRight'
}, {
  label: 'dropdowns-show-dropupKebab',
  url: 'dist/tests/dropdowns.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '#dropupKebab'
}, {
  label: 'dropdowns-show-dropupKebabRight1',
  url: 'dist/tests/dropdowns.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '#dropupKebabRight1'
}, {
  label: 'dropdowns-show-dropdownKebabGroup',
  url: 'dist/tests/dropdowns.html',
  selectors: ['body'],
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '#dropdownKebabGroup'
}, {
  label: 'dropdowns-show-dropdownKebabGroupRight',
  url: 'dist/tests/dropdowns.html',
  selectors: ['body'],
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '#dropdownKebabGroupRight'
}]
