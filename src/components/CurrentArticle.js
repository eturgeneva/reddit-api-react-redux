import React from 'react';
import { useState, useEffect } from 'react';
import DataRender from './DataRender';

export default function CurrentArticle(props) {
    const [articleContent, setArticleContent] = useState(null);

    useEffect(() => {
        props.redditClient.fetchSelectedArticle('TurtleFacts_best_01')
        .then(responseObj => {
            setArticleContent(responseObj[0].data.children);
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
        <h3>Rendering with DataRender component:</h3>
        <DataRender dataToRender={articleContent}/>
        
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