import React from 'react';
import { useState, useEffect } from 'react';
// import turtleFacts from '../data/turtleFacts.json';

export default function Article () {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        // Add best to sort by best
        // fetch('https://www.reddit.com/r/TurtleFacts/.json')
        fetch('/mocks/TurtleFacts.json')
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(responseObj => {
            setResponse(responseObj);
        })
    }, [])

    console.log('turtleFacts json', response);
    if (!response) {
        return (
            <div>No data fetched</div>
        )
    }

    return (
        <>
         <h2>Post expanded</h2>
        </>
    )
}