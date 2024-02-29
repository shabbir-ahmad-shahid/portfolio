import { useState } from 'react'
import './Navbar.css'
import {BiMenuAltRight} from "react-icons/bi"
import OutsideClickHandler from 'react-outside-click-handler';

export default function Navbar() {
    const [open, setOpen] = useState(false); useState
    const openCloseNavbar =(open)=>
    {
        if(document.documentElement.clientWidth <= 800)
        {
            return {right: !open && "-100%"}
        }
    }
  return (
    <section className='n-wrapper'>
        <div className="flexCenter innerWidth n-container">
          <div className='flexCenter'>
            <img src="./logo_new-removebg-preview.png" alt='logo' width={80} />
             <p className='primaryText'>Shabbir Ahmad Shahid</p> 
          </div>
            <OutsideClickHandler
                onOutsideClick={()=>{setOpen(false)}}> 
            <div className="flexCenter n-menu" style={openCloseNavbar(open)}>
                <a href="" className='active'>Home</a>
                  <a href="">Our Value</a>
                  <a href="">Contact Us</a>
                  <a href="">Get Started</a>
                  <button className='button'>
                    <a href="">Contact</a>
                  </button>
            </div>
            </OutsideClickHandler>
            <div className="menu-icon" onClick={() => setOpen((prevOpen) => !prevOpen)}>
                <BiMenuAltRight size={30} />
              </div>
        </div>
    </section>
  )
}
