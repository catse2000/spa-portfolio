import React from 'react';
import ProjectList from "../ProjectList";

function Project(props) {
    const { currentCategory } = props;
    return (
        <section>
            <h1>{currentCategory.name}</h1>
            <p>{currentCategory.description}</p>
            <ProjectList category={currentCategory.name}/> 
        </section>
    );
};

export default Project;