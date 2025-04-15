import React from 'react';
import { useState, useEffect } from 'react';
// import turtleFacts from '../data/turtleFacts.json';

export default function Article () {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        // Add best to sort by best
        // fetch('https://www.reddit.com/r/TurtleFacts/.json')
        fetch('/mocks/TurtleFacts.json')
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(responseObj => {
            setResponse(responseObj);
        })
    }, [])

    console.log('turtleFacts json', response);
    if (!response) {
        return (
            <div>No data fetched</div>
        )
    }

    return (
        <>
        <h1>Post preview info</h1>
         <div>User: {response.data.children[0].data.author}</div>
         <div>Link to the post: {response.data.children[0].data.permalink}</div>
         {/* <div>Preview: {response.data.children[0].data.preview.images[0].source.url}</div> */}
         {/* <img src={response.data.children[0].data.preview.images[0].source.url}/> */}
         <div>Subreddit: {response.data.children[0].data.subreddit}</div>
         <div>Thumbnail: {response.data.children[0].data.thumbnail}</div>
         <img className="postThumbnail" src={response.data.children[0].data.thumbnail}/>
         <div>Title: {response.data.children[0].data.title}</div>
         <img className="postImage" src={response.data.children[0].data.url}/>
         <div>Upvotes: {response.data.children[0].data.ups}</div>
         <div>Downvotes: {response.data.children[0].data.downs}</div>
         <div>Comments: {response.data.children[0].data.num_comments}</div>

         <h2>Post expanded</h2>
        </>
    )
}