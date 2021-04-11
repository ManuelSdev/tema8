import './App.css';

import { LoginPage } from './components/auth';
import { TweetsPage, NewTweetPage, TweetDetailPage } from './components/tweets';

function App() {
  return (
    <div className="App">
      <LoginPage />
      {/* <TweetsPage />
      <NewTweetPage />
      <TweetDetailPage /> */}
    </div>
  );
}

export default App;
