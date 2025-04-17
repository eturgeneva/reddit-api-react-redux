import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleRender from './ArticleRender';
import CommentRender from './CommentRender';

export default function CurrentArticle(props) {
    const [articleContent, setArticleContent] = useState(null);
    const [articleComments, setArticleComments] = useState(null);
    // console.log('useParams in CurrentArticle', useParams());
    const { subreddit, article } = useParams();

    useEffect(() => {
        // props.redditClient.fetchSelectedArticle('TurtleFacts_best_01')
        // props.redditClient.fetchSelectedArticle('TurtleFacts_best_03')
        props.redditClient.fetchSelectedArticle(`${subreddit}/${article}`)
        .then(responseObj => {
            setArticleContent(responseObj[0].data.children);
            setArticleComments(responseObj[1].data.children);
        })
    }, [subreddit, article]);

    console.log('turtleFacts article content', articleContent);
    console.log('current article comments', articleComments);

    if (!articleContent) {
        return (
            <div>No article content fetched</div>
        )
    }
    if (!articleComments) {
        return (
            <div>This article doesn't have any comments yet'</div>
        )
    }

    return (
        <>
            <h3>Current article rendering with DataRender component:</h3>
            <ArticleRender dataToRender={articleContent}/>

            <h2>Current article comments rendering:</h2>
            <CommentRender dataToRender={articleComments} />
        </>
    )
}