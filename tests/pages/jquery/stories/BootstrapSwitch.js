import React from 'react';

export default class BootstrapSwitch extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);
    this.$el.bootstrapSwitch();
  }

  render() {
    return (
      <input ref={el => this.el = el} className="bootstrap-switch" type="checkbox" defaultChecked/>
    );
  }
};