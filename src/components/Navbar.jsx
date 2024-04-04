// import { navLinks } from '../constraint';
import { CgMenu } from 'react-icons/cg';
import logo from '../assets/logo.png';
import { navLinks } from '../constraint';
import { IoLogoTwitter } from 'react-icons/io';
import { RiDiscordFill } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa6';
import { IoWallet } from 'react-icons/io5';
import backgroundImage from '../assets/linear.png';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [Sticky, setSticky] = useState(false);
  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className='container h-screen bg-cover bg-center '
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <nav
        className={`w-full sss:py-4 sss:ps-0 sss:pe-0  py-8  flex justify-center items-center ${
          Sticky
            ? 'fixed left-0 pe-[9rem] ps-[9rem]  sss:ps-4 sss:pe-4 top-0 z-[100] bg-white '
            : ''
        }`}
      >
        <div className='flex-1'>
          <img src={logo} alt='Nfthub' className='w-[120px]  sss:mr-[5rem]' />
        </div>

        {/* navlinks  */}
        <div className=''>
          <ul className='list-none flex sss:hidden pl-8  items-center '>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins  font-bold cursor-pointer text-[13px]   ${
                  index === navLinks.length - 1 ? 'mr-[3.5rem]' : 'mr-5'
                }  `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* icons  */}
        <div className='flex icons'>
          <a href='#' className='sss:hidden'>
            <IoLogoTwitter />
          </a>
          <a href='#'>
            <RiDiscordFill />
          </a>
          <a href='#'>
            <FaInstagram />
          </a>
          <a href='#'>
            <IoWallet />
          </a>
        </div>
        {/* nav icon  */}
        <div>
          {/* Menu icon for small screens */}
          <CgMenu className='hidden sss:flex text-2xl cursor-pointer' />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
