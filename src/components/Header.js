import React from 'react';
import Search from './Search.js';

export default function Header() {
    return (
        <header className="appHeader">
            <h1 className="appLogo">SubReddit</h1>
            <Search />
        </header>
    )
}