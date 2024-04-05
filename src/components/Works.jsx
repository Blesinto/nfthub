import { useState } from 'react';
import work_1 from '../assets/work_1.png';
import work_2 from '../assets/work_2.png';
import work_3 from '../assets/work_3.png';
import { GoArrowUpRight } from 'react-icons/go';

const Works = () => {
  const [works] = useState([
    {
      img: work_1,
      id: 1,
      title: 'Setup and connect your wallet.',
      desc: 'Use Trust Wallet, Metamask or any wallet to connect to multiple chains the app. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit Metamask or any wallet ipsam temporibus.',
    },
    {
      img: work_2,
      id: 2,
      title: 'Create your own digital artwork',
      desc: 'Use Trust Wallet, Metamask or any wallet to connect to multiple chains the app. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit Metamask or any wallet ipsam temporibus.',
    },
    {
      img: work_3,
      id: 3,
      title: 'Choose a platform to sell your NFT.',
      desc: 'Use Trust Wallet, Metamask or any wallet to connect to multiple chains the app. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit Metamask or any wallet ipsam temporibus.',
    },
  ]);
  return (
    <div className='container mt-[10rem]'>
      <div
        className='flex items-center sss:text-center justify-center mb-[5rem]'
        data-aos='zoom-in'
        data-aos-offset='50'
      >
        <h1 className='text-3xl font-bold mb-[5rem]'>
          How{' '}
          <span className=' bg-gradient-to-r from-[#2600FC] to-[#FF00EA] tp'>
            it works!
          </span>
        </h1>
      </div>

      {works.map(({ img, title, id, desc }, index) => (
        <div
          key={id}
          className='flex justify-between sss:text-center sss:justify-center  items-center sss:flex-col-reverse '
        >
          <div
            className={` ${
              index % 2 === 1 ? 'order-2 sss:order-1 m-4  ' : 'sss:pr-0 pr-8'
            } `}
            data-aos='fade-up'
            data-aos-offset='500'
            data-aos-duration='500'
          >
            <img src={img} alt={title} className='w-[270px]' />
          </div>
          <div
            className={`order-1 ${index % 2 === 1 ? '  ' : 'pr-8 sss:pr-0'}`}
          >
            <h5
              className=' tp text-sm font-bold bg-gradient-to-r from-[#2600FC] to-[#FF00EA]'
              data-aos='fade-up'
              data-aos-offset='200'
              data-aos-duration='500'
            >
              0{id}
            </h5>
            <h1
              className='font-bold text-2xl w-[15rem] sss:w-full'
              data-aos='fade-up'
              data-aos-offset='200'
              data-aos-duration='500'
            >
              {title}
            </h1>
            <p
              dangerouslySetInnerHTML={{ __html: desc }}
              className='w-[300px]  mt-8 text-[13px] '
              data-aos='fade-up'
              data-aos-offset='500'
            ></p>
            <div
              className='flex sss:justify-center mt-6 items-center mb-[5rem] '
              data-aos='fade-up'
              data-aos-offset='500'
            >
              <a href={`#${id}`} className='text-black text-[12px] '>
                Learn More
              </a>
              <span>
                {' '}
                <GoArrowUpRight className='text-[13px] sss:text-center' />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Works;
