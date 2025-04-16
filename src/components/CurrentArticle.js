import React from 'react';
import { useState, useEffect } from 'react';
// import turtleFacts from '../data/turtleFacts.json';

export default function CurrentArticle(props) {
    const [articleContent, setArticleContent] = useState(null);

    useEffect(() => {
        props.redditClient.fetchSelectedArticle('TurtleFacts_best_01')
        .then(responseObj => {
            setArticleContent(responseObj);
        })
    }, [])
    // Test index 03, remove later:
    const [article03Content, setArticle03Content] = useState(null);
    useEffect(() => {
        fetch('/mocks/TurtleFacts_best_03.json')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(responseObj => {
                setArticle03Content(responseObj);
            })
    }, [])

    console.log('turtleFacts article content', articleContent);
    console.log('turtleFacts article 03 content', article03Content);

    if (!articleContent || !article03Content) {
        return (
            <div>No article content fetched</div>
        )
    }

    return (
        <>
        <h2>Test</h2>
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

            <div>
                <h2>Post expanded (stateArray[0].sameAsArticlePreview!)</h2>
    
                <div>User: {article03Content[0].data.children[0].data.author}</div>
                <div>Link to the post: {article03Content[0].data.children[0].data.permalink}</div>
                <div>Subreddit: {article03Content[0].data.children[0].data.subreddit}</div>
                <div>Thumbnail: {article03Content[0].data.children[0].data.thumbnail}</div>
                <img className="postThumbnail" src={article03Content[0].data.children[0].data.thumbnail} />
                <div>Title: {article03Content[0].data.children[0].data.title}</div>
                {/* <img className="postImage" src={article03Content[0].data.children[0].data.url}/> */}
                <div>Upvotes: {article03Content[0].data.children[0].data.ups}</div>
                <div>Downvotes: {article03Content[0].data.children[0].data.downs}</div>
                <div>Comments: {article03Content[0].data.children[0].data.num_comments}</div>
            </div>

            <div>
                <h2>Comments</h2>
                <div>Author: {article03Content[1].data.children[0].data.author}</div>
                <div>Comment: {article03Content[1].data.children[0].data.body}</div>
                <div>Replies to the comment: {article03Content[1].data.children[0].data.replies.data.children[0].data.body}</div>

                <div>Author: {article03Content[1].data.children[1].data.author}</div>
                <div>Comment: {article03Content[1].data.children[1].data.body}</div>
            </div>

        </>
    )
}