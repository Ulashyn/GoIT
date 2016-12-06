$(document).ready(function(){
 
	$("#form div").append("<em></em>");
 
    $("#form input").hover(function() {
        $(this).next().animate({opacity: 1, left: "345"}, "slow").css("display","inline");
        var hoverText = $(this).attr("title");
        $(this).next().text(hoverText);
    }, function() {
        $(this).next().animate({opacity: 0, left: "365"}, "fast").css("display","inline");
    });
 	
 	$("#form__button").click(function () {
 		for (var i = 0; i < $("#form input").length; i++) {
	 		var hoverText = $("#form input:eq("+i+")").attr("title");
	        $("#form em:eq("+i+")").text(hoverText);
 		}
 		$("form em").animate({opacity: 1, left: "345"}, "slow").css("display","inline");
 	});
});