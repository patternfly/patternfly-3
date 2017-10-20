**Note:** By default blockInputAtMaxLimit is false, meaning that after reaching the maximum number of characters specified, the user can still enter additional characters; the remaining character count will turn negative. When blockInputAtMaxLimit is true, the user will be blocked from entering more characters after reaching the maximum character limit. The remaining character count will stop at 0. When blockInputAtMaxLimit is true, Right-Click 'paste' will only paste characters until the maximum character limit is reached.

#### html source code

```html
<form>
  <div class="form-group">
    <label for="messageArea"></label>
    <textarea class="form-control" id="messageArea" name="text" placeholder="Type in your message" rows="5"></textarea>
  </div>
  <span class="pull-right chars-remaining-pf">
    <span id="charRemainingCntFld"></span>
    <button id="postBtn" type="submit" class="btn btn-default">Post New Message</button>
  </span>
</form>

```

#### js source code

```js
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
```