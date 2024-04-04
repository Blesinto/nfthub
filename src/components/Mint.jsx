import { GoArrowUpRight } from 'react-icons/go';
import mint_img from '../assets/mint_img.png';

const Mint = () => {
  return (
    <div
      className='container mt-[10rem] bg-cover bg-center z-0'
      style={{ backgroundImage: `url(${mint_img})` }}
    >
      <div
        className='flex flex-col justify-center items-center  p-[5rem] rounded-lg'
        data-aos='zoom-in'
        data-aos-offset='800'
      >
        <h1 className='text-4xl text-center font-bold w-[15rem]'>
          Let&apos;s start{' '}
          <span className=' bg-gradient-to-r from-[#2600FC] to-[#FF00EA] tp'>
            minting
          </span>
        </h1>
        <h5 className='text-[12px] text-[#7B7583] mt-1'>
          Invest and manage all your NFTs at one place.
        </h5>
        <div className='flex justify-center items-center'>
          <button className='flex text-[12px] items-center mt-4 bg-gradient-to-r from-[#2600FC] to-[#FF00EA]  hover:from-[#FF00EA] hover:to-[#2600FC]  text-white px-8 py-4 rounded-full'>
            Get started
            <span>
              <GoArrowUpRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mint;
