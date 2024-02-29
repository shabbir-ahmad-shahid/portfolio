import "./Hero.css"
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { GiTrophyCup } from "react-icons/gi";

export default function Hero() {
  return (
    <section className='h-wrapper'>
        <div className="paddings flexCenter innerWidth h-container">
            {/* left side */}
            <div className="flexColStart h-left">
                <h3 className='primaryText hero-title'><span>Hi, I`m a</span> <br />website developer</h3>
                <p className='secondaryText descriptiption'>Passionate Laravel & React.js Developer | Full-Stack Developer 
               
                <br /> Crafting Scalable Web Solutions for Optimal User Experiences,
                <br />Open to New Opportunities.</p>
                <div className="flexStart h-button">
                    <button className='button'>Got a project?</button>
                    <button className='button talk'>Let`s talk</button>
                </div>

                <div className="flexCenter stats">
                    
                    <div className="flexStart state">
                        <span className="icon"><FaSquarePhoneFlip /></span>
                        <span className="secondaryText">03498695879</span>
                    </div>
                    <div className="flexStart state">
                        <span className="icon"><MdEmail /></span>
                        <span className="secondaryText">shabbir789shahid@gmail.com</span>
                    </div>
                    <div className="flexStart state">
                        <span className="icon"><FaLinkedin /></span>
                        <span className="secondaryText">LinkedIn</span>
                    </div>
                </div>

            </div>
            {/* right side */}
            <div className="flexCenter image-container">
                <div className="triangle"><GiTrophyCup /></div>
               <div className="circle"><GiTrophyCup /></div>
                <img src="./profile.png" alt='profile' width={100} />
            </div>
        </div>
    </section>
  )
}
