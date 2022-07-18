import React , {useState} from 'react'
import cardtonicLogo from '../assets/Svgs/cardtonicLogo.svg'
import {Link} from 'react-router-dom'
import {AiOutlineArrowDown } from 'react-icons/fa'
import Button from '../shared/Button'
import {HiOutlineMenu} from 'react-icons/hi'
import { GrClose } from "react-icons/gr";
import MenuListItems from './Menu/MenuListItems'


function Header() {
  const [isOpen , setIsOpen] = useState(true)

  const open = 
  <HiOutlineMenu onClick={()=>{setIsOpen(!isOpen)}} className='hamburgerMenu' size={50}/>

  const close = (
    <GrClose onClick={() => {setIsOpen(!isOpen);}} className="hamburgerMenu" size={45} />
  );

  return (
    <div className="headerContainer">
      <nav>
        <Link to="/">
          <img className="logoImage" src={cardtonicLogo} alt="" />
        </Link>
        {isOpen ? open : close}




        <ul className="navList">
          <li>Upskill</li>
          <li>Customer</li>
          <li>Business</li>
          <Button>Get Started</Button>
        </ul>
      </nav>
    </div>
  );
}

export default Header