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
      className='min-h-screen flex flex-col md:flex-row md:gap-12 items-center justify-center p-4 mt-16 xl:px-20 md:px-10 ' 
      // style={{
      //   background: 'linear-gradient(18deg, rgba(0,0,31,1) 0%, rgba(52,37,60,0.8090423669467788) 25%, rgba(25,27,28,1) 61%, rgba(0,62,231,1) 100%)'
      // }}
    >
      {/* Text Content Section */}
      <div className='w-full md:w-2/3 text-center md:text-left order-2 md:order-1'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4 text-white'>
          <span className="text-yellow-500 font-semibold">
            Hello, I'm MERN Stack Developer
          </span>
        </h1>

        <h1 className='text-3xl md:text-4xl font-semibold mb-4 text-white'>
          Hello, I am <span className='text-cyan-400'>Mahfuj Alam Rony</span>
        </h1>

        <p className='text-white mb-6 text-lg md:text-xl'>
          Passionate developer with experience in web technologies, building dynamic and interactive applications. Let's connect and build something amazing!
        </p>

        {/* Call-to-Action Button */}
        <button className='bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300'>
          Download CV
        </button>
      </div>

      {/* Profile Image Section */}
      <div className='w-full md:w-1/3 flex justify-center mb-8 md:mb-0 order-1 md:order-2'>
        <div className="rounded-full w-48 h-48 md:w-64 md:h-64 shadow-xl border-4 border-blue-500">
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