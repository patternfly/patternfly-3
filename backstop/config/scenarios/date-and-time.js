module.exports = [{
  removeSelectors: ['.page-header + .alert'],
  label: 'date-and-time',
  url: 'dist/tests/date-and-time.html'
}, {
  label: 'date-and-time-date-picker',
  url: 'dist/tests/date-and-time.html',
  removeSelectors: ['.container > *:not(#date-picker-wrapper)'],
  selectors: ['#date-picker-wrapper'],
  onReadyScript: 'chromy/date-and-time.js'
}, {
  label: 'date-and-time-time-picker',
  url: 'dist/tests/date-and-time.html',
  removeSelectors: ['.container > *:not(#time-picker-wrapper)'],
  selectors: ['#time-picker-wrapper'],
  onReadyScript: 'chromy/date-and-time.js'
}, {
  label: 'date-and-time-date-time-picker',
  url: 'dist/tests/date-and-time.html',
  removeSelectors: ['.container > *:not(#date-time-picker-wrapper)'],
  selectors: ['#date-time-picker-wrapper'],
  onReadyScript: 'chromy/date-and-time.js'
}, {
  label: 'date-and-time-date-range-picker',
  url: 'dist/tests/date-and-time.html',
  removeSelectors: ['.container > *:not(#date-range-picker-wrapper)'],
  selectors: ['#date-range-picker-wrapper'],
  onReadyScript: 'chromy/date-and-time.js'
}]
