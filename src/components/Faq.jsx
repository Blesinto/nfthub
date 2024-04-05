import { data } from '../constraint';
import { useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

const Faq = () => {
  const [selected, setSelected] = useState(0);

  const toggle = i => {
    setSelected(selected === i ? null : i);
  };
  return (
    <div className='container max-w-full sss:max-w-[100%] sss:m-auto flex flex-col items-center justify-center'>
      <div
        className='flex items-center justify-center m-[5rem] w-[15rem] '
        data-aos='zoom-in'
        data-aos-offset='200'
      >
        <h1 className='text-3xl font-bold text-center'>
          Your questions,{' '}
          <span className=' bg-gradient-to-r from-[#2600FC] to-[#FF00EA] tp'>
            answered!
          </span>
        </h1>
      </div>
      <div className='bg_p p-3 '>
        {data.map(({ title, desc, id }, i) => (
          <div key={id} className='m-2  cursor-pointer'>
            <div
              className='flex items-center justify-between'
              onClick={() => toggle(i)}
            >
              <h1 className='font-bold text-black sss:text-[14px]'>{title}</h1>
              <span className='text-3xl  '>
                {selected === i ? (
                  <RiArrowDropUpLine />
                ) : (
                  <RiArrowDropDownLine />
                )}
              </span>
            </div>
            <div
              className={`transition-max-height ease-in-out duration-300 overflow-hidden ${
                selected === i ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <p className='w-[350px] sss:w-[250px] text-[12px] mt-2'>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
