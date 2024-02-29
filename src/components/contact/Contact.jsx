import './Contact.css'
import {MdCall} from "react-icons/md";
import {BsFillChatDotsFill} from "react-icons/bs";
import {HiChatBubbleBottomCenter} from "react-icons/hi2"
export default function Contact() {
  return (
    <section className='c-wrapper flexColCenter'>
        <span className='primaryText'>Contact Now</span>
        <span className='secondaryText'> It`s Easy to Contact Us
                </span> 
        <div className='paddings innerWidth flexCenter c-container'>
            <div className="flexColStart c-left">
                
                <div className="flexColStart contactModes">
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>03498695879</span>
                                </div>
                            </div>
                            <div className="flexColStart button">Call Now</div>
                        </div>
                        {/*  */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25} />
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Email</span>
                                    <span className='secondaryText'>Now</span>
                                </div>
                            </div>
                            <div className="flexColStart button">Email Now</div>
                        </div>
                    </div>
                        {/* second row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>LinkedIn</span>
                                        <span className='secondaryText'>Profile</span>
                                    </div>
                                </div>
                                <div className="flexColStart button">LinkedIn Profile</div>
                            </div>
                            {/*  */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Whats app</span>
                                        <span className='secondaryText'>03498695879</span>
                                    </div>
                                </div>
                                <div className="flexColStart button">Whats app Now</div>
                            </div>
                        </div>
                    </div>
            </div>
            {/* right */}
            <div className="flexColStart c-right">
                {/* <h3 className='primaryText'>Contact Now</h3> */}
                <input type="text" name='name' placeholder='Full name..' className='fullname' />
                <input type="text" name='name' placeholder='phone number..' />
                <input type="text" name='name' placeholder='Email..' />
                <textarea type="text" name='name' placeholder='Message..'></textarea>
                <button className='button'>Submit </button>

            </div>
        </div>
    </section>
  )
}
