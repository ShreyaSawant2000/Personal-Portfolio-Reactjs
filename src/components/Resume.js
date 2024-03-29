import React from 'react';
import yourresume from '../your-resume.pdf';
import download_image from '../images/download_image.png';
import '../CSS/Resume.css';

const Resume = () => {
  const googleDrivePdfLink='https://drive.google.com/file/d/10Rsw15UgSdSyxs5infmbgxGqp-GAqLNk/view?usp=sharing'
  return (
    <div>
      <section className="text-gray-600 body-font resume">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={download_image} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className=" res1 title-font sm:text-1xl text-1xl mb-4 font-small text-black-900">
              Unlock my full professional
              <br /> journey and expertise
              <br className="hidden lg:inline-block" /> Download my resume now to explore a comprehensive overview of my skills, experiences, and achievements.
            </h1>

          
            <div class="flex justify-center">
  <button class="inline-flex btn-res text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
    <a href={yourresume} download="ShreyaSawant_Resume.pdf">Download Resume</a>
  </button>
  <button class="ml-4 btn-res inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
    <a href={googleDrivePdfLink} download="ShreyaSawant_Resume.pdf">View Resume Online</a>
  </button>
</div>

          
            
          </div>
        </div>
      </section>
      <hr/>
    </div>
  );
};

export default Resume;
