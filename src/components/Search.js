import React from 'react';
import { useState } from 'react';
import { useNavigate, createSearchParams, useParams, useSearchParams} from 'react-router-dom';

export default function Search () {

    const [searchParams, setSearchParams] = useSearchParams();
    const [searchInput, setSearchInput] = useState(searchParams.get('q'));
    const navigate = useNavigate();

    console.log('searchParams', searchParams.get('q'));
    console.log('navigate', navigate);

    function submitHandler(e) {
        e.preventDefault();
        
        const query = {
            q: searchInput
        };

        const queryString = createSearchParams(query);
        // console.log('queryString', queryString);

        navigate({
            pathname: `/search/`,
            search: `${queryString}`
        })

    }

    return (
        <form onSubmit={submitHandler} className="searchForm">
            <input onChange={e => setSearchInput(e.target.value)} 
                    className="search" 
                    type="text" 
                    placeholder="Search"
                    value={searchInput}/>
            <button className="searchButton" type="submit">
                🔍
            </button>
        </form>
    )
}
