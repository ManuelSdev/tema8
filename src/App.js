import React from 'react';
import './App.css';

import { LoginPage } from './components/auth';
import { TweetsPage, NewTweetPage, TweetDetailPage } from './components/tweets';

function App() {
  const [isLogged, setIsLogged] = React.useState(false);

  const handleLogin = () => setIsLogged(true);

  const handleLogout = () => setIsLogged(false);

  return (
    <div className="App">
      {isLogged ? (
        <TweetsPage isLogged={isLogged} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
      {/* <TweetsPage />
      <NewTweetPage />
      <TweetDetailPage /> */}
    </div>
  );
}

export default App;
