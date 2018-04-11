module.exports = [{
  removeSelectors: ['.page-header + .alert'],
  label: 'popovers',
  url: 'dist/tests/popovers.html',
  disabled: false
}, {
  label: 'popovers-right-title-close',
  url: 'dist/tests/popovers.html',
  onReadyScript: 'chromy/popovers.js',
  removeSelectors: ['.container > *:not(#popover-right-title-close)'],
  selectors: ['#popover-right-title-close']
}, {
  label: 'popovers-right-close',
  url: 'dist/tests/popovers.html',
  onReadyScript: 'chromy/popovers.js',
  removeSelectors: ['.container > *:not(#popover-right-close)'],
  selectors: ['#popover-right-close']
}, {
  label: 'popovers-right-title',
  url: 'dist/tests/popovers.html',
  onReadyScript: 'chromy/popovers.js',
  removeSelectors: ['.container > *:not(#popover-right-title)'],
  selectors: ['#popover-right-title']
}, {
  label: 'popovers-right',
  url: 'dist/tests/popovers.html',
  onReadyScript: 'chromy/popovers.js',
  removeSelectors: ['.container > *:not(#popover-right)'],
  selectors: ['#popover-right']
}, 
{
  label: 'popovers-left-title-close',
  url: 'dist/tests/popovers.html',
  onReadyScript: 'chromy/popovers.js',
  removeSelectors: ['.container > *:not(#popover-left-title-close)'],
  selectors: ['#popover-left-title-close']
}, {
  label: 'popovers-left-close',
  url: 'dist/tests/popovers.html',
  onReadyScript: 'chromy/popovers.js',
  removeSelectors: ['.container > *:not(#popover-left-close)'],
  selectors: ['#popover-left-close']
}, {
  label: 'popovers-left-title',
  url: 'dist/tests/popovers.html',
  onReadyScript: 'chromy/popovers.js',
  removeSelectors: ['.container > *:not(#popover-left-title)'],
  selectors: ['#popover-left-title']
}, {
  label: 'popovers-left',
  url: 'dist/tests/popovers.html',
  onReadyScript: 'chromy/popovers.js',
  removeSelectors: ['.container > *:not(#popover-left)'],
  selectors: ['#popover-left']
}, {
  label: 'popovers-top-title-close',
  url: 'dist/tests/popovers.html',
  onReadyScript: 'chromy/popovers.js',
  removeSelectors: ['.container > *:not(#popover-top-title-close)'],
  selectors: ['#popover-top-title-close']
}, {
  label: 'popovers-top-close',
  url: 'dist/tests/popovers.html',
  onReadyScript: 'chromy/popovers.js',
  removeSelectors: ['.container > *:not(#popover-top-close)'],
  selectors: ['#popover-top-close']
}, {
  label: 'popovers-top-title',
  url: 'dist/tests/popovers.html',
  onReadyScript: 'chromy/popovers.js',
  removeSelectors: ['.container > *:not(#popover-top-title)'],
  selectors: ['#popover-top-title']
}, {
  label: 'popovers-top',
  url: 'dist/tests/popovers.html',
  onReadyScript: 'chromy/popovers.js',
    removeSelectors: ['.container > *:not(#popover-top)'],
  selectors: ['#popover-top']
}, {
  label: 'popovers-bottom-title-close',
  url: 'dist/tests/popovers.html',
  onReadyScript: 'chromy/popovers.js',
  removeSelectors: ['.container > *:not(#popover-bottom-title-close)'],
  selectors: ['#popover-bottom-title-close']
}, {
  label: 'popovers-bottom-close',
  url: 'dist/tests/popovers.html',
  onReadyScript: 'chromy/popovers.js',
  removeSelectors: ['.container > *:not(#popover-bottom-close)'],
  selectors: ['#popover-bottom-close']
}, {
  label: 'popovers-bottom-title',
  url: 'dist/tests/popovers.html',
  onReadyScript: 'chromy/popovers.js',
  removeSelectors: ['.container > *:not(#popover-bottom-title)'],
  selectors: ['#popover-bottom-title']
}, {
  label: 'popovers-bottom',
  url: 'dist/tests/popovers.html',
  onReadyScript: 'chromy/popovers.js',
  removeSelectors: ['.container > *:not(#popover-bottom)'],
  selectors: ['#popover-bottom']
}, {
  label: 'popovers-field-level-help',
  url: 'dist/tests/popovers.html',
  onReadyScript: 'chromy/popovers.js',
  removeSelectors: ['.container > *:not(.form-horizontal)'],
  selectors: ['.form-horizontal']
}]
