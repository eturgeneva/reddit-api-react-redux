import React from 'react';
import ArticlePreviews from '../features/ArticlePreviews.js';

export default function Timeline(props) {
    return (
        <div className="timeline">
            <h1>Timeline</h1>
            <ArticlePreviews redditClient={props.redditClient}/>
        </div>
    )
}