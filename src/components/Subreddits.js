import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectedSubreddits, removeSubreddit } from '../app/subredditsSlice';

export default function Subreddits(props) {
    // const [subreddits, setSubreddits] = useState(['TurtleFacts']);
    const subreddits = useSelector(selectedSubreddits);
    console.log('subreddits list rendered by Subreddits component', subreddits);
    const dispatch = useDispatch();

    function handleClick(subreddit) {
        dispatch(removeSubreddit(subreddit));
        // console.log('subreddits after delete', subreddits);
    }

    return (
        <div className="subreddits">
            <h2>Subreddits</h2>
            {subreddits && subreddits.subreddits.map((subreddit, index) => {
                return (
                        <div className="subreddit" key={index}>
                            <button onClick={() => handleClick(subreddit)}>x</button>
                            <Link to={subreddit}>
                                {subreddit}
                            </Link>
                        </div>
                )
            })}
        </div>
    )
}