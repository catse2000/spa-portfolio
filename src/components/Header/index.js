import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div>
            <header>
                <div class="container">
                    <div class="d-flex justify-content-between align-items-center">
                    <a href="/" className="header-name">
                        <h1>Amanda Babineaux</h1>
                        <h2>Web Developer Portfolio</h2>
                    </a>
                    <nav>
                        <ul className="nav">
                            <li className="nav-link">
                                <NavLink to='/' exact={true} activeClassName='navActive'>About</NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink to='/projects'>Portfolio</NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink to='/resume'>Resume</NavLink>
                            </li>
                            <li className="nav-link">
                                <NavLink to='/contact'>Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                    </div>
                </div>
            </header>
        </div>
    )
};

export default Header;