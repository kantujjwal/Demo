import React, { useEffect } from 'react';
import './Portfolio.css';
import { Container } from 'react-bootstrap';

const projects = [
   {
      title: 'LoogiBook (MARSHAL)',
      header: ``,
      description: 'Manage your transport business in simple through our logistics accounting book.',
      technologies: ['Angular', 'TypeScript', 'Redux', 'HTML', 'CSS', 'BootStrap'],
      image: 'https://www.logibook.in/img/logo3.png',
      url: 'https://www.logibook.in/',
   },
   {
      title: 'CyDeploy',
      header: `Protection & Productivity In One `,
      description: `CyDeploy is an intelligent, automated testing system that demonstrates how an update will affect your system, giving you the control to maintain cybersecurity and cybersecurity compliance while avoiding costly workforce delays. `,
      technologies: ['Angular', 'TYpeScript', 'Redux', 'HTML', 'SCSS'],
      image: 'https://image.pitchbook.com/MKDQC4l1vy4wtCSwCcsi2KhFcvF1662738936795_200x200',
      url: 'https://www.cydeploy.com/',
   },
   // Add more projects as needed
];

const education = [
   {
      degree: 'Bachelor of Technology in Electrical Engineering',
      college: 'Durgapur Institute of Advanced Technology and Management,Rajbandh',
      university: 'MAKAUT',
      year: '2015-2019',
   },
   {
      degree: '12th',
      college: 'G. S. LAL Inter College,Badi',
      university: 'Bihar Secondary Education Board',
      year: '2013-2015',
   },
   {
      degree: '10th',
      college: 'Secondary Delhi Public School,Gaya',
      university: 'Central Board of Secondary Education',
      year: '2012',
   },
];

const extracurricularActivities = [
   'Web Development',
];

const passions = ['Front-end Development', 'UI/UX Design', 'Data Visualization'];

const personalInfo = {
   name: 'Ujjwal Kant',
   address: '133 St. 1D, Panditpur, Rajgir, Nalanda, State',
   phoneNumber: '9635004814',
   email: 'ujjwal2154@gmail.com',
   linkdin: '',
   profilePicture: 'profile.jpg',
   experienceYears: 1,
};

const Portfolio = () => {

   // useEffect(() => {
   //    const projectsSection = document.querySelector('.portfolio .section.projects');
   //    const projects = projectsSection.querySelectorAll('.project');

   //    const animateProjects = (entries, observer) => {
   //       entries.forEach((entry) => {
   //          if (entry.isIntersecting) {
   //             entry.target.classList.add('animated');
   //          }
   //       });
   //    };

   //    const options = {
   //       root: null,
   //       rootMargin: '0px',
   //       threshold: 0.2, // Adjust threshold as needed
   //    };

   //    const observer = new IntersectionObserver(animateProjects, options);

   //    projects.forEach((project) => {
   //       observer.observe(project);
   //    });

   //    return () => {
   //       observer.disconnect();
   //    };
   // }, []);


   return (
      <div className='pt-3 pb-3 mb-3'>
         <Container className='mt-5 pt-5 pb-5'>
            <div className="portfolio">
               <header className='text-center mb-5'>
                  <h1>Front-End Developer Portfolio</h1>
               </header>
               <section className="section profile">
                  <div className="container">
                     <div className="row">
                        <div className="col-md-4">
                           <img src={personalInfo.profilePicture} alt="Profile" className="profile-picture" />
                        </div>
                        <div className="col-md-8">
                           <h2>{personalInfo.name}</h2>
                           <p>Address: {personalInfo.address}</p>
                           <p>Phone: {personalInfo.phoneNumber}</p>
                           <p>E-mail: {personalInfo.email}</p>
                           <p>Experience: {personalInfo.experienceYears} years</p>
                        </div>
                     </div>
                  </div>
               </section>

               <section className="section projects">
                  <div className="container">
                     <h2>Projects</h2>
                     <div className="row">
                        {projects.map((project, index) => (
                           <div className="col-md-6" key={index}>
                              <div className="project">
                                 <img src={project.image} alt={project.title} />
                                 <div className="project-info">
                                    <h3>{project.title}</h3>
                                    <h5>{project.header}</h5>
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
                  </div>
               </section>

               <section className="section education">
                  <div className="container">
                     <h2>Education</h2>
                     <ul>
                        {education.map((edu, index) => (
                           <li key={index}>
                              <h5><b>{edu.degree}</b></h5>
                              <p>{edu.year}</p>
                              <p>{edu.university}</p>
                              <p>{edu.college}</p>
                           </li>
                        ))}
                     </ul>
                  </div>
               </section>

               <section className="section activities">
                  <div className="container">
                     <h2>Extracurricular Activities</h2>
                     <ul>
                        {extracurricularActivities.map((activity, index) => (
                           <li key={index}>{activity}</li>
                        ))}
                     </ul>
                  </div>
               </section>

               <section className="section passions">
                  <div className="container">
                     <h2>Passions</h2>
                     <ul>
                        {passions.map((passion, index) => (
                           <li key={index}>{passion}</li>
                        ))}
                     </ul>
                  </div>
               </section>

               <footer>
                  <p>&copy; {new Date().getFullYear()} Front-end Developer Portfolio. All rights reserved.</p>
               </footer>
            </div>
         </Container>
      </div>
   );
};

export default Portfolio;
