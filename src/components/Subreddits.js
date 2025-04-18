import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectedSubreddits } from '../app/subredditsSlice';

export default function Subreddits(props) {
    // const [subreddits, setSubreddits] = useState(['TurtleFacts']);
    const subreddits = useSelector(selectedSubreddits);
    console.log('subreddits list rendered by Subreddits component', subreddits);

    return (
        <div className="subreddits">
            <h2>Subreddits</h2>
            {subreddits && subreddits.subreddits.map((subreddit, index) => {
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
        // <div className="subreddits">
        //     <h2>Subreddits</h2>
        //     {subreddits.length > 0 && subreddits.map((subreddit, index) => {
        //         console.log(subreddit);
        //         return (
        //             <Link to={subreddit}>
        //                 <li className="subreddit" 
        //                     key={index} 
        //                     >{subreddit}</li>
        //             </Link>
        //         )
        //     })}
        // </div>
    )
}