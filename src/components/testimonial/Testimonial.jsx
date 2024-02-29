import './testimonial.css'
import {Swiper, SwiperSlide } from "swiper/react";
import data from "../../assets/slider.json";
import {sliderSettings} from "../../assets/common2";
import { FaStar } from "react-icons/fa6";

export default function testimonial() {
  return (
    <section className='flexColCenter t-wrapper '>
            <h2 className='primaryText'>Testimonial</h2>
            <p className='secondaryText'>What clients Says</p>
        <div className="flexCenter innerWidth t-container">
            {/* left side */}
            <Swiper {...sliderSettings}>
            
            {
                data.map((card, i)=>(
                    <SwiperSlide key={i}>
                         <div className="flexColCenter t-card">
                <span className='star-icon'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> 4/5</span>
                <p className='secondaryText'>Subscribe and find super active price quote from Hi Chat Bubble Bottom Center
Find your of the  residence soon</p>
                <div className="flexCenter card-profile">
                  <img src='./profile.png' alt='profile image' />
                  <p className='primaryText'>Shabbir ahmad</p>
                </div>
            </div> 
                    </SwiperSlide>
                ))
            }
            
        </Swiper>
              
            {/* right side */}
        </div>
    </section>
  )
}
