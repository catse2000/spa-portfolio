import React from 'react';

function Project() {
    const photos = [
        {
            name: 'Password Generator',
            type: 'Javascript',
            site: 'https://catse2000.github.io/password-generator/',
            github: 'https://github.com/catse2000/password-generator',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'Coding Quiz Challenge',
            type: 'Web API',
            site: 'https://catse2000.github.io/challenge-assessment/',
            github: 'https://github.com/catse2000/challenge-assessment',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'Work Day Scheduler',
            type: 'Third-Party APIs',
            site: 'https://catse2000.github.io/work-day-scheduler/',
            github: 'https://github.com/catse2000/work-day-scheduler',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'Weather Dashboard',
            type: 'Server Side API',
            site: 'https://catse2000.github.io/weather-forecast-app/',
            github: 'https://github.com/catse2000/weather-forecast-app',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'Star Gazr - Team Project',
            type: 'Front-End Site',
            site: 'https://p1t2-batman.github.io/stargazr/',
            github: 'https://github.com/p1t2-batman/stargazr',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'Readme Generator',
            type: 'Node.js',
            site: '',
            github: 'https://github.com/catse2000/readme-generator',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'Team Profile Generator',
            type: 'Object-Oriented Programming',
            site: '',
            github: 'https://github.com/catse2000/team-profile-generator',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        }, 
        {
            name: 'Note Keeper',
            type: 'Express.js',
            site: 'https://mighty-tor-38638.herokuapp.com/',
            github: 'https://github.com/catse2000/note-keeper',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        }, 
        {
            name: 'Employee Tracker',
            type: 'SQL',
            site: '',
            github: 'https://github.com/catse2000/employee-tracker',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        }, 
        {
            name: 'E-Commerce',
            type: 'Object Relational Mapping (ORM)',
            site: '',
            github: 'https://github.com/catse2000/e-commerce',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        }, 
        {
            name: 'The Tech Blog',
            type: 'Model-View-Controller (MVC)',
            site: 'https://cryptic-sands-31802.herokuapp.com/',
            github: 'https://github.com/catse2000/tech-blog',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        }, 
        {
            name: 'Budget Calculator',
            type: 'Progressive Web Applications (PWA)',
            site: 'https://shrouded-atoll-40459.herokuapp.com/',
            github: 'https://github.com/catse2000/budget-tracker',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'Nebula-Edu - Team Project',
            type: 'Front End Site',
            site: 'https://enigmatic-sea-17171.herokuapp.com/',
            github: 'https://github.com/Team-Lemon/Nebula-Edu',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        }
    ];

    return (
        <section className="m-4">
            <h2 className="my-4 text-center">Project Gallery</h2>
            <p className="text-center">Here is an assortment of the various projects I've worked on.</p>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {photos.map((e,i) =>
                <div className="col"> 
                    <div className="card shadow-sm">
                        <img className="card-img-top" src={require(`../../assets/large/${i}.jpg`)} alt={e.name} />
                        <div className="card-body">
                            <h5 className="card-title">{e.name}</h5>
                            <p className="card-text">{e.description}</p>
                        </div>
                        <div className="card-body d-flex">
                            <a href={e.github} className="card-link" alt={e.name} target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-2x mx-1"></i></a>
                            {e.site != '' && <a href={e.site} className="card-link" alt="" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt fa-2x mx-1"></i></a>}
                        </div>
                    </div>
                </div>
            )}
        </div>
        </section>
    );
};

export default Project;