var Twitter = require('twitter');
var config = require('./config_twitter');

var T = new Twitter(config);

var idList=[ 889754214607572992  , 889760990853836800 , 889762329457377280 , 889770314187636736  ];
T.get('statuses/lookup.json', {id: idList.join(",")}, function(err, data, response) {
				  console.log(JSON.stringify(data));
});

