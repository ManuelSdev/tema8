import client from "./client";

const tweetsBaseUrl = "/api";

export const getLatestTweets = () => {
  //esto lo da json server/sparrest
  const url = `${tweetsBaseUrl}/tweets`;
  //client.get devuelve una promesa
  return client.get(url);
};
