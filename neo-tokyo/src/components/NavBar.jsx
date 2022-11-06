import React, {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import { IoCloseSharp } from 'react-icons/io5'

const NavBar = () => {

/**mobile menu */

const [showMenu, setShowMenu] = useState(false);

let menu;

if(showMenu){
  menu = <>

  </>
}




  return (
    <nav className='nav-bar'>
      <div className='logo'>Neo-Tokyo 2k19</div>
       <GiHamburgerMenu className='mobile-menu' onClick={()=> setShowMenu(!showMenu)}/>
      { menu ? 
       
         <ul className='mobile-menu-list'>
         <IoCloseSharp className='close-icon' onClick={()=> setShowMenu(!showMenu)}/>
         <li><a href="">Home</a></li>
         <li><a href="">Categories</a></li>
         <li><a href="">Popular</a></li>
       </ul> : false
       }
    </nav>
  )
}

export default NavBar