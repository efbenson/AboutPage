/* Author:
Erik Benson
*/

$(document).ready(function(){
	var winHeight = $(window).height();
	var htmlHeight = $("#main-container").height() + $("#header-container").height() + $("#footer-container").height();
	if (winHeight > htmlHeight){
		$("#main-container").height(winHeight - 40 - ($("#header-container").height() + $("#footer-container").height()) + "px");
	}
});





