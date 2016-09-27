import React from 'react';

// When clicking on the reply icon, an alert box should pop up with the text "reply".
// When clicking on the retweet icon, an alert box should pop up with the text "retweet".
// When clicking on the like icon, an alert box should pop up with the text "like".
// When clicking on the more icon, an alert box should pop up with the text "favorite".

const Tweet = props => {
  let reply_icon = <i className="fa fa-reply" aria-hidden="true" onClick={event => alert ("reply")}></i>;
  let more_icon = <i className="fa fa-ellipsis-h" aria-hidden="true" onClick={event => alert ("more")}></i>;
  let eventHandle = event => {
    alert(event);
  };
  let retweet_icon;
  let favorite_icon;
  let strftime = require('strftime');
  let date = strftime('%b %e', new Date(parseInt(props.timestamp_ms)));

  if (props.favorited) {
    favorite_icon = <i className="fa fa-heart liked" aria-hidden="true" onClick={event => alert("favorite")}></i>;
  } else {

    favorite_icon = <i className="fa fa-heart" aria-hidden="true" onClick={event => alert ("favorite")}></i>;
  };

  if (props.retweeted) {
    retweet_icon = <i className="fa fa-retweet retweeted" aria-hidden="true" onClick={event => alert ("retweet")}></i>;
  } else {
    retweet_icon = <i className="fa fa-retweet" aria-hidden="true" onClick={event => alert ("retweet")}></i>;
  };

  return (
    <div className="row callout twit center">
      <div className="small-1 columns">
        <img src={props.profile_image_url}/>
      </div>
      <div className="small-11 columns">
        <div className="row">
          <span>{props.name} </span>
          <span className="gray">@{props.screen_name} ∙ {date}</span>
        </div>
        <div className="row">
          {props.text}
          <img src={props.media_url}/>
          <img src={props.display_url}/>
        </div>
        <div className="row gray">
          <div className="small-1 columns">{reply_icon}</div>
          <div className="small-1 columns"><span>{favorite_icon} {props.favorite_count}</span></div>
          <div className="small-1 columns"><span>{retweet_icon} {props.retweet_count}</span></div>
          <div className="small-9 columns">{more_icon}</div>
        </div>
      </div>
    </div>
  );

}

export default Tweet;
