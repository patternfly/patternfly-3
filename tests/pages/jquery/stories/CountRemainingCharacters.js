import React from 'react';

export default class CountRemainingCharacters extends React.Component {
  componentDidMount() {
    // countFld is the id of the field where you want the 'remaining chars. count' number
    // to be displayed.
    $('#messageArea').countRemainingChars( {
      countFld: 'charRemainingCntFld',
      charsMaxLimit: 100,
      charsWarnRemaining: 5,
      blockInputAtMaxLimit: false} );

    // taId is the id of the textArea field which triggered the event
    $('#messageArea').on("overCharsMaxLimitEvent", function( event, taId ) {
      $('#postBtn').prop("disabled",true);
    });
    $('#messageArea').on("underCharsMaxLimitEvent", function( event, taId) {
      $('#postBtn').prop("disabled",false);
    });
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="messageArea"></label>
          <textarea className="form-control" id="messageArea" name="text" placeholder="Type in your message" rows="5"></textarea>
        </div>
        <span className="pull-right chars-remaining-pf">
          <span id="charRemainingCntFld"></span>
          <button id="postBtn" type="submit" className="btn btn-default">Post New Message</button>
        </span>
      </form>
    );
  }
};