import {useSwiper } from "swiper/react";

export default function Slider() {
    const swiper =useSwiper();
  return (
    <div className="flexCenter r-buton">
      <button onClick={()=>swiper.slidePrev()}>&lt;</button>
      <button onClick={()=>swiper.slideNext()}>&gt;</button>
  </div>
  )
}
