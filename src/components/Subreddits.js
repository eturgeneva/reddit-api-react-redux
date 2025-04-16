import React from 'react';
import { useState, useEffect } from 'react';

export default function Subreddits(props) {
    const [subreddits, setSubreddits] = useState(['TurtleFacts']);

    // function clickHandler(e) {
    //     console.log(e.target.value);
    //     props.redditClient.fetchArticlePreviews(e.target.value)
    // }

    return (
        <div className="subreddits">
            <h2>Subreddits</h2>
            {subreddits.length > 0 && subreddits.map((subreddit, index) => {
                return (
                    <div className="subreddit"
                         value={subreddit}
                         onClick={(e) => {
                            console.log(e.target.innerText);
                            console.log(e.target.value);
                            console.log(e.target);
                            console.log(e);
                            props.redditClient.fetchArticlePreviews(e.target.innerText);
                        }}>{subreddit}</div>
                )
            })}
        </div>
    )
}