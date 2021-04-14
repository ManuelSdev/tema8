import React from 'react';
import './NewTweetPage.css';
import Layout from '../../layout/Layout';

const NewTweetPage = (...props) => {
  return (
    <Layout {...props} title="What are you thinking?">
      <div>NewTweetPage</div>
    </Layout>
  );
};

export default NewTweetPage;
