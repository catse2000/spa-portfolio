import React, { useEffect} from 'react';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header>
            <a href="/" className="header-name">
                <h2>Amanda Babineaux</h2>
                <h3>Web Developer Portfolio</h3>
            </a>
            <nav>
                <ul className="flex-row">
                    <li className="mx-1">
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li className="mx-1">
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                    <li className="mx-1">
                        <NavLink to='/projects'>Projects</NavLink>
                    </li>
                    <li className="mx-1">
                        <NavLink to='/resume'>Resume</NavLink>
                    </li>
                </ul>
            </nav>
        </header>

    )
};

export default Header;