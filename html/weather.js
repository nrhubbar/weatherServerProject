$(document).ready(function(){

	$("#weatherBtn").click(function(){
		console.log("Hey");
		//$.post("weather.js");
		$("small").hide();
	});
	$('#bringBack').click(function(){
		$.get("127.0.0.0:3000","",function(){
			$.("small").show();
		});
		console.log("finished getWeather")
	});

});

