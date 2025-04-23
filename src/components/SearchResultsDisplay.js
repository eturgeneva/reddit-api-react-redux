import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ArticlePreviewRender from './ArticlePreviewRender';

export default function SearchResultsDisplay(props) {

    const [searchResults, setSearchResults] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('q');

    console.log('searchParams', searchParams);
    console.log('searchParams get', searchParams.get('q'));

    useEffect(() => {
        props.redditClient.search(searchQuery)
        .then(responseObj => {
            const searchMatches = responseObj.data.children.filter(article => article.data.title.includes(searchQuery));
            setSearchResults(searchMatches);
        })

    }, [searchQuery]);

    if (!searchResults) {
        return (
            <div>No search results found</div>
        )
    }
    console.log('searchResults', searchResults);

    return (
        <div>
            <h2>Search Results</h2>
            <ArticlePreviewRender dataToRender={searchResults} />
        </div>
    )

}