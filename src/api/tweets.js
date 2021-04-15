import client from './client';

const tweetsBaseUrl = '/api';

export const getLatestTweets = () => {
  const url = `${tweetsBaseUrl}/tweets?_expand=user&_embed=likes&_sort=createdAt&_order=desc`;
  return client.get(url);
};
