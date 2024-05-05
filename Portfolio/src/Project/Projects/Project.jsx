import "./Project.scss"
import RecipeVideo from '../Images/RecipeRoverApp.mp4'
import WeatherVideo from '../Images/WeatherApp.mp4'
import PersoalPortfolioVideo from '../Images/PersonalPortfolioVideo.mp4'
import Netflixcloneimg from '../Images/Netflixcloneimg.jpg'
const Project = () => {

  return (
    <div id="landProject" className="Project">
                        <div className="Project-name-heading">
                        <h1 className="project-Heading" >Projects</h1>
                        </div>
                       
                <section className="box" id="box1">
                    <div className="left-box">
                  <video  src={RecipeVideo} type="video/mp4" muted autoPlay loop   ></video>
                    </div>
                    <div className="right-box">
                        <div className="project-heading">
                        <h2 className="keycolor">PROJECT 1</h2>
                        </div>
                              <div className="project-name">
                              <h2>Responsive Recipe Website</h2>
                              </div>
                            <div className="project-discription">
                            <p>
                            Recipe Rover is a responsive web application designed to help users discover and explore various recipes. Leveraging the power of modern web technologies, Recipe Rover fetches recipe data from a API and dynamically displays it in different components based on user interactions. The project primarily utilizes React.js for front-end development, with HTML, SCSS, and JavaScript for crafting interactive user interfaces. 
                                </p>
                            </div>
                            <div className="project-link">
                            <i className="fa-solid fa-arrow-right"></i>
                             <a href="https://recipe-rover-app.vercel.app/" target="_blank">  <span>Project Link</span></a>
                            </div>
                              
                    </div>
                </section>
                <section className="box" id="box2">
                    <div className="right-box">
                        <div className="project-heading">
                        <h2 className="keycolor">PROJECT 2</h2>
                        </div>
                              <div className="project-name">
                              <h2>Weather Application</h2>
                              </div>
                            <div className="project-discription">
                            <p>
                            The weather application will provide users with real-time weather information, forecasts, and other weather-related data, which can help them make better decisions about their day-to-day activities.
                                </p>
                            </div>
                            <div className="project-link">
                            <i className="fa-solid fa-arrow-right"></i>
                            <a href="https://weather-app-zeta-sooty-27.vercel.app/" target="_blank">  <span>Project Link</span></a>
                            </div>
                              
                    </div>
                    <div className="left-box">
                    <video  src={WeatherVideo} type="video/mp4" muted autoPlay loop   ></video>
                    </div>
                </section>

                <section className="box" id="box3">
                    <div className="left-box">
                    <video  src={PersoalPortfolioVideo} type="video/mp4" muted autoPlay loop   ></video>
                    
                    </div>
                    <div className="right-box">
                        <div className="project-heading">
                        <h2 className="keycolor">PROJECT 3</h2>
                        </div>
                              <div className="project-name">
                              <h2>Personal-Portfolio</h2>
                              </div>
                            <div className="project-discription">
                            <p>
                            Created a portfolio project to demonstrate my education, skills, contact information. Created project using Html, Css and Javascript.
                                </p>
                            </div>
                            <div className="project-link">
                            <i className="fa-solid fa-arrow-right"></i>
                            <a href="http://127.0.0.1:5500/index.html#home" target="_blank">  <span>Project Link</span></a>
                            </div>
                              
                    </div>
                </section>
                <section className="box" id="box4">
                    <div className="right-box">
                    
                        <div className="project-heading">
                        <h2 className="keycolor">PROJECT 4</h2>
                        </div>
                              <div className="project-name">
                              <h2>Netflix Clone</h2>
                              </div>
                            <div className="project-discription">
                            <p>
                            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.Members can play, pause and resume watching as much as they want, anytime, anywhere, and can change their plans at any time.
                                </p>
                            </div>
                            <div className="project-link">
                            {/* <i className="fa-solid fa-arrow-right"></i>
                                <span>Project Link</span> */}
                            </div>       
                    </div>
                    <div className="left-box">
                    <img  src={Netflixcloneimg} type="img/jpg"   style={{ height: '300px' }}  ></img>
                    </div>
                </section>
    </div>
  )
}

export default Project