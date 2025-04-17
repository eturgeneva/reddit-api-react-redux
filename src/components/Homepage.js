import React from "react";

import Header from "./Header";
// import Timeline from "./Timeline";
import ArticlePreviews from "../features/ArticlePreviews";
import Subreddits from "./Subreddits";
import { Outlet } from "react-router-dom";

export default function Homepage(props) {
    return (
        <>
            <Header />
            <main>
                {/* <Timeline redditClient={props.redditClient}/> */}
                {/* <ArticlePreviews redditClient={props.redditClient}/> */}
                <Outlet />
                <Subreddits redditClient={props.redditClient}/>
            </main>
        </>
    )
}