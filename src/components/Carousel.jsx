import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import caro_1 from '../assets/caro_1.png';
import caro2 from '../assets/caro_2.png';
import caro3 from '../assets/caro_3.png';
import caro4 from '../assets/caro_4.png';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';



const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: <IoIosArrowBack />,
    nextArrow: <IoIosArrowForward />,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768, // Apply settings below this screen width
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='slider-container' data-aos='fade-up'>
      <Slider {...settings}>
        <div className='p-4'>
          <div>
            <img src={caro_1} alt='' />
          </div>
          <div>
            <h3>#Metaverse</h3>
          </div>
        </div>

        <div className='p-4'>
          <div>
            <img src={caro2} alt='' />
          </div>
          <div>
            <h3>#Metaverse</h3>
          </div>
        </div>

        <div className='p-4'>
          <div>
            <img src={caro3} alt='' />
          </div>
          <div>
            <h3>#Metaverse</h3>
          </div>
        </div>

        <div className='p-4'>
          <div>
            <img src={caro4} alt='' />
          </div>
          <div>
            <h3>#Metaverse</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
