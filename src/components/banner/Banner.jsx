import  './Banner.css'

export default function Banner() {
  return (
    <section className='g-wrapper'>
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started with shabbir</span>
                <span className='secondaryText'>Subscribe and find super active price quote from HiChatBubbleBottomCenter<br/>
                Find your residence soon
                </span>
                <button className="button">
                    <a href='mailto:text@gmail.com'>Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}
