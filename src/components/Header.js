import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search.js';

export default function Header() {
    return (
        <header className="appHeader">
            <div>
                <Link to="/">
                    <h1 className="appLogo" >SubReddit</h1>
                </Link>
                <Search />
            </div>
        </header>
    )
}