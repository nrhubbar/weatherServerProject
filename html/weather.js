$(document).ready(function(){
	// log.console("In getWeather");
	// var webdriver = require('selinium-webdriver')
	// var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chromedriver()).build()

	// driver.get('http://www.google.com')
	$("#weatherBtn").click(function(){
		console.log("Hey");
		//$.post("weather.js");
		$("small").hide();
	});
	$('#bringBack').click(function(){
		$("small").show();
	});

});	