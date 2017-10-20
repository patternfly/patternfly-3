For official documentation, see [https://www.patternfly.org](https://www.patternfly.org) and [http://getbootstrap.com](http://getbootstrap.com).

#### html source code

```html
<div class="table-responsive">
  <table class="table table-bordered table-hover table-treegrid">
    <thead>
    <tr>
      <th>Column heading</th>
      <th>Column heading</th>
      <th>Column heading</th>
      <th>Column heading</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td class="treegrid-node">
        <span class="icon node-icon fa fa-folder"></span>
        Parent 1
      </td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr data-parent="0">
      <td class="treegrid-node">
        <span class="icon node-icon fa fa-file-o"></span>
        Child 1
      </td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr data-parent="1">
      <td class="treegrid-node">
        <span class="icon node-icon fa fa-file-o"></span>
        Grandchild 1
      </td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr data-parent="1">
      <td class="treegrid-node">
        <span class="icon node-icon fa fa-file-o"></span>
        Grandchild 2
      </td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr data-parent="1">
      <td class="treegrid-node">
        <span class="icon node-icon fa fa-file-o"></span>
        Grandchild 3
      </td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr data-parent="0">
      <td class="treegrid-node">
        <span class="icon node-icon fa fa-file-o"></span>
        Child 2
      </td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr>
      <td class="treegrid-node">
        <span class="icon node-icon fa fa-folder"></span>
        Parent 2
      </td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr id="parent-3">
      <td class="treegrid-node">
        <span class="icon node-icon fa fa-folder"></span>
        Parent 3
      </td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr data-parent="#parent-3">
      <td class="treegrid-node">
        <span class="icon node-icon fa fa-file-o"></span>
        Child 3
      </td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr id="parent-4" class="collapsed">
      <td class="treegrid-node">
        <span class="icon node-icon fa fa-folder"></span>
        Parent 4
      </td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr data-parent="#parent-4" id="child-4">
      <td class="treegrid-node">
        <span class="icon node-icon fa fa-file-o"></span>
        Child 4
      </td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr data-parent="#child-4">
      <td class="treegrid-node">
        <span class="icon node-icon fa fa-file-o"></span>
        Grandchild 4
      </td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    </tbody>
  </table>
</div>
```

#### js source code

```js
// Initialize TreeGrid Table
$('.table-treegrid').treegrid();
```