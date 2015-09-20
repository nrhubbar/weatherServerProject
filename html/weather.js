
function getWeather(){
	var webdriver = require('selinium-webdriver')
	var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.fire()).build()

	driver.get('http://www.google.com') 
}	