import React from 'react';
import { useState, useEffect } from 'react';

export default function Subreddits(props) {
    const [subreddits, setSubreddits] = useState(['TurtleFacts']);

    function handleClick(e) {
        props.redditClient.fetchArticlePreviews(e.target.innerText)
    }

    return (
        <div className="subreddits">
            <h2>Subreddits</h2>
            {subreddits.length > 0 && subreddits.map((subreddit, index) => {
                return (
                    <div className="subreddit" onClick={handleClick}>{subreddit}</div>
                )
            })}
        </div>
    )
}