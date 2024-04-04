import design from '../assets/design.png';
import { choose } from '../constraint';

const Choose = () => (
  <div className='container mt-10  '>
    <div className='flex  justify-center items-center mb-[5rem] '>
      <img src={design} alt='' />
    </div>
    <div
      className='flex items-center justify-center mb-[5rem]'
      data-aos='zoom-in'
      data-aos-offset='200'
    >
      <h1 className='text-3xl font-bold'>
        Why{' '}
        <span className=' bg-gradient-to-r from-[#2600FC] to-[#FF00EA] tp'>
          choose us?
        </span>
      </h1>
    </div>

    <div className='container flex justify-center items-center sss:flex-col sss:px-8'>
      {choose.map(({ id, img, title, desc }, index) => (
        <div
          key={id}
          className={`${
            index % 2 === 1 ? 'top-[2rem]' : ''
          } p-4 bg_p m-2 relative transition-transform transform-gpu hover:bg-[#FF00EA] hover:text-white cursor-pointer`}
          data-aos='fade-up'
        >
          <img src={img} alt={title} className='w-[30px] mt-[1rem]' />
          <h2 className='mt-4 text-[#0F051D] font-bold text-base w-2 '>
            {title}
          </h2>
          <p
            className='mt-4 w-[11rem] h-[5rem] text-[12px] '
            data-aos='fade-up'
          >
            {desc}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default Choose;
