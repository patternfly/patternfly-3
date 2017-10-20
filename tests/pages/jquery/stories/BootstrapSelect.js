import React from 'react';

export default class BootstrapSelect extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);
    this.$el.selectpicker();
  }

  render() {
    return (
      <select ref={el => this.el = el} className="selectpicker">
        <option>Mustard</option>
        <option>Ketchup</option>
        <option>Relish</option>
        <option disabled>Onions</option>
      </select>
    );
  }
};