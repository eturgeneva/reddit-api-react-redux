import React from 'react';
import { useEffect, useState } from 'react';
import Article from '../components/Article';

export default function ArticlePreviews(props) {
    const [articlePreviews, setArticlePreviews] = useState(null);
    console.log('ArticlePreviews props', props);

    useEffect(() => {
        // Add best to sort by best
        // fetch('https://www.reddit.com/r/TurtleFacts/.json')
        
        // fetch('/mocks/TurtleFacts.json')
        // .then(response => {
        //     if (response.ok) {
        //         return response.json();
        //     }
        // })
        props.redditClient.fetchPostsPreviews('TurtleFacts')
        .then(responseObj => {
            console.log('responseObj in ArticlePreviews', responseObj);
            setArticlePreviews(responseObj);
        })
    }, []);
    // function fetchPosts() {
    //     props.redditClient.fetchPostsPreviews('TurtleFacts')
    //     .then(responseObj => {
    //         console.log('responseObj in ArticlePreviews', responseObj);
    //         setArticlePreview(responseObj);
    //     })
    // }
    // useEffect(fetchPosts, []);

    console.log('turtleFacts article previews', articlePreviews);
    if (!articlePreviews) {
        return (
            <div>No data fetched</div>
        )
    }

    return (
        <div>
            <div className="articlePreview">
                <ul>
                    {articlePreviews && articlePreviews.data.children.map((article, index) => {
                        return (
                            // <li key={index}>{article.data.author}</li>
                            <div className="article" key={index}>
                                <div>{article.data.author}</div>
                                <div>{article.data.permalink}</div>
                                <div>{article.data.subreddit}</div>
                                <div>Thumbnail: {article.data.thumbnail}</div>
                                <img className="articleThumbnail" src={article.data.thumbnail}></img>
                                {/* <img className="articleImage" src={article.data.url}></img> */}
                                <div>Upvotes: {article.data.ups}</div>
                                <div>Downvotes: {article.data.downs}</div>
                                <div>Commets: {article.data.num_comments}</div>
                            </div>
                        )
                    })}
                </ul>

                <div className="article">
                    <h1>Post preview info</h1>
                    <div>User: {articlePreviews.data.children[0].data.author}</div>
                    <div>Link to the post: {articlePreviews.data.children[0].data.permalink}</div>
                    <div>Subreddit: {articlePreviews.data.children[0].data.subreddit}</div>
                    <div>Thumbnail: {articlePreviews.data.children[0].data.thumbnail}</div>
                    <img className="postThumbnail" src={articlePreviews.data.children[0].data.thumbnail}/>
                    <div>Title: {articlePreviews.data.children[0].data.title}</div>
                    {/* <img className="postImage" src={articlePreview.data.children[0].data.url}/> */}
                    <div>Upvotes: {articlePreviews.data.children[0].data.ups}</div>
                    <div>Downvotes: {articlePreviews.data.children[0].data.downs}</div>
                    <div>Comments: {articlePreviews.data.children[0].data.num_comments}</div>
                </div>
                <div>
                    <h2>Test response preview 03 index</h2>
                    <h1>Post preview info</h1>
                    <div>User: {articlePreviews.data.children[3].data.author}</div>
                    <div>Link to the post: {articlePreviews.data.children[3].data.permalink}</div>
                    <div>Subreddit: {articlePreviews.data.children[3].data.subreddit}</div>
                    <div>Thumbnail: {articlePreviews.data.children[3].data.thumbnail}</div>
                    <img className="postThumbnail" src={articlePreviews.data.children[3].data.thumbnail}/>
                    <div>Title: {articlePreviews.data.children[3].data.title}</div>
                    {/* <img className="postImage" src={articlePreview.data.children[3].data.url}/> */}
                    {articlePreviews.data.children[3].data.url}
                    <div>Upvotes: {articlePreviews.data.children[3].data.ups}</div>
                    <div>Downvotes: {articlePreviews.data.children[3].data.downs}</div>
                    <div>Comments: {articlePreviews.data.children[3].data.num_comments}</div>
                </div>
            </div>
            <Article />
        </div>
    )
}