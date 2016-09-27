import React from 'react';
import Tweet from './Tweet.js';

const TwitterFeed = props => {
  let tweets = props.tweets.map(tweet => {

    let image_media;
    let image_display;

    if (tweet.entities.media === undefined) {
      image_media = ""
      image_display = ""
    } else {
      image_media = tweet.entities.media[0].media_url
      image_display = tweet.entities.media[0].display_url
    };

    return(
      <Tweet
        key={tweet.id_str}
        name={tweet.user.name}
        text={tweet.text}
        screen_name={tweet.user.screen_name}
        timestamp_ms={tweet.timestamp_ms}
        profile_image_url={tweet.user.profile_image_url}
        retweeted={tweet.retweeted}
        retweet_count={tweet.retweet_count}
        favorited={tweet.favorited}
        favorite_count={tweet.favorite_count}
        media_url={image_media}
      />
    );
  });

  return(
    <div className="tweets">
      {tweets}
    </div>
  );
};

export default TwitterFeed;
