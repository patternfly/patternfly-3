import React from 'react';

export default class Tooltip extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);
    this.$el.tooltip({
      container: 'body'
    });
  }

  render() {
    return (
      <button ref={el => this.el = el} type="button" className="btn btn-default" data-toggle="tooltip" data-placement="top" title="" data-original-title="Tooltip on top">Tooltip on top</button>
    );
  }
};