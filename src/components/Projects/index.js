import React from 'react';
//import Card from 'react-bootstrap/Card';

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
        // <div className="flex-row">
        // {photos.map((e,i) => 
        //     <Card style={{ width: '18rem'}}>
        //         <Card.Img variant="top" src={require(`../../assets/large/${i}.jpg`)} />
        //         <Card.Body>
        //             <Card.Title>{e.name}</Card.Title>
        //             <Card.Text>{e.description}</Card.Text>
        //         </Card.Body>
        //     </Card>
        // )}
        // </div>
        <div class="row row-cols-4 row-cols-md-4 g-4">
            {photos.map((e,i) =>
                <div class="col"> 
                    <div class="card bg-dark text-white">
                        <img src={require(`../../assets/large/${i}.jpg`)} alt={e.name} />
                        <div class="card-img-overlay">
                            <h5 class="card-title">{e.name}</h5>
                            <p class="card-text">{e.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Project;