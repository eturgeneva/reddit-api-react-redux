import React from 'react';
import { useState, useEffect } from 'react';

export default function Article () {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        fetch('https://www.reddit.com/r/TurtleFacts/.json')
        .then(response => {
            if (response.ok) {
                // console.log(response.json());
                return response.json();
            }
        })
        .then(responseObj => {
            setResponse(responseObj);
        })

    }, [])
}