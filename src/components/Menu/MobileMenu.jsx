import React, { useState } from 'react'
import {RiArrowDownSLine} from 'react-icons/ri'

import {motion , AnimatePresence} from 'framer-motion'

function MobileMenu() {
   
    const [open , setOpen] = useState(false)
    const [openOne , setOpenOne] = useState(false)
    const [openTwo , setOpenTwo] = useState(false)

    const handleCLickOne = () => {
        setOpen(!open)
        setOpenOne(false)
        setOpenTwo(false)
    }
    const handleCLickTwo = () => {
        setOpen(false)
        setOpenOne(!openOne)
        setOpenTwo(false)
    }
    const handleCLickThree = () => {
        setOpen(false)
        setOpenOne(false)
        setOpenTwo(!openTwo)
    }
  return (
    <AnimatePresence>
    <motion.div initial={{x:-200}} animate={{x:[-200,50,0]}} className='mobileMenuContainer'>
        <a className='skill' href="">
           Upskill
          
        </a>
        <motion.div className='mobileDropdown'>
            <div className="mobileFlex">
            <p>Customer</p>
            <RiArrowDownSLine onClick={handleCLickOne} className='menuIconMobile'/>
            </div>
            <AnimatePresence>
            { open && <motion.div initial={{ opacity: 0 , x:-100 }}
                animate={{ opacity: 1 , x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }} className="mobileListTest">
                <p>User Rewards</p>
                <p>Gift cards Rates</p>
                <p>Contact Us</p>
            </motion.div>}
            </AnimatePresence>
        </motion.div>
        <div className='mobileDropdown'>
        <div className="mobileFlex">
            <p>Business</p>
            <RiArrowDownSLine onClick={handleCLickTwo} className='menuIconMobile'/>
            </div>
            { openOne && <motion.div initial={{ opacity: 0 , x:-100 }}
                animate={{ opacity: 1 , x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }} className="mobileListTest">
                <p>Become A partner</p>
                <p>#CTGivesBack</p>
                <p>Work With Us</p>
            </motion.div>}
        </div>


        <div className='mobileDropdown'>
        <div className="mobileFlex">
            <p>Customer</p>
            <RiArrowDownSLine onClick={handleCLickThree} className='menuIconMobile'/>
            </div>
            { openTwo && <motion.div initial={{ opacity: 0 , x:-100 }}
                animate={{ opacity: 1 , x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }} className="mobileListTest">
                <p>User Rewards</p>
                <p>Gift cards Rates</p>
                <p>Contact Us</p>
            </motion.div>}
        </div>

    </motion.div>
    </AnimatePresence>
  )
}

export default MobileMenu