module.exports = [{
  label: 'dashboard',
  url: 'dist/tests/dashboard.html',
  removeSelectors: [
    '.page-header + .alert',
    '.toast-notifications-list-pf'
  ],
  disabled: false
}]
