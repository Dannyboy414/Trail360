// search.js

jQuery(document).ready(function() {
	jQuery.ajax({
        type: "GET",
		url: "assets/xml/nationalPark.xml",
		dataType: "xml",
		success: function(xml) {
			console.log("testing ajax")
			var searchList = ""
	 		jQuery(xml).find('name').each(function() {
	 			searchList += "<dd id='" + jQuery(this).text() + "'><span>" + jQuery(this).text() + "</span></dd>";
	 		});
	 		// console.log(searchList);
	 		jQuery('#scroller').html(searchList);
 			jQuery('#Yosemite').on("click", function() {
 				if (parent.window.change_iframe_src) {
 					parent.window.change_iframe_src("trailgooglemap.html");
 				}

 				jQuery('.header-page-title', parent.document).text('Trail Map');
 				jQuery('.footer-tab', parent.document).removeClass('active');
 				jQuery('.footer-trailmap', parent.document).addClass('active');
			});
		},
		error: function (xhr, ajaxOptions, thrownError) {
			console.log("Error with ajaxing nationalPark.xml")
			console.log("HTTP status: " + xhr.status);
			console.log(thrownError);
		}
	});
});