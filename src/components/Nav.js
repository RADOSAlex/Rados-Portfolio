import React from 'react';
import {BiClipboard, BiHomeAlt, BiUser} from 'react-icons/bi'; 
import {BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText} from 'react-icons/bs';
import {Link} from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        {/*Nav bar Inner inf*/}
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
          <Link 
          activeClass='active'
          to='home'
          smooth={true}
          spy={true}
          offset={-200}
          classeName='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiHomeAlt/>
          </Link>
          <Link 
          activeClass='active'
          smooth={true}
          spy={true}
          to='about' 
          classeName='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiUser/>
          </Link>
          <Link 
          activeClass='active'
          smooth={true}
          spy={true}
          to='services' 
          classeName='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsClipboardData/>
          </Link>
          <Link 
          activeClass='active'
          smooth={true}
          spy={true}
          to='work' 
          classeName='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsBriefcase/>
          </Link>
          <Link 
          activeClass='active'
          smooth={true}
          spy={true}
          to='contact' 
          classeName='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsChatSquareText/>
          </Link>
        </div>
      </div>
    </nav>
  
  
  );
};

export default Nav;
