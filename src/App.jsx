import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import img1 from './assets/fullscr.png'
import user from './assets/user.png'
import card1 from './assets/card1.png'
import card2 from './assets/card2.png'
import card3 from './assets/card3.png'
import './App.css'

/* 
todo: add data
---------
? sections
- nav
- header
---------
*/
function App() {

  return (
    <>
      <Nav />
      <Header />
      <Work />
      <Process />
      <Contact/>
    </>
  )
}

export default App

function Nav() {

  return (
    <>
      <div className="fixed">
        <div className='nav'>
       <div className='container'>
          <div className="navitem">
            <a className="navlink">siraj</a>
            <a href="#cont" className="navlink">contact</a>
          </div>
        </div>
      </div>
      </div> 
    </>
  )
}

function Header() {
  return (
    <>
      <div className='container'>
      <div className='header'>
          <p className="headlg">hi, i am siraj.<br /> A web developer</p>
          <div className="headbottom">
            <p className="para text">Frontend developer and design system developer skilled with Javascript and React js.Mostly I use Javascript, React js, Html, CSS, Styled-components, Tailwind, Bootstrap, and Material UI </p>
            <img className="headimg" src={user} alt="image" />
          </div>  
        </div>
      </div>
    </>
  )
}

function Work() {
  return (
    <>
      <div className='container'>
      <div className='work'>
          <p className="headlg workheading">Work.</p>
          <div className="workcontainer">
            <div className="workupper">
              <p className="navlink">UI Dashborad</p>
              <a className="navlink">live preview</a>
            </div>
            <img className="workimg" src={img1} alt="image" />
            <div className="worklower">
              <p className="text">Build with react js and styled-components</p>
              < HiOutlineArrowNarrowRight className="workicon"/>
            </div>
          </div>  
        </div>
      </div>
    </>
  )
}


function Process() {
  return (
    <>
      <div className='container'>   
        <p className="headlg">Process.</p>
         <div className='process'> 
          <div className="cards">
            <div className="card" style={{'backgroundImage':`url('${card1}')`}}>
              <div className="cardcontent">
                <p className="headsm">Idea</p>
                <p className="text">Always starts with hand drawn sketch</p>
              </div>
            </div>
            <div className="card" style={{'backgroundImage':`url('${card2}')`}}>
              <div className="cardcontent">
                <p className="headsm">Design</p>
                <p className="text">Crafting beautifull ui from sketch</p>
              </div>
            </div>
            <div className="card" style={{'backgroundImage':`url('${card3}')`}}>
              <div className="cardcontent">
                <p className="headsm">develop</p>
                <p className="text">Developing whole web page with react js and styled-components</p>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

function Contact() {
  return (
    <>
      <div id='cont' className='container'>  
        <div className="contact">
          <div className="contactlinks">
            <p className="text">sirajbhutta50@gmail.com</p>
          </div>
          <p className="headlg">lets talk?</p>
          <p className="text right">@github</p>
        </div>
       </div>
    </>
  )
}
