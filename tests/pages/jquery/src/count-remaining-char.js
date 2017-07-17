// Initialize Count Remaining Characters
(function($) {
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
})(jQuery);
