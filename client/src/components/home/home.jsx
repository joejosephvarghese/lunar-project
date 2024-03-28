import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { data} from '../../constants/constants'

function home() {
  return (
    <div>
      
    </div>
  )
}

const HomeScreen = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Transition every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [data.length]);

  return (
    <div className="carousel">
      <img className='w-[1300px] h-96 ml-11 mt-3 ' src={data[currentImageIndex]} alt="carousel" />
    </div>
  );
};

export default HomeScreen;



