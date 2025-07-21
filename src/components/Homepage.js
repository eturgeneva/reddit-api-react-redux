import React from "react";

import Header from "./Header";
import Subreddits from "./Subreddits";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export default function Homepage(props) {
    return (
        <>
            <ScrollToTop />
            <Header />
            <main>
                <Outlet />
                <Subreddits redditClient={props.redditClient}/>
            </main>
        </>
    )
}