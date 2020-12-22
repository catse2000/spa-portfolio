import React from 'react';
import photo from "../../assets/small/front/0.jpg";

function Project() {
    const currentCategory = {
        name: "Projects",
        description: "These are projects"
    };
    return (
        <section>
            <h1>{currentCategory.name}</h1>
            <p>{currentCategory.name}</p>
            <div className="flex-row">
                <img src={photo} alt="Commercial Example" className="img-thumbnail mx-1" />
            </div>
        </section>
    );
};

export default Project;