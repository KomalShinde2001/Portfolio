import { useState } from 'react'
import logo from '../Images/preloader.jpeg'
import './Navbar.scss'
import 'react-bootstrap'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Navbar = () => {
        const[responce , setResponce]=useState(false);
        useGSAP(() => {  
          gsap.from(".navbarHeading",{
             y:-500,
             opacity:0,
             delay:0.3
             }     
            ); 
   },[]); 
   useGSAP(() => {  
    gsap.from(".navPara",{
       y:300,
       opacity:0,
       delay:0.5
       }     
      ); 
},[]);
  return (
    <div>
    <div></div>
    <div className="myNavbar">
      {/* <div className='greybg'> */}
          <nav >
                <div id='logoImg' className="navItem navIconSec">
                    <img src={logo} alt=""  />
                </div>
                <div className="navItem ">
                  <p className='menuIcon'> 
                <i onClick={()=>{(responce)?setResponce(false):setResponce(true)}} className={(responce)?'fa-solid fa-xmark':'fa-solid fa-bars'} ></i>
                  </p>
                    <div className={(responce)?'navItemResponsive':'navItem2'}  >

                      
                    <p className='tagName'>Home</p>
                <a href="#landAbout"> <p className='tagName'>About</p></a>  
                    <a href="#landProject"><p className='tagName'>Projects</p></a>
                  <a href="#landSkills">  <p className='tagName'>Skills</p>  </a>
                  <a href="#landContact"><button >  <p className='tagName'> Contact Me
                  </p></button></a> 
                  
                    </div>
                </div>
          </nav>
          <section className=' navContenct'>
            <h1 className='navbarHeading'>Hi, I am <span className='keycolor'>Komal Shinde.</span></h1>
            <p className='navPara'>I'm a passionate and aspiring web developer eager to make my mark in the digital world. Through dedication, learning, and hands-on experience, I'm on a journey to explore the endless possibilities of web development.</p>
          </section>

      {/* </div> */}
  
    </div>
    </div>
  )
}

export default Navbar