import React from 'react';
import { useState, useEffect } from 'react';

export default function Subreddits() {
    const [subreddits, setSubreddits] = useState(['TurtleFacts']);

    return (
        <div className="subreddits">
            <h2>Subreddits</h2>
            {subreddits.length > 0 && subreddits.map((subreddit, index) => {
                return (
                    <div className="subreddit">{subreddit}</div>
                )
            })}
        </div>
    )
}