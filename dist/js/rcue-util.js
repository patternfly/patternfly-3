// RCUE Namespace
var RCUE = RCUE || {};


// Util: RCUE Combo-box Input Change on Selection
(function($) {
	RCUE.combobox = function( selector ) {
		$( selector ).each(function() {
			var input = $( this ).find('.form-control'),
					menu = $( this ).find('.dropdown-menu'),
					links = menu.find('li a');
			
			$( links ).on('click', function() {
				input.val( $(this).html() );
			});
			
		});	
	};
	
	// Initialize on DOM ready
	$( RCUE.combobox('.input-group-rcue') );
})(jQuery);