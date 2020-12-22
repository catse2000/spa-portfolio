import React, { useEffect} from 'react';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory, 
        currentCategory,
        contactSelected,
        setContactSelected
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
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <a href="#about" onClick={() => setContactSelected(false)}>
                            About Me
                        </a>
                    </li>
                    <li>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    <li>
                        <span>Projects</span>
                    </li>
                    <li>
                        <span>Resume</span>
                    </li>
                    {categories.map((category) => (
                        <li className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'}`} key={category.name}>
                            <span onClick={() => {
                                setCurrentCategory(category);
                                setContactSelected(false);
                                }} >
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