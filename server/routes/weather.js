var express = require('express');
var router = express.Router();

var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'htmlunit' } };
var client = webdriverio.remote(options);

function getWeather(location){

  return client.init().url('http://www.wunderground.com/q/' + location).element('("[data-variable=\'temperature\']").find(\'.wx-value\')[0].innerText');
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  var tempature = getWeather(req.query.location);
  res.send({'tempature':tempature});
  //res.send('respond with a resource');
});

router.get('/weather', function(req, res){
  var tempature = getWeather(req.query.location);
  res.json({'tempature':tempature});
})

module.exports = router;
