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
            <a href="/" className="header-name">
                <h2>Amanda Babineaux</h2>
                <h3>Web Developer Portfolio</h3>
            </a>
            <nav>
                <ul className="flex-row">
                    <li className={`mx-1 ${contactSelected && 'navActive'}`}>
                        <a href="#about" onClick={() => setContactSelected(false)}>
                            <span>About Me</span>
                        </a>
                    </li>
                    <li className="mx-1">
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    <li className="mx-1">
                        <span>Projects</span>
                    </li>
                    <li className="mx-1">
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