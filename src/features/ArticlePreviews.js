import React from 'react';
import { useEffect, useState } from 'react';
import Article from '../components/Article';

export default function ArticlePreviews() {
    const [articlePreview, setArticlePreview] = useState(null);

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
            setArticlePreview(responseObj);
        })
    }, []);

    console.log('turtleFacts article previews', articlePreview);
    if (!articlePreview) {
        return (
            <div>No data fetched</div>
        )
    }

    return (
        <div>
            <div className="articlePreview">
                <div className="article">
                    <h1>Post preview info</h1>
                    <div>User: {articlePreview.data.children[0].data.author}</div>
                    <div>Link to the post: {articlePreview.data.children[0].data.permalink}</div>
                    <div>Subreddit: {articlePreview.data.children[0].data.subreddit}</div>
                    <div>Thumbnail: {articlePreview.data.children[0].data.thumbnail}</div>
                    <img className="postThumbnail" src={articlePreview.data.children[0].data.thumbnail}/>
                    <div>Title: {articlePreview.data.children[0].data.title}</div>
                    {/* <img className="postImage" src={articlePreview.data.children[0].data.url}/> */}
                    <div>Upvotes: {articlePreview.data.children[0].data.ups}</div>
                    <div>Downvotes: {articlePreview.data.children[0].data.downs}</div>
                    <div>Comments: {articlePreview.data.children[0].data.num_comments}</div>
                </div>
                <div>
                    <h2>Test response preview 03 index</h2>
                    <h1>Post preview info</h1>
                    <div>User: {articlePreview.data.children[3].data.author}</div>
                    <div>Link to the post: {articlePreview.data.children[3].data.permalink}</div>
                    <div>Subreddit: {articlePreview.data.children[3].data.subreddit}</div>
                    <div>Thumbnail: {articlePreview.data.children[3].data.thumbnail}</div>
                    <img className="postThumbnail" src={articlePreview.data.children[3].data.thumbnail}/>
                    <div>Title: {articlePreview.data.children[3].data.title}</div>
                    {/* <img className="postImage" src={articlePreview.data.children[3].data.url}/> */}
                    {articlePreview.data.children[3].data.url}
                    <div>Upvotes: {articlePreview.data.children[3].data.ups}</div>
                    <div>Downvotes: {articlePreview.data.children[3].data.downs}</div>
                    <div>Comments: {articlePreview.data.children[3].data.num_comments}</div>
                </div>
            </div>
            <Article />
        </div>
    )
}