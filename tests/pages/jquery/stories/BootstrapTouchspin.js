import React from 'react';

export default class BootstrapTouchspin extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);
    this.$el.TouchSpin();
  }

  render() {
    return (
        <input ref={el => this.el = el} className="bootstrap-touchspin" type="text" value="" name="bootstrap-touchspin-empty"/>
    );
  }
};