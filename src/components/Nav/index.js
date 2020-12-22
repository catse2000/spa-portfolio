import React from 'react';

function Nav() {
    const categories = [
        {
            name: "Front-End Projects",
            description: "Front End Web Projects I've completed"
        },
        {
            name: "Back-End Projects",
            description: "Back End Web Projects I've completed"
        },
        {
            name: "Team Projects",
            description: "Team projects I've worked on"
        }
    ];

    function categorySelected(name) {
        console.log(`${name} clicked`);
    };

    return (
        <header>
            <h2>
                <a href="/">
                    Amanda Babineaux
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    <li>
                        <span>Projects</span>
                    </li>
                    <li>
                        <span>Resume</span>
                    </li>
                    {categories.map((category) => (
                        <li className="mx-1" key={category.name}>
                            <span onClick={() => categorySelected(category.name)} >
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>

    )
};

export default Nav;