import { useLayoutEffect, useRef } from 'react';
import './Home.scss'
import gsap from "gsap";           /**gsap library used for animation */
import img from '../Images/kimg.jpeg'
import vercel from '../Images/vercel.png'
import CV from '../Images/KomalResumeCV.pdf'
const About = () => {                /**functional react component */
  const comp = useRef();
  useLayoutEffect(()=>{
    let cxs = gsap.context(()=>{
      const t1 = gsap.timeline()
      t1.from('#about-heading',
      {
        rotate:"505deg",
        duration:"10s",
        delay:"2s"
      }
      )
      t1.to('#about-heading',
      {
        x:"3",  
        duration:"12s"
      }
      )
    })
    return ()=>cxs.revert
  },[])                      /**[] empty array the effect runs only once */
  
  return (
    <div id='landAbout' className='about' ref={comp} >
      <div className='sub-about'>
        <img src={img} alt="" id='profile' />
      <div className='about-iocns'>
      
          <div className='about-iocn'>
            <a href="https://www.linkedin.com/in/komal-shinde-0542b32b2/" target='_blank'><i id='icon-linkedin' className="fa-brands fa-linkedin-in"></i></a>
          
          </div>
          <div className='about-iocn'>
            <a href="https://github.com/KomalShinde2001"  target='_blank'>   <i id='icon-github' className="fa-brands fa-github skills-icons "></i></a>
        
          </div>
        
          <div className='about-iocn'>
            <a href="https://vercel.com/komal-shindes-projects" target='_blank'> <img src={vercel} alt="" /></a>
        
          </div>
          
        </div>
      </div>
      <div className='sub-about sub-about-rigth  '>
        <div className='heading'>
            <h1 id='about-heading'>About Me</h1>
        </div>
        <div className='sub-heading'>
          <p>As a recent graduate with a degree in Electronics and Telecommunications Engineering, I am enthusiastic about applying my knowledge to innovate and create efficient software solutions. I am motivated to learn new programming languages and methodologies, and I am ready to contribute my enthusiasm and fresh perspective to a dynamic software development team.
</p>
        <div className='home-about-table'>
          <table >
          <tbody>
          <tr>
              <td>D.O.B.</td>
              <td>:  12 Feb 2001</td>
            </tr>
            <tr>
              <td>Phone No </td>
              <td>:  +91 9322734251</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>:  komalshinde1202@gmail.com</td>
            </tr>
            <tr>
              <td>Current  Address</td>
              <td>:  Hadapsar,Pune-411028</td>
            </tr>
          </tbody>
          </table>
        </div>
        </div>
        <div className='buttons'>
        <button><a href={CV}>Download CV</a></button>
        </div>
        
      </div>      
    </div>
  )
}

export default About