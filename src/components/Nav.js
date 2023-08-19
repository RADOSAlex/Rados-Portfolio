import React from 'react';
import {BiClipboard, BiHomeAlt, BiUser} from 'react-icons/bi'; 
import {BsClipboardData, BsBriefcase, BsChatSquare} from 'react-icons/bs';
import {Link} from 'react-scroll';

const Nav = () => {
  return (
    <nav className='fixe botom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        {/*Nav bar Inner inf*/}
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] px-5 flex justify-between items-center text-2x1 text-white/50'>
          <Link classeName='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiHomeAlt/>
          </Link>
          <Link classeName='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiUser/>
          </Link>
          <Link classeName='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsClipboardData/>
          </Link>
          <Link classeName='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsBriefcase/>
          </Link>
          <Link classeName='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsChatSquare/>
          </Link>
        </div>
      </div>
    </nav>
  
  
  );
};

export default Nav;
