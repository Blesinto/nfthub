const Subscribe = () => {
  return (
    <div className='container mt-[10rem]'>
      <div
        className='flex flex-col justify-center items-center border border-slate-400 p-[5rem] sss:p-[2rem] rounded-lg'
        data-aos='zoom-in'
        data-aos-offset='800'
      >
        <h1 className='text-3xl sss:text-2xl font-bold'>
          Never{' '}
          <span className=' bg-gradient-to-r from-[#2600FC] to-[#FF00EA] tp'>
            miss a drop!
          </span>
        </h1>
        <h5 className='text-[12px] text-[#7B7583] mt-1 sss:text-center sss:mt-4'>
          Subscribe to our super-rare and exclusive drops & collectibles.
        </h5>
        <form className='mt-4'>
          <label
            htmlFor='email'
            className='flex sss:flex-col items-center justify-center '
          >
            <input
              id='email'
              type='email'
              name='email'
              className='mt-1 px-3 py-2 bg-gray-100  border-none shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#7B7583] focus:ring-[#FF00EA] block w-full rounded-full sm:text-sm focus:ring-1'
              placeholder='Enter your email'
            />
            <button className='flex w-[7rem] text-[12px] items-center ml-4 bg-gradient-to-r from-[#2600FC] to-[#FF00EA] sss:mt-8  hover:from-[#FF00EA] hover:to-[#2600FC]  text-white px-6  py-2 rounded-full'>
              Subscribe
            </button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
