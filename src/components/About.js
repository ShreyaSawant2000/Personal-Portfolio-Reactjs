import React from 'react'

import about1 from '../images/about1.png'

import '../CSS/About.css'

const About = () => {
  return (
    <div className='about'>
    <section class="text-gray-600 about body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={about1}/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font font3 sm:text-4xl text-3xl mb-4 font-medium text-black">ABOUT ME</h1>
      <p class="mb-8 leading-relaxed leading-relaxedabout about1">As the Assistant Manager at Jio, I am a dedicated and results-driven professional with a passion for driving operational excellence in the telecommunications industry. Leveraging my expertise in team leadership and strategic planning, I play a pivotal role in ensuring the seamless functioning of day-to-day operations. My responsibilities include overseeing team performance, optimizing processes, and implementing innovative solutions to enhance customer experiences. With a keen understanding of the dynamic telecommunications landscape, I contribute to Jio's commitment to providing services and maintaining its position as a leader in the industry.</p>
     
    </div>
  </div>
</section>
      
    </div>
  )
}

export default About
