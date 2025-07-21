import React from 'react';
import { NavLink } from 'react-router-dom';
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
                        <NavLink className={({ isActive }) => isActive ? 'active' : null }
                                to={subreddit}
                                key={index}>
                            {subreddit}
                        </NavLink>

                )
            })}
        </div>
    )
}