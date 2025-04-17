import React from 'react';
import { useState, useEffect } from 'react';

export default function Subreddits(props) {
    const [subreddits, setSubreddits] = useState(['TurtleFacts']);

    function handleClick(subreddit) {
        // props.redditClient.fetchArticlePreviews(e.target.innerText);
        props.redditClient.fetchArticlePreviews(subreddit);
    }

    return (
        <div className="subreddits">
            <h2>Subreddits</h2>
            {subreddits.length > 0 && subreddits.map((subreddit, index) => {
                console.log(subreddit);
                return (
                    <div className="subreddit" onClick={() => handleClick(subreddit)}>{subreddit}</div>
                )
            })}
        </div>
    )
}