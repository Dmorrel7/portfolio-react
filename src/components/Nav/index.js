import React from 'react';

function Nav() {
    return (
        <header className="flex-row header-nav">
            <h2>
                <a href="/">Dalton Morrel</a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li>About Me</li>
                    <li>Projects</li>
                    <li>Contact Me</li>
                    <li>Resume</li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;