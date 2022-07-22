import React , {useState} from 'react'
import cardtonicLogo from '../assets/Svgs/cardtonicLogo.svg'
import {Link} from 'react-router-dom'
import {AiOutlineArrowDown } from 'react-icons/fa'
import Button from '../shared/Button'
import {HiOutlineMenu} from 'react-icons/hi'
import { GrClose } from "react-icons/gr";
import MenuListItems from './Menu/MenuListItems'
import { Turn as Hamburger } from 'hamburger-react'
import MobileMenu from './Menu/MobileMenu'
import {motion , AnimatePresence} from 'framer-motion'


function Header() {
  const [isOpen , setIsOpen] = useState(false)
  if(isOpen){
    document.body.classList.add('fixed-position')
  }else{
    document.body.classList.remove('fixed-position')
  }


  const boxVarient = {
    open: {
      scale: 0,
      scale: 100
    },
    close:{
      scale:100,
      scale:0
    }
  }

  return (
    <div className="headerContainer">
      <nav>
        <Link to="/">
       <MobileMenu isOpen={isOpen} />
          <img className="logoImage" src={cardtonicLogo} alt="" />
        </Link>
        <motion.div variants={boxVarient} animate = {isOpen ? 'open' : 'close'} className='bgContainer'></motion.div> 
        <Hamburger  toggled={isOpen} toggle={setIsOpen} easing='ease-in' size={20} direction='left'/>




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