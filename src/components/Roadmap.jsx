import { roadmap } from '../constraint';

const Roadmap = () => (
  <div className='container flex-col flex items-center justify-center '>
    <h1
      className='text-3xl font-bold mt-[10rem]'
      data-aos='zoom-in'
      data-aos-offset='200'
    >
      Nfthub&apos;s{' '}
      <span className=' bg-gradient-to-r from-[#2600FC] to-[#FF00EA] tp'>
        Roadmap
      </span>
    </h1>

    <div
      className='grid-cols-3 mt-[5rem] grid sss:grid-cols-1'
      data-aos='fade-up'
      data-aos-offset='800'
      data-aos-duration='500'
    >
      {roadmap.map(({ img, title, id, desc, desc2 }) => (
        <div
          key={id}
          className='bg_p m-4 transition-transform transform-gpu hover:bg-[#FF00EA] hover:text-white cursor-pointer'
        >
          <div className='flex justify-between items-center p-2'>
            <h3 className='bg-gradient-to-r from-[#2600FC] to-[#FF00EA] tp uppercase p-2 mt-4 '>
              Phase 0{id}
            </h3>
            <img src={img} alt='' className='w-10 mt-4' />
          </div>
          <div className='p-4'>
            <h1 className='text-sm font-bold text-black mb-5 '>{title}</h1>
            <p className='text-[12px]'>{desc}</p>
            <p
              dangerouslySetInnerHTML={{ __html: desc2 }}
              className='p-8 text-[12px] leading-[1.6]'
            ></p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Roadmap;
