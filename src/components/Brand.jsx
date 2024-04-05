import bitgo from '../assets/bitgo.png';
import coinbase from '../assets/coinbase.png';
import metamask from '../assets/metamask.png';
import exdous from '../assets/exdous.png';
import trustwallet from '../assets/trustwallet.png';

const Brand = () => (
  <div className='container mt-[10rem]  sss:mt-[25rem]'>
    <div
      className='flex sss:flex-wrap  items-center justify-center mt-[5rem] sss:flex-col sss:justify-start sss:mt-[7rem]'
      data-aos='zoom-in'
      data-aos-offset='200'
    >
      <img
        src={metamask}
        alt=''
        className='w-[7rem] ml-8  sss:w-auto m-2 sss:my-0'
      />
      <img src={bitgo} alt='' className='w-[7rem] ml-8  sss:w-auto m-2' />
      <img src={coinbase} alt='' className='w-[7rem] ml-8  sss:w-auto m-2' />
      <img src={trustwallet} alt='' className='w-[7rem] ml-8  sss:w-auto m-2' />
      <img src={exdous} alt='' className='w-[7rem] ml-8  sss:w-auto m-2' />
    </div>
  </div>
);

export default Brand;
