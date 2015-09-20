
function getWeather(){
	document.getElementsById('ttbh').hide();
	var webdriver = require('selinium-webdriver')
	var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chromedriver()).build()

	driver.get('http://www.google.com')
}	