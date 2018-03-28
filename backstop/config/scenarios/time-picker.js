module.exports = [{
  removeSelectors: ['.page-header + .alert'],
  label: 'time-picker',
  url: 'dist/tests/time-picker.html',
  disabled: false
}, {
  label: 'time-picker-show-picker',
  url: 'dist/tests/time-picker.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '#timepicker1',
  onReadyScript: 'chromy/time-picker.js',
  misMatchThreshold: 3.0
}]
