import meet1 from '../assets/meet_1.png';
import meet2 from '../assets/meet_2.png';
import meet3 from '../assets/meet_3.png';
import meet4 from '../assets/meet_4.png';

import { IoLogoTwitter } from 'react-icons/io';
import { FaInstagram } from 'react-icons/fa6';
import { RiDiscordFill } from 'react-icons/ri';

import design from '../assets/design.png';

const meet = [
  {
    img: meet1,
    name: 'Steps Jobs',
    prof: 'Artist',
  },
  {
    img: meet2,
    name: 'Andry Moray',
    prof: 'Artist',
  },
  {
    img: meet3,
    name: 'Zaid Ed',
    prof: 'Artist',
  },
  {
    img: meet4,
    name: 'Laila Ed',
    prof: 'Artist',
  },
];

const Meet = () => (
  <div className='container  mt-[5rem]'>
    <div className='flex items-center justify-center mb-[5rem]' data-aos='zoom-in'
      data-aos-offset='200'>
      <h1 className='text-3xl font-bold'>
        Meet{' '}
        <span className=' bg-gradient-to-r from-[#2600FC] to-[#FF00EA] tp'>
          the artists
        </span>
      </h1>
    </div>

    <div className=' flex justify-center items-center sss:flex-col'>
      {meet.map(({ id, img, name, prof }, index) => (
        <div
          key={id}
          className={`${
            index % 2 === 0 ? 'top-[2rem]' : ''
          } p-10 text-center  m-2 relative`}
        >
          <img src={img} alt='' className='w-[6rem]' />
          <h1 className='font-bold mt-4 '>{name}</h1>
          <h6 className='text-[10px]'>{prof}</h6>
          <div className='flex items-center justify-center text-[15px] '>
            <a href='#' className='p-1'>
              <IoLogoTwitter />
            </a>

            <a href='#' className='p-1'>
              <RiDiscordFill />
            </a>
            <a href='#' className='p-1'>
              <FaInstagram />
            </a>
          </div>
        </div>
      ))}
    </div>
    <div className='flex  justify-center items-center mt-[5rem] '>
      <img src={design} alt='' />
    </div>
  </div>
);

export default Meet;
