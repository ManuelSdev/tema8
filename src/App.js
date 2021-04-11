import logo from "./logo.svg";
import "./App.css";
import TweetsPage from "./components/tweets/TweetsPage.js";
import Button from "./components/shared/Button";
function App() {
  return (
    <div className="App">
      <TweetsPage />
    </div>
  );
}

export default App;
