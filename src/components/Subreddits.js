import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectedSubreddits, removeSubreddit } from '../app/subredditsSlice';

export default function Subreddits(props) {
    const subreddits = useSelector(selectedSubreddits);
    const dispatch = useDispatch();

    console.log('subreddits list rendered by Subreddits component', subreddits);

    function handleClick(subreddit) {
        dispatch(removeSubreddit(subreddit));
    }

    return (
        <div className="subreddits">
            <h3>Subreddits you follow</h3>
            {subreddits && subreddits.subreddits.map((subreddit, index) => {
                return (
                        <div className="subreddit" key={index}>
                            {/* <button onClick={() => handleClick(subreddit)}>🔷{subreddit}</button> */}
                            <Link to={subreddit}>
                                {/* 🔷{subreddit} */}
                                {subreddit}
                            </Link>
                        </div>
                )
            })}
        </div>
    )
}