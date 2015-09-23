$(document).ready(function(){

	$("#weatherBtn").click(function(){
		console.log("Hey");
		//$.post("weather.js");
		$("small").hide();
	});
	$('#bringBack').click(function(){
		$.get("http://127.0.0.0:3000",null,function(){
			$("small").show();
		});
		console.log("finished getWeather")
	});

});

