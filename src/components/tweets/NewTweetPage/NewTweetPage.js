import React from 'react';
import './NewTweetPage.css';
import Layout from '../../layout/Layout';
import NewTweetForm from './NewTweetForm';
import { Photo } from '../../shared';
import defaultPhoto from '../../../assets/default_profile.png';

import './NewTweetPage.css';

const NewTweetPage = props => {
  const handleSubmit = newTweet => {
    console.log(newTweet);
    // Complete new tweet flow
  };

  return (
    <Layout title="What are you thinking?" {...props}>
      <div className="newTweetPage bordered" style={{ borderBottomWidth: 10 }}>
        <div className="left">
          <Photo src={defaultPhoto} alt="" />
        </div>
        <div className="right">
          <NewTweetForm onSubmit={handleSubmit} />
        </div>
      </div>
    </Layout>
  );
};

export default NewTweetPage;
