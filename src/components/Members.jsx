import design from '../assets/design.png';

export const Members = () => {
  return (
    <div className='container mt-[5rem]'>
      <div className='flex  justify-center items-center '>
        <img src={design} alt='' />
      </div>

      <div
        className='flex justify-center items-center sss:flex-col divide-x divide-[#E5E5E5] '
        data-aos='zoom-in'
        data-aos-offset='800'
      >
        <div className='flex flex-col m-6 p-2 text-center'>
          <h1 className='font-bold text-2xl'>400k+</h1>
          <h6 className='text-[10px] text-[#7B7583]'>Wallets Connected</h6>
        </div>

        <div className='flex flex-col m-6 p-2 text-center'>
          <h1 className='font-bold text-2xl'>20k+</h1>
          <h6 className='text-[10px] text-[#7B7583]'>Wallets Connected</h6>
        </div>

        <div className='flex flex-col m-6 p-2  text-center'>
          <h1 className='font-bold text-2xl'>230+</h1>
          <h6 className='text-[10px] text-[#7B7583]'>Wallets Connected</h6>
        </div>

        <div className='flex flex-col m-6 p-2 text-center'>
          <h1 className='font-bold text-2xl'>2.5x</h1>
          <h6 className='text-[10px] text-[#7B7583]'>Wallets Connected</h6>
        </div>
      </div>
    </div>
  );
};
