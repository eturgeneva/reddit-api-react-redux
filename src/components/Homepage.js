import React from "react";

import Header from "./Header";
import Timeline from "./Timeline";
import Subreddits from "./Subreddits";

export default function Homepage(props) {
    return (
        <>
            <Header />
            <main>
                <Timeline redditClient={props.redditClient}/>
                <Subreddits redditClient={props.redditClient}/>
            </main>
        </>
    )
}