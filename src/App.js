import React from 'react';
import T from 'prop-types';
import { LoginPage } from './components/auth';
import { TweetsPage, NewTweetPage, TweetDetailPage } from './components/tweets';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);

  const handleLogout = () => setIsLogged(false);

  return (
    <div className="App">
      {isLogged ? (
        <TweetsPage isLogged={isLogged} onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
      {/* <TweetsPage />
      <NewTweetPage />
      <TweetDetailPage /> */}
    </div>
  );
}

App.propTypes = {
  isInitiallyLogged: T.bool.isRequired,
};

export default App;
