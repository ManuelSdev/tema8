import client from './client';

const tweetsBaseUrl = '/api';

export const getLatestTweets = () => {
  const url = `${tweetsBaseUrl}/tweets`;
  return client.get(url);
};
