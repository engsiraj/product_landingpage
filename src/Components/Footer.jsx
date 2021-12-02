import React from 'react'

const Footer = (props) => {
    return (
        <>
         <footer>
            <div className="upper-sec">
                <div className="first">
                        <h4 className="about-footer">{props.name}</h4>
                        <p className="footer-txt">{props.des}</p>
                </div>
                <div className="second">
                    <h4 className="about-footer">{props.info}</h4>
                    <a href={props.infolink1} className="footer-txt">{props.infotxt1}</a><br/>
                    <a href={props.infolink2} className="footer-txt">{props.infotxt2}</a><br/>
                    <a href={props.infolink3} className="footer-txt">{props.infotxt3}</a><br/>
                </div>
                <div className="second">
                    <h4 className="about-footer">{props.follow}</h4>
                    <a href={props.iglink}  className="footer-txt">{props.ig}</a><br/>
                    <a href={props.fblink}  className="footer-txt">{props.fb}</a><br/>
                    <a href={props.ptlink}  className="footer-txt">{props.pt}</a><br/>
                </div>
            </div>
            <div className="lower-sec">
                <div className="one">
                    <p className="footer-text">2020 © Abel | terms & conditions | privacy policy</p>
                </div>
                <div className="two">
                    <input  className='text-field'type="text" placeholder="Mail"/>
                    <button className="btn">submit</button>
                </div>
            </div>
            </footer>   
        </>
    )
}

export default Footer
