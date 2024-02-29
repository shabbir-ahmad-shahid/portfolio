import './Service.css'
import Bar from './Bar.jsx';

export default function Service() {
  return (
    <section className='flexColCenter service-wrapper'>
        <div className='flexColCenter skills'>
          <h3 className='primaryText skill'>Skils</h3>
          <p className="secondaryText">My Technical Skills</p>
        </div>

        <div className="flexCenter service-container">
          {/* left */}
            <div className="flexColCenter left-side">
              <div className='flexColCenter skills'>
                <h3 className='primaryText'>Frontend Developer</h3>
                <p className="secondaryText">More than 3 year of experience</p>
              </div>
              {/* bar */}
              <Bar progress="90%" name="HTML"/>
              <Bar progress="90%" name="CSS"/>
              <Bar progress="80%" name="JAVASCRIPT"/>
              <Bar progress="50%" name="REACT JS"/>
            </div>
            {/* right */}
            <div className="flexColCenter right-side">
              <div className='flexColCenter skills'>
                <h3 className='primaryText'>Backed Developer</h3>
                <p className="secondaryText">More than 3 year of experience</p>
              </div>
              <Bar progress="90%" name="PHP"/>
              <Bar progress="90%" name="LARAVEL"/>
              <Bar progress="70%" name="NODE JS"/>
              <Bar progress="75%" name="EXPRESS JS"/>
            </div>
        </div>
    </section>
  )
}
