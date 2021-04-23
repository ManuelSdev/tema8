import React from 'react';
import T from 'prop-types';
import Tweet, { tweetType } from './Tweet';

const renderTweet = history => tweet => (
  <Tweet key={tweet.id} {...tweet} history={history} />
);

const TweetsList = ({ tweets, history }) => {
  const handleClick = tweetId => {
    history.push(`/tweet/${tweetId}`);
  };

  return (
    <ul className="tweetsList">
      {tweets.map(tweet => (
        <Tweet
          key={tweet.id}
          {...tweet}
          history={history}
          onClick={() => handleClick(tweet.id)}
        />
      ))}
      {/* {tweets.map(renderTweet(history))} */}
    </ul>
  );
};

TweetsList.propTypes = {
  tweets: T.arrayOf(T.shape(tweetType)),
};

export default TweetsList;
