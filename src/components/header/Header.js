import React from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <NavLink to="/">
                <h1>@Jays</h1>
            </NavLink>
            <nav>
                <NavLink to="/aboutme">About Me</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <a href="mailto:mail@mail.com">Contact</a>
            </nav>
        </header>
    );
}

export default Header;