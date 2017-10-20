import React from 'react';

export default class TreeGridTable extends React.Component {
  componentDidMount() {
    $('.table-treegrid').treegrid();
  }

  render() {
    return (
<div className="table-responsive">
  <table className="table table-bordered table-hover table-treegrid">
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
      <td className="treegrid-node">
        <span className="icon node-icon fa fa-folder"></span>
        Parent 1
      </td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr data-parent="0">
      <td className="treegrid-node">
        <span className="icon node-icon fa fa-file-o"></span>
        Child 1
      </td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr data-parent="1">
      <td className="treegrid-node">
        <span className="icon node-icon fa fa-file-o"></span>
        Grandchild 1
      </td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr data-parent="1">
      <td className="treegrid-node">
        <span className="icon node-icon fa fa-file-o"></span>
        Grandchild 2
      </td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr data-parent="1">
      <td className="treegrid-node">
        <span className="icon node-icon fa fa-file-o"></span>
        Grandchild 3
      </td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr data-parent="0">
      <td className="treegrid-node">
        <span className="icon node-icon fa fa-file-o"></span>
        Child 2
      </td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr>
      <td className="treegrid-node">
        <span className="icon node-icon fa fa-folder"></span>
        Parent 2
      </td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr id="parent-3">
      <td className="treegrid-node">
        <span className="icon node-icon fa fa-folder"></span>
        Parent 3
      </td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr data-parent="#parent-3">
      <td className="treegrid-node">
        <span className="icon node-icon fa fa-file-o"></span>
        Child 3
      </td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr id="parent-4" className="collapsed">
      <td className="treegrid-node">
        <span className="icon node-icon fa fa-folder"></span>
        Parent 4
      </td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr data-parent="#parent-4" id="child-4">
      <td className="treegrid-node">
        <span className="icon node-icon fa fa-file-o"></span>
        Child 4
      </td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    <tr data-parent="#child-4">
      <td className="treegrid-node">
        <span className="icon node-icon fa fa-file-o"></span>
        Grandchild 4
      </td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
    </tbody>
  </table>
</div>
    );
  }
};