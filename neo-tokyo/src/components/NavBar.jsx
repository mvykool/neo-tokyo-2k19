import React, {useState, useRef, useEffect} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import { IoCloseSharp } from 'react-icons/io5'
import {RiSearch2Line} from 'react-icons/ri'
import Search from './Search'
import { Link } from 'react-router-dom'

const NavBar = () => {

/**mobile menu */

useEffect(()=> {
 
  document.addEventListener("click", closeMenu, true)
  return () => {
    document.removeEventListener('click', closeMenu);
  }
}, [])

const ref = useRef();

const closeMenu = (e) => {

  if(!ref.current.contains(e.target)){
    setShowMenu(false)
   
  }
}

const [showMenu, setShowMenu] = useState(false);

let menu;

if(showMenu){
  menu = <>

  </>
}




  return (
    <nav className='nav-bar'>
      <div ><Link to="/" className='logo'>Neo-Tokyo</Link></div>
      <Search/>
      <RiSearch2Line className='search-icon'/>
       <GiHamburgerMenu className='mobile-menu' onClick={()=> setShowMenu(!showMenu)}/>
      { menu ? 
       
         <ul className='mobile-menu-list' ref={ref}>
         <IoCloseSharp className='close-icon' onClick={()=> setShowMenu(!showMenu)}/>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/latest">Latest</Link></li>
         <li><Link to="/popular">Popular</Link></li>
       </ul> : false
       }
    </nav>
  )
}

export default NavBar