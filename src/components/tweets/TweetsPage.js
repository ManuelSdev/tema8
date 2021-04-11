import React from "react";
import { getLatestTweets } from "../../api/tweets";
import classnames from "classnames";
import scopedStyles from "./TweetsPage.module.css";
import Layout from "../layout/Layout";

const TweetsPage = ({ className }) => {
    //AHora en lugar de acceder a tuits fijos accedemos
    //a través de un estado .El estado lo iniciamos con
    //un array vacío para que tenga "algo" mientras
    //hace la petición
    const [tweets, setTweets] = React.useState([]);

    React.useEffect(() => {
        getLatestTweets().then(setTweets);
    }, []);

    const items = tweets.map((tweet) => <li key={tweet.id}>{tweet.content}</li>);

    return (
        <Layout title="Este es la props title del comp Layout">
            <div className={classnames(scopedStyles.tweetsPage, className)}>
                <ul>{items}</ul>
            </div>
        </Layout>
    );
};

export default TweetsPage;
