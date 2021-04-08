import React from "react";
import { getLatestTweets } from "../../api/tweets";

const TweetsPage = () => {
  //AHora en lugar de acceder a tuits fijos accedemos
  //a través de un estado .El estado lo iniciamos con
  //un array vacío para que tenga "algo" mientras
  //hace la petición
  const [tweets, setTweets] = React.useState([]);

  React.useEffect(() => {
    getLatestTweets().then(setTweets);
  }, []);

  return (
    <div className="tweetsPage">
      <ul>
        {tweets.map((tweet) => (
          <li key={tweet.id}>{tweet.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default TweetsPage;
