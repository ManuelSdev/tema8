import React from 'react';
import T from 'prop-types';
import { LoginPage } from './components/auth';
import { TweetsPage, NewTweetPage, TweetDetailPage } from './components/tweets';
import { Switch, Route, Redirect } from 'react-router';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => setIsLogged(false);

  return (
    <div className="App">
      <Switch>
        <Route path="/tweet/:tweetId" component={TweetDetailPage} />
        <Route path="/tweet" component={NewTweetPage} />
        <Route path="/login">
          {() =>
            isLogged ? <Redirect to="/" /> : <LoginPage onLogin={handleLogin} />
          }
        </Route>
        <Route exact path="/">
          <TweetsPage isLogged={isLogged} onLogout={handleLogout} />
        </Route>
        <Route path="/404">
          <div
            style={{
              textAlign: 'center',
              fontSize: 48,
              fontWeight: 'bold',
            }}
          >
            404 | Not found page
          </div>
        </Route>
        <Route>
          <Redirect to="/404" />
        </Route>
      </Switch>
    </div>
  );
}

App.propTypes = {
  isInitiallyLogged: T.bool.isRequired,
};

export default App;
