import React from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <NavLink to="/atjays">
                <h1>@Jays</h1>
            </NavLink>
            <nav>
                <NavLink to="/atjays/aboutme">About Me</NavLink>
                <NavLink to="/atjays/projects">Projects</NavLink>
                <a href="mailto:mail@mail.com">Contact</a>
            </nav>
        </header>
    );
}

export default Header;