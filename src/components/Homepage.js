import React from "react";

import Header from "./Header";
import Subreddits from "./Subreddits";
import { Outlet } from "react-router-dom";

export default function Homepage(props) {
    return (
        <>
            <Header />
            <main>
                <Outlet />
                <Subreddits redditClient={props.redditClient}/>
            </main>
        </>
    )
}