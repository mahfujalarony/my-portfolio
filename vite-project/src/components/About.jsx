import React from 'react';

function About() {
  return (
    <div id='about' className='bg-gray-900 min-h-screen text-white flex items-center  justify-center px-5 py-16  gap-10'

    >
      <div className='flex flex-col gap-6 md:flex-row items-center w-full max-w-5xl'>
        {/* Image Section */}
        <div className='mb-8 md:mb-0 md:w-1/3 top-0'>
          <img 
            src="/pic3.jpg" 
            alt="about" 
            className='rounded-lg shadow-lg w-full max-h-60 object-cover hidde md:block' 
          />
        </div>
        
        {/* Text Section */}
        <div className='md:w-2/3  text-left'>
          {/* <h2 className='text-3xl font-semibold mb-4 md:hidden '>About Me</h2> */}
          <p className='text-base  font-light leading-relaxed ' style={{ fontFamily: "Poppins, sans-serif" }}>
          This is me <span className='italic font-bold'>Mahfuj Alam Rony</span>. I am a full-stack web developer specializing in the MERN stack. I have been working with <span className='font-bold italic'>JavaScript, React, Node,  MongoDB and postgreSQL</span> for about 2 years. Create responsive and interactive web applications. Whether it's building a simple landing page or a complex e-commerce website, I enjoy turning ideas and concepts into reality through code. I'm passionate about writing clean, organized, and scalable code that works well and solves real problems. In my spare time, I enjoy learning about new technologies and frameworks. So if you have any web development needs, feel free to contact me. I would love to discuss your project and see how I can help make it a reality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
