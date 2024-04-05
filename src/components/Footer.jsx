const Footer = () => (
  <div className='containr pe-[10rem] ps-[8rem] sss:ps-0 sss:pe-0'>
    <footer className='  py-8 px-4   mt-[10rem]'>
      <div className='flex sss:flex-col justify-between'>
        <div className='w-full sm:w-auto mb-8 sm:mb-0'>
          <h3 className='text-[1.6rem] font-bold mb-2 font-orb bg-gradient-to-r from-[#2600FC] to-[#FF00EA] tp'>
            NFTHub
          </h3>
          <p className='w-[17rem] text-[#7B7583] text-[14px]'>
            Join our Discord channel or follow us on Twitter to keep up to date
            with our latest work and announcements.
          </p>
        </div>
        <div className='flex justify-between '>
          <div className='w-full sm:w-auto pr-[2rem]  sm:mb-0'>
            <h3 className='text-lg font-semibold mb-2 w-[150px] '>
              Quick Links
            </h3>
            <ul className='text-[#7B7583] text-[14px]'>
              <li>About</li>
              <li>Collection</li>
              <li>Roadmap</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className='w-full sm:w-auto'>
            <h3 className='text-lg font-semibold mb-2'>Community</h3>
            <ul className='text-[#7B7583] text-[14px] '>
              <li>How it works!</li>
              <li>Blockchain</li>
              <li>Get in touch</li>
            </ul>
          </div>
        </div>
      </div>
      {/* copyright  */}
      <div className='flex justify-between mt-10 text-[12px]'>
        <div>
          <h3 className=''>Copyright © 2024 Nfthub All Rights Reserved.</h3>
        </div>
        <div className='flex text-[#7B7583]'>
          <span className=' pr-[8rem]'>Privacy policy</span>
          <span>Terms of Use</span>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
