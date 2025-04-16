import React from 'react';
import { useEffect, useState } from 'react';
import Article from '../components/CurrentArticle';
import DataRender from '../components/DataRender';
import CurrentArticle from '../components/CurrentArticle';

export default function ArticlePreviews(props) {
    const [articlePreviews, setArticlePreviews] = useState(null);
    console.log('ArticlePreviews props', props);

    useEffect(() => {
        props.redditClient.fetchArticlePreviews('TurtleFacts')
        // props.redditClient.fetchArticlePreviews('popular')
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
            <DataRender dataToRender={articlePreviews}/>
            <CurrentArticle redditClient={props.redditClient} />
        </div>
    )
}