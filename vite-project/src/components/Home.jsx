import React, { useEffect, useState } from 'react';

function Home() {
  const [visible, setVisible] = useState(false); // State to control image visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true); // Set visible to true after 1 second
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div 
      id='home' 
      className='min-h-screen flex flex-col md:flex-row md:gap-12 items-center justify-center p-4 mt-16 xl:px-20 md:px-10' 
    >
      {/* Text Content */}
      <div className='w-full md:w-2/3 text-center md:text-left order-2 md:order-1'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4 text-white'>
          <span className="text-yellow-500 font-semibold">
            <span className='text-white'>I am </span> 
            <span className='italic'>Mahfuj Alam Rony</span>
          </span>
        </h1>

        <p className='text-white mb-6 text-lg md:text-xl'>
          I am a Mern-stack web developer dedicated to building beautiful, high-performance systems using cutting-edge technologies.
        </p>

        <div className="flex gap-4 justify-center md:justify-start">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
             <a href="/CV.pdf" download>Download CV</a>
          </button>


          <button 
            className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 border-2 border-purple-300"
          >
            <a href="https://drive.google.com/file/d/1MfJ9axvOfBap_giro4msxNbf97YLl2KA/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Show Resume</a>
          </button>
        </div>
      </div>

      {/* Profile Image */}
      <div className='w-full md:w-1/3 flex justify-center mb-8 md:mb-0 order-1 md:order-2'>
        <div className="rounded-full w-48 h-48 md:w-64 md:h-64 shadow-xl border-4 border-blue-500 overflow-hidden">
          <img 
            src='/ronyblack-modified.png' 
            alt='Profile' 
            className={`transition-all duration-3000 ease-in-out ${visible ? 'filter-none' : 'filter blur-sm'} rounded-full w-48 h-48 md:w-64 md:h-64 object-cover`}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;