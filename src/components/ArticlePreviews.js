import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticlePreviewRender from './ArticlePreviewRender';

export default function ArticlePreviews(props) {
    const [articlePreviews, setArticlePreviews] = useState(null);
    const [isArticlePreviewsLoading, setIsArticlePreviewsLoading] = useState(true);
    console.log('ArticlePreviews props', props);
    const { subreddit } = useParams();

    useEffect(() => {
        setIsArticlePreviewsLoading(true);

        props.redditClient.fetchArticlePreviews(subreddit)
        .then(responseObj => {
            console.log('responseObj in ArticlePreviews', responseObj);
            setArticlePreviews(responseObj.data.children);

            setIsArticlePreviewsLoading(false);
        })
        .catch(err => {
            console.error('Failed to fetch articles', err);
            setIsArticlePreviewsLoading(false);
        })
    }, [subreddit]);

    console.log('turtleFacts article previews', articlePreviews);

    return (
        <div className="articlePreviews">
            <ArticlePreviewRender dataToRender={articlePreviews || []} loading={isArticlePreviewsLoading}/>
        </div>
    )
}