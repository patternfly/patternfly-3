import React from 'react';

export default class BootstrapTreeView extends React.Component {
  componentDidMount() {
    let defaultData = [
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

  this.$el = $(this.el);
  this.$el.treeview({
    collapseIcon: "fa fa-angle-down",
    data: defaultData,
    expandIcon: "fa fa-angle-right",
    nodeIcon: "fa fa-folder",
    showBorder: false
  });
  }

  render() {
    return (
      <div ref={el => this.el = el}></div>
    );
  }
};