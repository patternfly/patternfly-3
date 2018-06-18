module.exports = [
  {
    removeSelectors: ['.page-header + .alert'],
    label: 'message-dialogs',
    url: 'dist/tests/message-dialogs.html',
    disabled: false
  },
  {
    label: 'message-dialog-non-destructive',
    url: 'dist/tests/message-dialogs.html',
    removeSelectors: ['.page-header + .alert'],
    clickSelector: '[data-target="#message-dialog-1"]',
    selectors: ['body']
  },
  {
    label: 'message-dialog-error',
    url: 'dist/tests/message-dialogs.html',
    removeSelectors: ['.page-header + .alert'],
    clickSelector: '[data-target="#message-dialog-2"]',
    selectors: ['body']
  },
  {
    label: 'message-dialog-delete',
    url: 'dist/tests/message-dialogs.html',
    removeSelectors: ['.page-header + .alert'],
    clickSelector: '[data-target="#message-dialog-3"]',
    selectors: ['body']
  },
  {
    label: 'message-dialog-warning',
    url: 'dist/tests/message-dialogs.html',
    removeSelectors: ['.page-header + .alert'],
    clickSelector: '[data-target="#message-dialog-4"]',
    selectors: ['body']
  },
  {
    label: 'message-dialog-question',
    url: 'dist/tests/message-dialogs.html',
    removeSelectors: ['.page-header + .alert'],
    clickSelector: '[data-target="#message-dialog-5"]',
    selectors: ['body']
  },
  {
    label: 'message-dialog',
    url: 'dist/tests/message-dialogs.html',
    removeSelectors: ['.page-header + .alert'],
    clickSelector: '[data-target="#message-dialog-6"]',
    selectors: ['body']
  },
  {
    label: 'message-dialog-success',
    url: 'dist/tests/message-dialogs.html',
    removeSelectors: ['.page-header + .alert'],
    clickSelector: '[data-target="#message-dialog-7"]',
    selectors: ['body']
  }
];
