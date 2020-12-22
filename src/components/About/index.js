import React from 'react';
import myPhoto from "../../assets/myPhoto/myPhoto.png";

function About() {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <div class="flex-row space-between">
                <img src={myPhoto} className="my-1 px-1" style={{ width: "30%" }} alt="Amanda Babineaux" />
                <p style={{ width: "65%" }} >I am a student of Web Development and I'm looking to challenge myself to learn bigger and better things. I'm currently seeking to learn Web Development as I've always had an interest in it. Recently, I decided it was time to take the plunge and just get my career in Web Development started.</p>
            </div>
        </section>
    )
};

export default About;