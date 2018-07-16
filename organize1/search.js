var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);
var params = {
  q: 'akshay',
	count: 100,
} // this is the param variable which will have key and value 


T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
				  console.log(JSON.stringify(data));
});


