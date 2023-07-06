import React from 'react';
// import './Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const projects = [
   {
      title: 'Loogibook (MARSHAL)',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
      image: 'project1.jpg',
      url: 'https://example.com/project1',
   },
   {
      title: 'CyDeploy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      technologies: ['React', 'Redux', 'Firebase', 'SASS'],
      image: 'project2.jpg',
      url: 'https://cydeploy.com',
   },
];

const education = [
   {
      degree: 'Bachelor of Science in Computer Science',
      university: 'ABC University',
      year: '2015-2019',
   },
   {
      degree: 'Diploma in Web Development',
      university: 'XYZ Institute',
      year: '2020-2021',
   },
];

const extracurricularActivities = [
   'Web Development Club',
   'Hackathons',
   'Open Source Contributions',
];

const passions = ['Front-end Development', 'UI/UX Design', 'Data Visualization'];

const Portfolio = () => {
   return (
      <div className="portfolio">
         <header>
            <h1>Front-end Developer Portfolio</h1>
         </header>

         <section className="section projects">
            <h2>Projects</h2>
            <div className="row">
               {projects.map((project, index) => (
                  <div className="col-md-6" key={index}>
                     <div className="project">
                        <img src={project.image} alt={project.title} />
                        <div className="project-info">
                           <h3>{project.title}</h3>
                           <p>{project.description}</p>
                           <p>Technologies used: {project.technologies.join(', ')}</p>
                           <a href={project.url} target="_blank" rel="noopener noreferrer">
                              View Project
                           </a>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </section>

         <section className="section education">
            <h2>Education</h2>
            <ul>
               {education.map((edu, index) => (
                  <li key={index}>
                     <h3>{edu.degree}</h3>
                     <p>{edu.university}</p>
                     <p>{edu.year}</p>
                  </li>
               ))}
            </ul>
         </section>

         <section className="section activities">
            <h2>Extracurricular Activities</h2>
            <ul>
               {extracurricularActivities.map((activity, index) => (
                  <li key={index}>{activity}</li>
               ))}
            </ul>
         </section>

         <section className="section passions">
            <h2>Passions</h2>
            <ul>
               {passions.map((passion, index) => (
                  <li key={index}>{passion}</li>
               ))}
            </ul>
         </section>

         <footer>
            <p>&copy; 2023 Front-end Developer Portfolio. All rights reserved.</p>
         </footer>
      </div>
   );
};

export default Portfolio;
