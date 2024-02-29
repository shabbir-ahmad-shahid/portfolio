import "./About.css"

export default function About() {
  return (
    <section className='about-wrapper'>
        <div className="paddings flexColCenter innerWidth about-container">
           
            <div className="flexColCenter about-left">
                <span className="primaryText">Provide you best Services</span>
                
                <span className="secondaryText text">
                    I love programming and i have been developing websites  For than 3+ years now.
                    For than 3+ years now I love programming and i have been developing websites 
                      I love programming and i have been developing websites  For than 3+ years now 
                     I love programming and i have been developing websites
                </span>
            </div>
            <div className="flexCenter">
              <div className="flexColCenter about-box">
                <img src="./logo_new-removebg-preview.png" alt="js" width={100} />
                <p className="primaryText tech-name">JavaScript</p>
              </div>
              <div className="flexColCenter about-box">
                <img src="./logo_new-removebg-preview.png" alt="js" width={100} />
                <p className="primaryText tech-name">JavaScript</p>
              </div>
              <div className="flexColCenter about-box">
                <img src="./logo_new-removebg-preview.png" alt="js" width={100} />
                <p className="primaryText tech-name">JavaScript</p>
              </div>
              <div className="flexColCenter about-box">
                <img src="./logo_new-removebg-preview.png" alt="js" width={100} />
                <p className="primaryText tech-name">JavaScript</p>
              </div>
              
            </div>
        </div>
    </section>
  )
}
