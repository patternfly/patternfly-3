module.exports = [{
  label: 'inline-edit-form',
  url: 'dist/tests/inline-edit-for-form.html',
  removeSelectors: ['.page-header + .alert']
}, {
  label: 'inline-edit-form-edit-name',
  url: 'dist/tests/inline-edit-for-form.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '#name-field .form-control-pf-value'
}, {
  label: 'inline-edit-form-edit-gender',
  url: 'dist/tests/inline-edit-for-form.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '#gender-field .form-control-pf-value'
}, {
  label: 'inline-edit-form-edit-depart',
  url: 'dist/tests/inline-edit-for-form.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '#depart-field .form-control-pf-value'
}, {
  label: 'inline-edit-form-edit-hiredate',
  url: 'dist/tests/inline-edit-for-form.html',
  removeSelectors: ['.page-header + .alert'],
  selectors: ['body'],
  clickSelector: '#hiredate-field .form-control-pf-value'
}, {
  label: 'inline-edit-form-edit-interests',
  url: 'dist/tests/inline-edit-for-form.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '#interests-field .form-control-pf-value'
}, {
  label: 'inline-edit-form-edit-profile',
  url: 'dist/tests/inline-edit-for-form.html',
  removeSelectors: ['.page-header + .alert'],
  clickSelector: '#profile-field .form-control-pf-value'
}]
