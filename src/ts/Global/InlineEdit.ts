// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/bootstrap/index.d.ts" />
/// <reference path="../typings/jquery.blockui/jquery.blockui.d.ts" />

module InlineEdit {


	export function table(tableId: string, onBegin?: () => {}, onComplete?: () => {}) {

		$(tableId + ".table .js-edit").on("click", function () {
			setTdWidths(tableId);
			var rowId = $(this).data("row");
			var row = $("#" + rowId);
			var editRowId = "#edit_" + rowId;
			$(editRowId).show({
				duration: 500
			});
			row.hide();
			$(tableId + ' .btn-link').attr('disabled', 'disabled');
			if (onBegin != null) {
				onBegin();
			}

		});
		$(tableId + " .js-submit-btn").on("click",
			function () {
				if (onComplete != null) {
					onComplete();
				}
				var self = this;
				finishTableEdit(self);
			});

		$(tableId + " .js-cancel-btn").on("click",
			function () {
				var self = this;
				finishTableEdit(self);
			});
	}

	export function list(listId: string, onBegin?: () => {}, onComplete?: () => {}) {
		$(listId + ".list-group .js-edit").on("click",
			function () {
				var row = $(this).parents('.list-group-item');
				row.find(".list-group-item-text").hide();
				row.find(".list-view-pf-actions").hide();
				row.find(".edit--mode__input").show();
				row.addClass("active");
				$(".list-group-item").not(row).each(function () {
					$(this).block({
						message: null,
						overlayCSS: {
							backgroundColor: "#fff",
							opacity: 0.6,
							cursor: "wait"
						}
					});
				});
				if (onBegin != null) {
					onBegin();
				}
			});

		$(listId + ".list-group .js-submit-btn").on("click",
			function () {
				if (onComplete != null) {
					onComplete();
				}
				var self = this;
				finishListEdit(self);
			});
		$(listId + ".list-group .js-cancel-btn").on("click",
			function () {
				var self = this;
				finishListEdit(self);
			});

	}

	//this is a private function that hides the edit row
	function finishTableEdit(selector: string) {
		var editId = $(selector).closest("tr.inline-edit__active-row");
		var rowId = $(editId).attr("id");
		editId.hide();
		var ids = rowId.split("_");
		var readOnlyRow = $("#" + ids[1]);
		readOnlyRow.show({
			duration: 500
		});
		$(".btn-link").removeAttr("disabled");
	}
	//this is a private function which ensures that the 'editable' row's columns are the same width as those in the read-only row.
	function setTdWidths(tableId) {
		$(tableId + " tbody>tr").not(".inline-edit__active-row").each(function () {
			var rowId = $(this).get(0).id;

			var editRowId = "#edit_" + rowId;
			var widthArray: number[] = [];
			$("#" + rowId + "> td").each(function () {
				var width = $(this).width();
				widthArray.push(width);
			});
			console.log('widthArray: ' + widthArray);
			var i = 0;
			$(editRowId + "> td").each(function () {
				$(this).width(Math.round(widthArray[i]));
				i++;
			});
		});

	}

	//this is a private function that hides the edit row
	function finishListEdit(selector: string ) {
		var editId = $(selector).closest("div.list-group-item");
		var rowId = $(editId).attr("id");
		var row = $("#" + rowId);
		$(".list-group-item").unblock();
		row.removeClass("active");
		row.find(".list-view-pf-actions").show();
		row.find(".list-group-item-text").show();
		row.find(".edit--mode__input").hide();
	}

}



