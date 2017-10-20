import React from 'react';

export default class Search extends React.Component {
  componentDidMount() {
    // Hide the clear button if the search input is empty
    $(".search-pf .has-clear .clear").each(function() {
      if (!$(this).prev('.form-control').val()) {
        $(this).hide();
      }
    });
    // Show the clear button upon entering text in the search input
    $(".search-pf .has-clear .form-control").keyup(function () {
      var t = $(this);
      t.next('button').toggle(Boolean(t.val()));
    });
    // Upon clicking the clear button, empty the entered text and hide the clear button
    $(".search-pf .has-clear .clear").click(function () {
      $(this).prev('.form-control').val('').focus();
      $(this).hide();
    });
  }

  render() {
    return (
      <form role="form" className="search-pf has-button">
        <div className="form-group has-clear">
          <div className="search-pf-input-group">
            <label for="search1" className="sr-only">Search</label>
            <input id="search1" type="search" className="form-control" placeholder="Search"/>
            <button type="button" className="clear" aria-hidden="true" style={{display: 'none'}}><span class="pficon pficon-close"></span></button>
          </div>
        </div>
        <div className="form-group">
          <button className="btn btn-default" type="submit"><span className="fa fa-search"></span></button>
        </div>
      </form>
    );
  }
};