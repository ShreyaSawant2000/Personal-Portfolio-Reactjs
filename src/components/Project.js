import React from 'react';
import proj1 from '../images/ProjectJava.png'
import proj2 from '../images/ProjectVote.png'
import proj3 from '../images/ProjectEcom.png'
import proj4 from '../images/ProjecSpec.png'
import '../CSS/Project.css'

const Projects = () => {
  return (
    <section class="text-gray-600 body-font project">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font1 title-font mb-4 text-gray-900 tracking-widest">MY PROJECTS</h1>
     
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-7 lg:w-1/2">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center  hover1 sm:mb-0 mb-4" src={proj1}/>
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">COLLEGE MANAGEMENT SYSTEM</h2>
            <h3 class="text-gray-600 lang mb-3">(CORE JAVA MYSQL)</h3>
            <p class="mb-4 font2">College Management system Java project is developed using Java MySQL connector and MySQL database.
.</p>
           
          </div>
        </div>
      </div>
      <div class="p-7 lg:w-1/2">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover hover1 object-center sm:mb-0 mb-4" src={proj2}/>
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">COLLEGE ELECTROL SYSTEM</h2>
            <h3 class="text-gray-500 lang mb-3">(HTML,CSS JS,SQL,PHP)</h3>
            <p class="mb-4 font2">It is an online voting system designed to vote for the candidates sitting at home. It avoids malpractices. </p>
           
          </div>
        </div>
      </div>
      <div class="p-7 lg:w-1/2">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover hover1 object-center sm:mb-0 mb-4" src={proj3}/>
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">E-COMMERCE WEBSITE</h2>
            <h3 class="text-gray-500 lang mb-3">(HTML,CSS,JS,BOOTSTRAP)</h3>
            <p class="mb-4 font2">I developed an E-commerce Website using HTML, CSS, JAVASCRIPT. As an internship project for Internship Studio</p>
           
          </div>
        </div>
      </div>
      <div class="p-7 lg:w-1/2">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover hover1 object-center sm:mb-0 mb-4" src={proj4}/>
          <div class="flex-grow sm:pl-8">
            <h2 class="title-font font-medium text-lg text-gray-900">ENDANGERED SPECIES ANALYSIS USING ML</h2>
            <h3 class="text-gray-500 lang mb-3">(PYTHON,FLASK,ML)</h3>
            <p class="mb-4 font2">It was an online website where we could predict the future temperature, recognize Animal counts also get information aboutthe rare species </p>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Projects;
