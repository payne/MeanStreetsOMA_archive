// 100 tweets at a time
var Twitter = require('twitter');
var config = require('./config_twitter');
var client = new Twitter(config);

var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('../tweet.data');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);
let n = 1;
let fileNumber=1;
let tweetIds = [];

let saveTweets = function(idList) {
  client.get('statuses/lookup.json', {id: idList.join(",")}, function(error, tweets, response) {
      if (error) {
          console.log("Call to twitter failed!! error="+error);
      } else {
        //console.log(tweets);
        let fileName = "data/data."+fileNumber+".json";
        fs.writeFile(fileName,JSON.stringify(tweets),function(err) { if (err) console.log(err); });
        fileNumber = fileNumber + 1;
      }
  });
  setTimeout(function() {
    console.log('Paused for one second.');
  }, 1000);
};

rl.on('line', function(line) {
  // process line here
  // console.log(n + ":\t" + line);
  n = n + 1;
  tweetIds.push(line.split(" ")[0]);
  if (tweetIds.length >= 100) {
      saveTweets(tweetIds);
      tweetIds=[];
  }
});

rl.on('close', function() {
  // do something on finish here
  console.log("EOF EOF EOF");
  console.log("There were " + n + " lines");
});

