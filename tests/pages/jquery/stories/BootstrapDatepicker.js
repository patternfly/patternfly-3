import React from 'react';

export default class BootstrapDatepicker extends React.Component {
  componentDidMount() {
  	this.$el = $(this.el);
  	this.$el.datepicker({
      autoclose: true,
      orientation: "top auto",
      todayBtn: "linked",
      todayHighlight: true
    });
  }

  render() {
    return (
      <div ref={el => this.el = el} className="input-group date">
        <input type="text" className="form-control bootstrap-datepicker" readOnly=""/>
        <span className="input-group-addon">
          <span className="fa fa-calendar"></span>
        </span>
      </div>
    );
  }
};