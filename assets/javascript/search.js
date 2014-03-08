// search.js

jQuery(document).ready(function() {
	jQuery.ajax({
        type: "GET",
		url: "https://dl.dropboxusercontent.com/u/883211/nationalPark.xml",
		dataType: "xml",
		success: function(xml) {
			console.log("testing ajax")
			var searchList = ""
	 		jQuery(xml).find('name').each(function() {
	 			searchList += "<dd id='" + jQuery(this).html() + "'><span>" + jQuery(this).html() + "</span></dd>";
	 		});
	 		// console.log(searchList);
	 		jQuery('#scroller').html(searchList);
 			jQuery('#Yosemite').on("click", function() {
 				if (parent.window.change_iframe_src) {
 					parent.window.change_iframe_src("trailgooglemap.html");
 				}
			});
		},
		error: function (xhr, ajaxOptions, thrownError) {
			console.log("Error with ajaxing nationalPark.xml")
			console.log("HTTP status: " + xhr.status);
			console.log(thrownError);
		}
	});
});