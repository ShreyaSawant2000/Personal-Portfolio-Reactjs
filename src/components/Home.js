

import React from 'react';
import hero_image1 from '../images/hero_image1.png';
import '../CSS/Home.css';

const Home = () => {
  return (
    <div className='home'>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex  py-32 md:flex-row flex-col items-center">
          <div className="lg:w-1/3 md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={hero_image1} />
          </div>
          <div className="lg:w-2/3 md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <div className="outer-headings">
              <h1 className='heading'>
               
                <strong style={{ fontSize: '40px',color:'black' }}>I am,</strong>
                <div className="inner-headings">
                  <span>
                    Shreya Sawant<br />
                    Assistant Manager <br />
                    AT <br />
                    Jio Platforms<br />
                    <br />
                    GET
                  </span>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

