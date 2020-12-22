import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectList = ({ category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [currentPhoto, setCurrentPhoto] = useState();

    const [projects] = useState([
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
    ]);

    const currentProjects = projects.filter((project) => project.category === category);

    const toggleModal = (image, i) => {
        setCurrentPhoto({...image, index: i});
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            {isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal}/>}
            <div className="flex-row">
                {currentProjects.map((image, i) => (
                    <img
                        src={require(`../../assets/small/${category}/${i}.jpg`)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        onClick={() => toggleModal(image, i)}
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    )
};

export default ProjectList;