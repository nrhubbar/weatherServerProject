
function getWeather(){
	log.console("In getWeather");
	var webdriver = require('selinium-webdriver')
	var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chromedriver()).build()

	driver.get('http://www.google.com')
}	