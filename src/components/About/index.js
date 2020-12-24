import React from 'react';
import myPhoto from "../../assets/myPhoto/myPhoto.png";

function About() {
    return (
        <section className="m-4">
            <h1 className="my-4 text-center">About Me</h1>
            <div class="text-center">
                <img src={myPhoto} className="my-2 px-2" style={{ width: "30%" }} alt="Amanda Babineaux" />
                <p className="my-2 px-2">I am a student of Web Development and I'm looking to challenge myself to learn bigger and better things. I'm currently seeking to learn Web Development as I've always had an interest in it. Recently, I decided it was time to take the plunge and just get my career in Web Development started.</p>
            </div>
        </section>
    )
};

export default About;