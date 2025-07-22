import React from 'react';

export default function ArticleSkeleton(props) {
    return (
        <div className="article">
            <div className="skeleton skeletonSubreddit"></div>
            <div className="skeleton skeletonTitle"></div>
            <div className="skeleton skeletonImage"></div>
            <div className="skeletonTextLine skeleton"></div>
        </div>
    );
}