See [https://github.com/patternfly/patternfly-bootstrap-treeview](https://github.com/patternfly/patternfly-bootstrap-treeview) for complete Bootstrap Tree View documentation.

#### html source code

```html
<div id="treeview1"></div>
```

#### third-party js
```html
<script src="../node_modules/patternfly-bootstrap-treeview/dist/bootstrap-treeview.min.js"></script>
```

#### js source code

```js
// Initialize Bootstrap-treeview
$(function() {
  var defaultData = [
    {
      text: 'Parent 1',
      href: '#parent1',
      tags: ['4'],
      nodes: [
        {
          text: 'Child 1',
          href: '#child1',
          icon: 'fa fa-file-o',
          tags: ['2'],
          nodes: [
            {
              text: 'Grandchild 1',
              href: '#grandchild1',
              icon: 'fa fa-file-o',
              tags: ['0']
            },
            {
              text: 'Grandchild 2',
              href: '#grandchild2',
              icon: 'fa fa-file-o',
              tags: ['0']
            }
          ]
        },
        {
          text: 'Child 2',
          href: '#child2',
          icon: 'fa fa-file-o',
          tags: ['0']
        }
      ]
    },
    {
      text: 'Parent 2',
      href: '#parent2',
      tags: ['0']
    },
    {
      text: 'Parent 3',
      href: '#parent3',
      tags: ['0']
    },
    {
      text: 'Parent 4',
      href: '#parent4',
      tags: ['0']
    },
    {
      text: 'Parent 5',
      href: '#parent5'  ,
      tags: ['0']
    }
  ];

  $('#treeview1').treeview({
    collapseIcon: "fa fa-angle-down",
    data: defaultData,
    expandIcon: "fa fa-angle-right",
    nodeIcon: "fa fa-folder",
    showBorder: false
  });
});
```