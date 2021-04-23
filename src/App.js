import React from 'react';
import T from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage, PrivateRoute } from './components/auth';
import { TweetsPage, NewTweetPage, TweetDetailPage } from './components/tweets';

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
        <PrivateRoute
          isLogged={isLogged}
          path="/tweet"
          component={NewTweetPage}
        />
        <Route path="/login">
          {({ history }) => (
            <LoginPage onLogin={handleLogin} history={history} />
          )}
        </Route>
        <Route exact path="/">
          {({ history }) => (
            <TweetsPage
              isLogged={isLogged}
              onLogout={handleLogout}
              history={history}
            />
          )}
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
