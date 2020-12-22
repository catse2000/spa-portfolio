import React from 'react';
import myPhoto from "../../assets/myPhoto/myPhoto.png";

function About() {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <img src={myPhoto} className="my-2" style={{ width: "100%" }} alt="Photo of Amanda Babineaux" />
            <p>This is the about me page.</p>
        </section>
    )
};

export default About;