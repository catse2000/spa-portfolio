import React, { useEffect} from 'react';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory, 
        currentCategory,
    } = props;

    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory]);

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
                        <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
                            <span onClick={() => setCurrentCategory(category)} >
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