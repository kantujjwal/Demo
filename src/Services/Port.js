import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const projects = [
   {
      title: 'Logibook',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
      image: 'project1.jpg',
      url: 'https://example.com/project1',
   },
   {
      title: 'CyDeploy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      technologies: ['Angular', 'Redux', 'HTML', 'SASS', 'JavaScript', 'API Integration'],
      image: 'project2.jpg',
      url: 'https://example.com/project2',
   },
];

const Portfolio = () => {
   return (
      <div className='pt-3 pb-3 mb-3'>
         <Container className='mt-5 pt-5 pb-5'>
            <div className="portfolio">
               <h1>Front-end Developer Portfolio</h1>
               <Row className="projects">
                  {projects.map((project, index) => (
                     <Col className="project" key={index}>
                        <img src={project.image} alt={project.title} />
                        <div className="project-info">
                           <h2>{project.title}</h2>
                           <p>{project.description}</p>
                           <p>Technologies used: {project.technologies.join(', ')}</p>
                           <a href={project.url} target="_blank" rel="noopener noreferrer">
                              View Project
                           </a>
                        </div>
                     </Col>
                  ))}
               </Row>
            </div>
         </Container>
      </div>
   );
};

export default Portfolio;
