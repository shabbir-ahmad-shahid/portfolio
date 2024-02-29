import './Portfolio.css'
import {Swiper, SwiperSlide } from "swiper/react";
import {sliderSettings} from "../../assets/common";
import data from "../../assets/slider.json";
import Slider from './Slider';
import "swiper/css"

export default function Portfolio() {
  return (
    <section className='flexCenter port-wrapper'>
        <div className="flexCenter port-container">
          <div className="flexColCenter left-side">
              <div className='flexColCenter skills'>
                <h3 className='primaryText'>Projects</h3>
                <p className="secondaryText">Some of the main projects</p>
              </div>
          </div>
        <Swiper {...sliderSettings}>
            <Slider />
            {
                data.map((card, i)=>(
                    <SwiperSlide key={i}>
                        <div className='flexCenter r-card'>
                            <img src={card.image} alt='img' />
                            <div className="flexColStart slider-text">
                              {/* <span className='secondaryText r-price'>
                                <span style={{ color: "orange" }}>$</span><span>{card.price}</span>
                              </span> */}
                              <span className='primaryText'>{card.name}</span>
                              <span className='secondaryText r-detail'>{card.detail}</span>
                              <button  className="button r-button">Visit Now</button>
                               
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
            
        </Swiper>
        </div>
    </section>
  )
}
