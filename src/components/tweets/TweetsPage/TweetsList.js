import React from 'react';
import T from 'prop-types';
import Tweet, { tweetType } from './Tweet';

const renderTweet = tweet => <Tweet key={tweet.id} {...tweet} />;

const TweetsList = ({ tweets }) => {
  return <ul className="tweetsList">{tweets.map(renderTweet)}</ul>;
};

TweetsList.propTypes = {
  tweets: T.arrayOf(T.shape(tweetType)),
};

export default TweetsList;
