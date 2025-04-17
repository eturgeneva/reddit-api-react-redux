import React from 'react';
import { useEffect, useState } from 'react';
import Article from '../components/CurrentArticle';
import ArticleRender from '../components/ArticleRender';
import CurrentArticle from '../components/CurrentArticle';

export default function ArticlePreviews(props) {
    const [articlePreviews, setArticlePreviews] = useState(null);
    console.log('ArticlePreviews props', props);
    // const subredditName = props.subreddit ? props.subreddit : 'popular';
    const subredditName = props.subreddit;

    useEffect(() => {
        // props.redditClient.fetchArticlePreviews('TurtleFacts')
        // props.redditClient.fetchArticlePreviews('popular')
        props.redditClient.fetchArticlePreviews(subredditName)
        .then(responseObj => {
            console.log('responseObj in ArticlePreviews', responseObj);
            // setArticlePreviews(responseObj);
            setArticlePreviews(responseObj.data.children);
        })
    }, []);

    console.log('turtleFacts article previews', articlePreviews);

    if (!articlePreviews) {
        return (
            <div>No data fetched</div>
        )
    }

    return (
        <div>
            <ArticleRender dataToRender={articlePreviews}/>
            <CurrentArticle redditClient={props.redditClient} />
        </div>
    )
}