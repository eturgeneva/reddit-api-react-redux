import React from 'react';
import { useState, useEffect } from 'react';
// import turtleFacts from '../data/turtleFacts.json';

export default function Article() {
    const [articleContent, setArticleContent] = useState(null);

    useEffect(() => {
        // Add best to sort by best
        // fetch('https://www.reddit.com/r/TurtleFacts/.json')
        fetch('/mocks/TurtleFacts_best_01.json')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(responseObj => {
                setArticleContent(responseObj);
            })
    }, [])

    console.log('turtleFacts article content', articleContent);
    if (!articleContent) {
        return (
            <div>No article content fetched</div>
        )
    }

    return (
        <>
            <h2>Post expanded (stateArray[0].sameAsArticlePreview!)</h2>
   
            <div>User: {articleContent[0].data.children[0].data.author}</div>
            <div>Link to the post: {articleContent[0].data.children[0].data.permalink}</div>
            <div>Subreddit: {articleContent[0].data.children[0].data.subreddit}</div>
            <div>Thumbnail: {articleContent[0].data.children[0].data.thumbnail}</div>
            <img className="postThumbnail" src={articleContent[0].data.children[0].data.thumbnail} />
            <div>Title: {articleContent[0].data.children[0].data.title}</div>
            {/* <img className="postImage" src={articleContent[0].data.children[0].data.url}/> */}
            <div>Upvotes: {articleContent[0].data.children[0].data.ups}</div>
            <div>Downvotes: {articleContent[0].data.children[0].data.downs}</div>
            <div>Comments: {articleContent[0].data.children[0].data.num_comments}</div>

        </>
    )
}