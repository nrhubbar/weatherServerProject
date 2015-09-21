$(document).ready(function(){

	$("#weatherBtn").click(function(){
		console.log("Hey");
		//$.post("weather.js");
		$("small").hide();
	});
	$('#bringBack').click(function(){
		getWeather();
		console.log("finished getWeather")
	});

});

function getWeather(){
	console.log("In getWeather");
	var webdriver = require('selinium-webdriver');
	var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chromedriver()).build();

	driver.get('http://www.google.com');
}