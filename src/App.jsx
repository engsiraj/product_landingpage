import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import img1 from './assets/fullscr.png'
import card1 from './assets/card1.png'
import card2 from './assets/card2.png'
import card3 from './assets/card3.png'

import './App.css'

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
            <p className="navlink">siraj</p>
            <p className="navlink">contact</p>
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
            <p className="para text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptas obcaecati reiciendis amet facere sit deleniti neque aut.</p>
            <img className="headimg" src={img1} alt="image" />
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
              <p className="navlink">Project Name</p>
              <p className="navlink">live preview</p>
            </div>
            <img className="workimg" src={img1} alt="image" />
            <div className="worklower">
              <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing. </p>
              </div>
            </div>
            <div className="card" style={{'backgroundImage':`url('${card2}')`}}>
              <div className="cardcontent">
                <p className="headsm">Design</p>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </div>
            <div className="card" style={{'backgroundImage':`url('${card3}')`}}>
              <div className="cardcontent">
                <p className="headsm">develop</p>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
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
      <div className='container'>  
        <div className="contact">
          <div className="contactlinks">
            <p className="text">Lorem ipsum dolor sit.</p>
            <p className="text">Lorem ipsum dolor sit.</p>
          </div>
          <p className="headlg">lets talk?</p>
          <p className="text right">Lorem ipsum dolor sit.</p>
        </div>
       </div>
    </>
  )
}
