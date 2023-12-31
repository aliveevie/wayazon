import React, { useState, useEffect } from 'react';
// import SliderData from '../data/sliderImages';
import '../styles/slider.css';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const [SliderData, setSliderData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/admin/products');
      const teams = await response.json();
      setSliderData(teams);
    }

    fetchData();
  }, []);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount

  }, [current]); // Run effect whenever 'current' changes

  return (
    <section className='slider'>
     <button className='left-arrow' onClick={prevSlide}>
        &lt;
      </button>
      <button className='right-arrow' onClick={nextSlide}>
        &gt;
      </button>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image_link} alt={slide.product_name} className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;