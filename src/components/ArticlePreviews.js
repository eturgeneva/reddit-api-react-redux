import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticlePreviewRender from './ArticlePreviewRender';

export default function ArticlePreviews(props) {
    const [articlePreviews, setArticlePreviews] = useState(null);
    console.log('ArticlePreviews props', props);
    const { subreddit } = useParams();

    useEffect(() => {
        props.redditClient.fetchArticlePreviews(subreddit)
        .then(responseObj => {
            console.log('responseObj in ArticlePreviews', responseObj);
            setArticlePreviews(responseObj.data.children);
        })
    }, [subreddit]);

    console.log('turtleFacts article previews', articlePreviews);

    if (!articlePreviews) {
        return (
            <div>No data fetched</div>
        )
    }

    return (
        <div className="articlePreviews">
            <ArticlePreviewRender dataToRender={articlePreviews} />
        </div>
    )
}