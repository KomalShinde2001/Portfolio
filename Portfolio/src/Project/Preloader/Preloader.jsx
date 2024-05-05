import Img from '../Images/preloader.jpeg'
import './Preloader.css'

function Preloader() {
  return (
    <div>
         <div className='preloadingbox'>
           
    <img src={Img} className='myimg' />
   </div>
    </div>
  )
}

export default Preloader