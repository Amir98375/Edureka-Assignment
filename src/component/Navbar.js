import React, { useState } from 'react'
import './Navbar.css'
import {BsFacebook,BsYoutube,BsInstagram} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
export const Navbar = () => {
    const [showIcons,setshowIcons]=useState(false)
    const [toggle,settoggle]=useState(false)
  return (
   <>
  <nav className='main-nav'>
        <div className='logo'>
            <h2>
                <span>Edureka</span>
            </h2>
        </div>
        <div className={showIcons?'mobile-menu-link':'menu-link'}>
            <ul>
                <li>
                <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>about</a>
                </li>
                <li>
                    <a href='#'>service</a>
                </li>
                <li>
                    <a href='#'>company</a>
                </li>
            </ul>
            <div className="hamburger-menu">
          {
             <a href="#" onClick={()=>setshowIcons(!showIcons)}>
             <GiHamburgerMenu />
             </a>
          }
          </div>
        </div>
    

  </nav>
  <section>
    welcome to edureka
  </section>
   </>
  )
}
