import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Title = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true, 
        });
      }, []);
    

    return (
        <div
        data-aos="flip-right" 
        data-aos-delay="100"
         className='mb-10 px-4 md:px-0'>
           <h2 className='text-center text-2xl md:text-[40px] font-bold mb-5 text-lime-800'>Adventure Experiences</h2> 
           <p className='text-center text-base text-gray-500'>Reconnect with nature through adventures that inspire and sustain. Discover the beauty of the world responsibly"
           </p>
        </div>
    );
};

export default Title;