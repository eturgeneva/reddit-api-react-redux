import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';

export default function Subreddits(props) {
    const [subreddits, setSubreddits] = useState(['TurtleFacts']);

    function handleClick(subreddit) {
        props.redditClient.fetchArticlePreviews(subreddit);
    }

    return (
        <div className="subreddits">
            <h2>Subreddits</h2>
            {subreddits.length > 0 && subreddits.map((subreddit, index) => {
                console.log(subreddit);
                return (
                    <Link to={subreddit}>
                        <li className="subreddit" 
                            key={index} 
                            onClick={() => handleClick(subreddit)}>{subreddit}</li>
                    </Link>
                    // <div className="subreddit" onClick={() => handleClick(subreddit)}>{subreddit}</div>
                )
            })}
        </div>
    )
}