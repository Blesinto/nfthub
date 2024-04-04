import design from '../assets/design.png';
import Carousel from './Carousel';
import { GoArrowUpRight } from 'react-icons/go';

const Collections = () => (
  <div className='container mt-[10rem] sss:px-8'>
    <div className='flex  justify-center items-center'>
      <img src={design} alt='' />
    </div>

    {/* carousel  */}
    <div className='mt-10'>
      <div className='flex items-center justify-center' data-aos='fade-up'>
        <h1 className='text-3xl font-bold'>
          Nfthub&apos;s{' '}
          <span className=' bg-gradient-to-r from-[#2600FC] to-[#FF00EA] tp'>
            collection
          </span>
        </h1>
      </div>
      <Carousel />
      <div className='flex justify-center items-center'>
        <button className='flex text-[12px] items-center mt-8 bg-gradient-to-r from-[#2600FC] to-[#FF00EA]  hover:from-[#FF00EA] hover:to-[#2600FC]  text-white px-8 py-4 rounded-full'>
          View collection
          <span>
            <GoArrowUpRight />
          </span>
        </button>
      </div>
    </div>
  </div>
);

export default Collections;
