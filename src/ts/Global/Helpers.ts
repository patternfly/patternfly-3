/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/jqueryui/jqueryui.d.ts" />



module Helper {
	//this can be used to truncate a string and show an ellipsis at a set string length unless otherwise specified.
	export function stringTruncate(string: string, length: number, addEllipsis?: boolean) {
		if (string.length > length) {
			var ts = string.substring(0, length);
			if (addEllipsis) {
				return ts + '...';
			} else {
				return ts;
			}
		} else
		{ return string; }
	}

	//This works in conjuction with the Html.ValidationMessage/Html.ValidationMessageFor helper and bootstrap to show error messages in red under an input.
	export function addFormValidation() {
		$('.input-validation-error').parents('.form-group').addClass('has-error');
		$('.field-validation-error').addClass('text-danger');
	}
	//Enable a group of DOM elements to be sortable - this also allows for an onload function and a function for when the mouse is released (dropping the moving row)
	export function dragAndDrop(selector: string, onBegin?: () => {}, onDrop?: () => {}) {

		if (onBegin !== undefined) {
			onBegin();
		}
		if (onDrop !== undefined) {
			$(selector).sortable({
				handle: ".pf-grab",
				out(event, ui) {
					onDrop();
				}
			});
		} else {
			$(selector).sortable({
				handle: ".pf-grab"
			});
		}

	}
}