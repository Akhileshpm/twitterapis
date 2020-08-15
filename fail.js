var Twitter = require('twitter');

var client = new Twitter(
{
  consumer_key: 'here goes your api_key',
  consumer_secret: 'api_secret key',
  access_token_key: 'token',
  access_token_secret: 'secret_token',
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
