var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);
var params = {
  q: 'akshay',
	count: 100,
} // this is the param variable which will have key and value 

/*
T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
				  console.log(JSON.stringify(data));
});
*/

var idList=[ 889754214607572992  , 889760990853836800 , 889762329457377280 , 889770314187636736  ];
T.get('statuses/lookup.json', {id: idList.join(",")}, function(err, data, response) {
				  console.log(JSON.stringify(data));
});

