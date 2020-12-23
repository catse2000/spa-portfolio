import React from 'react';

function Project() {
    const photos = [
        {
            name: 'Project 1',
            category: 'Front-End Projects',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'Project 2',
            category: 'Front-End Projects',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'Project 3',
            category: 'Front-End Projects',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'Project 4',
            category: 'Front-End Projects',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'Project 5',
            category: 'Back-End Projects',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'Project 6',
            category: 'Back-End Projects',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'Project 7',
            category: 'Back-End Projects',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        }, 
        {
            name: 'Project 8',
            category: 'Back-End Projects',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        }, 
        {
            name: 'Project 9',
            category: 'Back-End Projects',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        }, 
        {
            name: 'Project 10',
            category: 'Back-End Projects',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        }, 
        {
            name: 'Project 11',
            category: 'Back-End Projects',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        }, 
        {
            name: 'Project 12',
            category: 'Team Projects',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        },
        {
            name: 'Project 13',
            category: 'Team Projects',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
        }
    ];

    return (
        <div>
        {photos.map((e,i) => 
            <img src={require(`../../assets/large/${i}.jpg`)} />)} 
        </div>
    );
};

export default Project;