import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Subreddits(props) {
    const [subreddits, setSubreddits] = useState(['TurtleFacts']);

    return (
        <div className="subreddits">
            <h2>Subreddits</h2>
            {subreddits.length > 0 && subreddits.map((subreddit, index) => {
                console.log(subreddit);
                return (
                    <Link to={subreddit}>
                        <li className="subreddit" 
                            key={index} 
                            >{subreddit}</li>
                    </Link>
                )
            })}
        </div>
    )
}