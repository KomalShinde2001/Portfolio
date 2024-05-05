import './Skills.css'
import MyImg from '../Images/preloader.jpeg'
import vercel from './Image/vercel.png'
import { useState } from 'react'

function Skills() {
  const[lowerRound , setLowerRound] = useState(false)

  return (
    <div  id='landSkills' className='skills-box'>
            <section >
              <div className='skills-heading'>
              <h1 className='skills-main-heading'>What I know </h1>
              </div>
                <div className='skills-container' >
                    <div className="skills-left">
                        <div className='skillset'>
                           <p
                            className='mySkill'
                            > HTML </p>
                           <p className='mySkill'
                           > CSS </p>
                           <p
                           className='mySkill'
                           > REACT JS </p>
                           <p className='mySkill'> JAVASCRIPT </p>
                           
                           <p
                            className='mySkill'
                            > SQL </p>
                           <p className='mySkill'> JAVA </p>
                          
                        

                        </div>
                        <div>      
                        </div>
                    </div>
                    <div className="skills-right">
                    <div className="OuterContainer ">
      

      <div className="hero">
    
                <div className="rotate-skills-container">
                <img src={MyImg} alt=""  className='rotate-logo-img'/>
                    <div className="hero">
                      
                                <div className="srotate commentRotate  ">
                                <i id='icon-linkedin' 
                                  className= "fa-brands fa-linkedin-in skills-icons rotateInverseIcon"  ></i>
                                </div>
                                <div className="srotate2 commentRotate">
                                <i id='icon-github'     className="fa-brands fa-github skills-icons rotateInverseIcon"></i>
                                </div>
                                
                                <div className="srotate4 commentRotate">
                                <img src={vercel}  className='skills-icons rotateInverseIcon'/>
                                </div>
                            
            
                    </div>
            
                </div>
                
                        <div className="rotate commentRotate">
                        <i id='icon-linkedin' className="fa-brands fa-react skills-icons rotateIcon"></i> 
                        </div>
                        <div className="rotate2 commentRotate">
                        <i id='icon-java' className="fa-brands fa-java skills-icons rotateIcon"></i>
                        </div>
                        <div className="rotate3 commentRotate">
                        <i id='icon-js' className="fa-brands fa-js skills-icons rotateIcon"></i>
                        </div>
                        <div className="rotate4 commentRotate">
                        <i  id='icon-html' className="fa-brands fa-html5 skills-icons rotateIcon"></i>
                        </div>
                        <div className="rotate5 commentRotate">
                        <i  id='icon-css' className="fa-brands fa-css3-alt skills-icons rotateIcon"></i>
                        </div>
                        <div className="rotate6 commentRotate">
                        <i  id='icon-bootstrap' className="fa-brands fa-bootstrap skills-icons rotateIcon"></i>
                        </div>
                        
            </div>
    
        </div>
                    </div>
                </div>

            </section>

          
    </div>
  )
}

export default Skills