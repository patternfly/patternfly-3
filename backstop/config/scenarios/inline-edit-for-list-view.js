module.exports = [{
  label: 'inline-edit-list-view',
  url: 'dist/tests/inline-edit-for-list-view.html',
  removeSelectors: ['.page-header + .alert']
}, {
  label: 'inline-edit-list-view-edit-item',
  url: 'dist/tests/inline-edit-for-list-view.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '.list-view-pf-create + .list-view-pf-editable .list-view-pf-edit'
}, {
  label: 'inline-edit-list-view-create-item',
  url: 'dist/tests/inline-edit-for-list-view.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '#add-a-row'
}]
