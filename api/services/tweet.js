var Twitter = require("twitter-lite");

const client = new Twitter({
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  consumer_key: process.env.TWITTER_API_KEY,
  consumer_secret: process.env.TWITTER_API_SECRET_KEY,
  // bearer_token: process.env.TWITTER_BEARER_TOKEN,
});

const tweet = () => {
  client
    .post("statuses/update", {
      status: "This is my tweet from nodejs again! This is cool! @AnkitHans15",
    })
    .then((result) => {
      console.log('You successfully tweeted this : "' + result.text + '"');
    })
    .catch(console.error);
};

module.exports = { tweet };
