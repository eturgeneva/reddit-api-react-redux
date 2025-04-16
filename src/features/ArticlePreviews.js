import React from 'react';
import { useEffect, useState } from 'react';
import Article from '../components/Article';
import DataRender from '../components/DataRender';

export default function ArticlePreviews(props) {
    const [articlePreviews, setArticlePreviews] = useState(null);
    console.log('ArticlePreviews props', props);

    useEffect(() => {
        // props.redditClient.fetchPostsPreviews('TurtleFacts')
        props.redditClient.fetchPostsPreviews('popular')
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
            <Article />
        </div>
    )
}