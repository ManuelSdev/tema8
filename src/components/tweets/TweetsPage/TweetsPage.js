import React from 'react';
import { getLatestTweets } from '../../../api/tweets';
import classnames from 'classnames';
import './TweetsPage.css';
import scopedStyles from './TweetsPage.module.css';
import Layout from '../../layout/Layout';

const TweetsPage = ({ className, ...props }) => {
  const [tweets, setTweets] = React.useState([]);

  React.useEffect(() => {
    getLatestTweets().then(setTweets);
  }, []);

  const handleClick = () => {
    alert('Construyendo un enlace al detalle...');
  };

  const items = tweets.map(tweet => (
    <li onClick={handleClick} key={tweet.id}>
      {tweet.content}
    </li>
  ));

  const styles = { color: tweets.length > 2 ? 'red' : 'green' };

  return (
    <Layout title="What's going on..." {...props}>
      <div className={classnames(scopedStyles.tweetsPage, className)}>
        <ul style={styles}>{items}</ul>
      </div>
    </Layout>
  );
};

export default TweetsPage;
