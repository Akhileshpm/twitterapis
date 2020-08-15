var Twitter = require('twitter');

var client = new Twitter(
{
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: '',
});

/*client.get('mutes/users/list', function(error, tweets, response) {
  if(error) throw error;
  console.log(tweets);  // The favorites.
  //console.log(response);  // Raw response object.
})*/
client.post('statuses/update', {status: 'just trying the twitter APIs :/'},  function(error, tweet, response) {
    if(error) throw error;
    console.log(tweet);  // Tweet body.
    console.log(response);  // Raw response object.
  });
