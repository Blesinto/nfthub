import hero_image from '../assets/hero_image.svg';
import prof_1 from '../assets/prof_1.png';
import prof_2 from '../assets/prof_2.png';
import prof_3 from '../assets/prof_3.png';
import { GoArrowUpRight } from 'react-icons/go';

const HeroSection = () => (
  <div className='container absolute top-[13rem] sss:top-[9rem] sss:text-center sss:m-auto sss:w-full w-full'>
    <div className='flex sss:flex-col justify-between items-center  '>
      <div>
        <h1
          className='font-bold font-inter text-5xl capitalize w-[370px] sss:text-3xl sss:w-full'
          data-aos='fade-right'
          data-aos-offset='-400'
        >
          High Quality NFT Collection
        </h1>
        <p className='w-[20rem]  mt-4 ' data-aos='fade-right'>
          A 890 piece custom {`Nfthub's`} collection is joining the NFT space on
          Opensea.
        </p>
        <div data-aos='fade-right '>
          <button className='flex text-[12px]  mt-8 bg-gradient-to-r from-[#2600FC] to-[#FF00EA]  hover:from-[#FF00EA] hover:to-[#2600FC]  text-white px-8 py-4 sss:px-8 sss:py-4 sss:text-[10px] sss:mx-auto rounded-full'>
            View in OPENSEA
            <span>
              <GoArrowUpRight />
            </span>
          </button>
        </div>

        <div className='mt-8' data-aos='fade-right'>
          <div className='flex items-center '>
            <div className='flex sss:mx-auto'>
              <img
                src={prof_1}
                alt=''
                className='mr-[-2rem] w-[50px] h-[50px]  sss:w-[42px] sss:h-[42px] sss:mr-[-1.5rem]'
              />
              <img
                src={prof_2}
                alt=''
                className='mr-[-2rem] w-[50px] h-[50px] sss:w-[42px] sss:h-[42px] sss:mr-[-1.5rem]'
              />
              <img
                src={prof_3}
                alt=''
                className='mr-[0.5rem] w-[50px] h-[50px] sss:w-[42px] sss:h-[42px] '
              />
            </div>
            <div className='flex flex-col  sss:relative sss:right-14 sss:text-start'>
              <h1 className=' font-bold text-xl '>47k+</h1>
              <p className='text-[10px] '>Community members</p>
            </div>
          </div>
        </div>
      </div>
      {/* hero_image  */}
      <div data-aos='fade-left'>
        <img
          src={hero_image}
          alt=''
          className=' w-[320px] sss:w-[300px] sss:mt-[5rem] '
        />
      </div>
    </div>
  </div>
);
export default HeroSection;
