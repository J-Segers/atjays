import React from 'react';
import "./Header.css";

function Header() {
    return (
        <header>
            <a href="#">
                <h1>@Jays</h1>
            </a>
            <nav>
                <a href="#">About Me</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    );
}

export default Header;