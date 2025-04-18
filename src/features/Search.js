import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';

export default function Search () {

    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();
    console.log('navigate', navigate);

    function submitHandler(e) {
        e.preventDefault();
        
        const query = {
            title: searchInput
        };

        const queryString = createSearchParams(query);
        console.log('queryString', queryString);

        navigate({
            pathname: '/TurtleFacts',
            search: `${queryString}`
        })

    }

    return (
        <form onSubmit={submitHandler} className="searchForm">
            <input onChange={e => setSearchInput(e.target.value)} className="search" type="text" placeholder="Search"/>
            <button className="searchButton" type="submit">
                🔍
            </button>
        </form>

        // <div className="searchForm">
        //     <input onChange={e => setSearchInput(e.target.value)} className="search" type="text" placeholder="Search"/>
        //     <button onClick={submitHandler} className="searchButton">
        //         🔍
        //     </button>
        // </div>
    )
}
