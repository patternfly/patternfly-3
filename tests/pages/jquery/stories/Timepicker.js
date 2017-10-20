import React from 'react';

export default class Timepicker extends React.Component {
  componentDidMount() {
    let that = this;
    this.$el = $(this.el);
    this.$el.datetimepicker({
      format: 'LT',
      keyBinds: {
        enter: function () {
          that.$el.find('input').trigger('change');
          this.hide();
        }
      }
    });
    this.$el.data('DateTimePicker').clear();
  }

  render() {
    return (
      <div ref={el => this.el = el} className="input-group time-picker-pf">
        <input type="text" className="form-control"/>
        <span className="input-group-addon btn btn-default">
          <span className="fa fa-clock-o"></span>
        </span>
      </div>
    );
  }
};