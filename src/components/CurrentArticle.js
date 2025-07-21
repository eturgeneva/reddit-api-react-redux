import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleRender from './ArticleRender';
import CommentRender from './CommentRender';

export default function CurrentArticle(props) {
    const [articleContent, setArticleContent] = useState(null);
    const [articleComments, setArticleComments] = useState(null);
    const [isArticleLoading, setIsArticleLoading] = useState(true);
    const [isCommentsLoading, setIsCommentsLoading] = useState(true);
    const { subreddit, articleId } = useParams();

    useEffect(() => {
        setIsArticleLoading(true);
        setIsCommentsLoading(true);

        props.redditClient.fetchSelectedArticle(`${subreddit}/${articleId}`)
        .then(responseObj => {
            setArticleContent(responseObj[0].data.children);
            setIsArticleLoading(false);

            setArticleComments(responseObj[1].data.children);
            setIsCommentsLoading(false);
        })
        .catch(err => {
            console.error('Failed to fetch the article', err);
            setIsArticleLoading(false);
            setIsCommentsLoading(false);
        })
    }, [subreddit, articleId]);

    console.log('turtleFacts article content', articleContent);
    console.log('current article comments', articleComments);

    // if (!articleContent) {
    //     return (
    //         <div>No article content fetched</div>
    //     )
    // }
    // if (!articleComments) {
    //     return (
    //         <div>This article doesn't have any comments yet'</div>
    //     )
    // }

    return (
        <div className="selectedArticle">
                <ArticleRender dataToRender={articleContent} loading={isArticleLoading}/>
                <CommentRender dataToRender={articleComments} loading={isCommentsLoading}/>
        </div>
    )
}