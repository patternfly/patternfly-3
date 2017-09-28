import React from 'react';

export default class Popover extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);
    this.$el.popovers();
  }

  render() {
    return (
      <a ref={el => this.el = el} href="#" className="btn btn-default" data-toggle="popover" data-html="true" title="1 http smartproxy 1 http http http" data-content="This is more information about a smartproxy. This is more information about a smartproxy. This is more information about a smartproxy. This is more information about a smartproxy." data-close="true">Click to toggle popover</a>
    );
  }
};