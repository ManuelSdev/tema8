import React from 'react';
import Layout from '../../layout/Layout';

import { getTweetDetail } from '../../../api/tweets';
import { Redirect } from 'react-router';

const TweetDetailPage = ({ match, ...props }) => {
  const [tweet, setTweet] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    console.log('Start effect', match.params.tweetId);
    getTweetDetail(match.params.tweetId)
      .then(tweet => setTweet(tweet))
      .catch(error => setError(error));

    return () => {
      console.log('Clean up effect', match.params.tweetId);
    };
  }, [match.params.tweetId]);

  if (error && error.status === 404) {
    return <Redirect to="/404" />;
  }
  console.log('Render', match.params.tweetId);
  return (
    <Layout title="Tweet Detail" {...props}>
      <div>{JSON.stringify(tweet)}</div>
    </Layout>
  );
};

// componentDidMount() {
//   const { match } = this.props;
//   getTweetDetail(match.params.tweetId)
//     .then(tweet => this.setState({ tweet }))
//     .catch(error => this.setState({ error }));
// }

export default TweetDetailPage;
