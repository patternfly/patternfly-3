module.exports = [{
  removeSelectors: ['.page-header + .alert'],
  label: 'navbar',
  url: 'dist/tests/navbar.html',
  disabled: false
}, {
  label: 'navbar-primary-utility-menu1',
  url: 'dist/tests/navbar.html',
  onReadyScript: 'chromy/navbar.js',
  removeSelectors: ['.container > *:not(#primary-navbar)'],
  selectors: ['.container'],
  clickSelector: '#dropdownMenu3'
}, {
  label: 'navbar-primary-utility-menu2',
  url: 'dist/tests/navbar.html',
  onReadyScript: 'chromy/navbar.js',
  removeSelectors: ['.container > *:not(#primary-navbar)'],
  selectors: ['.container'],
  clickSelector: '#navbar-utility-menu',
  hoverSelector: '#navbar-utility-menu + .dropdown-menu .dropdown-submenu > :first-child',
  misMatchThreshold: 7.30
}, {
  label: 'navbar-context-selector',
  url: 'dist/tests/navbar.html',
  onReadyScript: 'chromy/navbar.js',
  removeSelectors: ['.container > *:not(#context-selector-navbar)'],
  selectors: ['.container'],
  clickSelector: '#context-selector-navbar .context button:first-of-type'
}, {
  label: 'navbar-multi-level-menu-without-submenu',
  url: 'dist/tests/navbar.html',
  onReadyScript: 'chromy/navbar.js',
  removeSelectors: ['.container > *:not(#multi-level-menu-navbar1)'],
  selectors: ['.container'],
  clickSelector: '#multi-level-menu-navbar1 .navbar-primary>:first-child .dropdown-toggle'
}, {
  label: 'navbar-multi-level-menu-submenu',
  url: 'dist/tests/navbar.html',
  onReadyScript: 'chromy/navbar.js',
  removeSelectors: ['.container > *:not(#multi-level-menu-navbar1)'],
  selectors: ['.container'],
  clickSelector: '#multi-level-menu-submenu',
  hoverSelector: '#multi-level-menu-submenu + .dropdown-menu .dropdown-submenu > :first-child'
}, {
  label: 'navbar-multi-level-menu-dropup-submenu',
  url: 'dist/tests/navbar.html',
  onReadyScript: 'chromy/navbar.js',
  removeSelectors: ['.container > *:not(#multi-level-menu-navbar1)'],
  selectors: ['.container'],
  clickSelector: '#multi-level-menu-dropup-submenu',
  hoverSelector: '#multi-level-menu-dropup-submenu + .dropdown-menu .dropdown-submenu > :first-child'
}, {
  label: 'navbar-multi-level-menu-pull-left-submenu',
  url: 'dist/tests/navbar.html',
  onReadyScript: 'chromy/navbar.js',
  removeSelectors: ['.container > *:not(#multi-level-menu-navbar1)'],
  selectors: ['.container'],
  clickSelector: '#multi-level-menu-pull-left-submenu',
  hoverSelector: '#multi-level-menu-pull-left-submenu + .dropdown-menu .dropdown-submenu > :first-child'
}, {
  label: 'navbar-multi-level-menu-submenu-default-selected',
  url: 'dist/tests/navbar.html',
  onReadyScript: 'chromy/navbar.js',
  removeSelectors: ['.container > *:not(#multi-level-menu-navbar3)'],
  selectors: ['.container'],
  clickSelector: '#multi-level-menu-default-selected',
  hoverSelector: '#multi-level-menu-default-selected + .dropdown-menu .dropdown-submenu > :first-child'
}, {
  label: 'navbar-tertiary-menu',
  url: 'dist/tests/navbar.html',
  onReadyScript: 'chromy/navbar.js',
  removeSelectors: ['.container > *:not(#tertiary-menu-navbar)'],
  selectors: ['.container'],
  clickSelector: '#tertiary-menu-navbar .dropdown-submenu.active .dropdown-toggle'
}, {
  label: 'navbar-tertiary-menu-submenu',
  url: 'dist/tests/navbar.html',
  onReadyScript: 'chromy/navbar.js',
  removeSelectors: ['.container > *:not(#tertiary-with-submenu-navbar1)'],
  selectors: ['.container'],
  clickSelector: '#tertiary-with-submenu',
  hoverSelector: '#tertiary-with-submenu + .dropdown-menu .dropdown-submenu > :first-child'
}, {
  label: 'navbar-tertiary-menu-submenu-default-selected',
  url: 'dist/tests/navbar.html',
  onReadyScript: 'chromy/navbar.js',
  removeSelectors: ['.container > *:not(#tertiary-with-submenu-navbar2)'],
  selectors: ['.container'],
  clickSelector: '#tertiary-with-default-selected-submenu'
}]
