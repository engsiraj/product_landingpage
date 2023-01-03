import { AiFillTags, AiOutlineLineChart, AiOutlineAliyun, AiOutlineAppstoreAdd, AiOutlineFileProtect } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { BsApple } from "react-icons/bs";

import './App.css'
import img1 from './assets/mainscr.png'
import img2 from './assets/cmptrscr.png'
import img3 from './assets/fullscr.png'

function App() {

  return (
    <>
        <Nav/>
        <Header />
        <Middle/>
        <Feature />
        <Download />
        <Working />
        <Footer/>
    </>
  )
}

export default App

function Nav() {
  return (
    <>
    <div className="topline"/>
    <div className='container'>
    <div className='nav'>
    <p className="textlg bold3"><AiFillTags/>Keliye</p>
      <button className="btnblue bold3">Download</button>
      </div>
      </div>
    </>
  )
}

function Header() {
  return (
    <div className='container'>
    <div className='header'>
      <div className='header_left'>
        <p className="headsm bold3">Manage your <br/>Business Better.</p>
        <p className="textsm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, velit reiciendis tenetur omnis aut dolore</p>
        <button className="btnblue bold3 textsm">Download</button>
      </div>
       <img className='header_right' src={img1} alt="" />
      </div>
      </div>
  )
}

function Middle() {
  return (
    <div className='middle'>
      <div className='container'>
        <div className='grouptext center'>
          <p className="headsm bold3">Manage your Business Better</p>
          <p className="textsm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, velit reiciendis tenetur omnis aut dolore</p>
          <button className="btnwhite bold3 textsm">Download</button>
        </div>
          <img className='centerimg' src={img2} alt="" />
       </div> 
    </div>
  )
}

function Feature() {
  return (
    <div className='container'>
      <div className='feature'>
        <p className="headsm bold3">Feature</p>
        <div className='fitems'> 
           <div className="fitem">
             <AiOutlineFileProtect className="ficon" />
             <p className='textlg bold3'>Feature 01</p>
             <p>Lorem, ipsum dolor sit amet consectetur </p>
          </div>
           <div className="fitem">
             <AiOutlineAppstoreAdd className="ficon" />
             <p className='textlg bold3'>Feature 01</p>
             <p>Lorem, ipsum dolor sit amet consectetur </p>
          </div>
           <div className="fitem">
            <AiOutlineLineChart className="ficon"  />
             <p className='textlg bold3'>Feature 01</p>
             <p>Lorem, ipsum dolor sit amet consectetur </p>
          </div>
           <div className="fitem">
           <AiOutlineAliyun className="ficon" />
             <p className='textlg bold3'>Feature 01</p>
             <p>Lorem ipsum dolor, sit amet consectetur </p>
          </div>
        </div>
      </div> 
        <img  src={img3} alt="" />
    </div>
  )
}

function Download() {
  return (
    <div className='download'>
    <div className='container'>
      <div className="dsec">
        <p className="headsm bold3">Download our app</p>
        <button className="btnlg icond">
            <FaGooglePlay className="downicon" />
            <div>
              <p className="text bold2 left">DOWNLOAD ON</p>
              <p className="textlg bold3 left">Play Store</p>
            </div>
        </button>
        <button className="btnlg icond">
            <BsApple className="downicon" />
            <div>
              <p className="text bold2 left">GET IT ON</p>
              <p className="textlg bold3 left">Apple Store</p>
            </div>
        </button> 
      </div>
    </div>
    </div>
  )
}

function Working() {
  return (
    <div className='container'>
      <div className='working'>
        <p className="headsm bold3">How it works</p>
        <div className='witems'> 
           <div className="witem">
             <AiOutlineFileProtect className="wicon" />
            <div className="wside">
              <p className='textlg bold3'>Feature 01</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quis?</p>
            </div>
          </div>
           <div className="witem">
            <AiOutlineAppstoreAdd className="wicon" />
            <div className="wside">
              <p className='textlg bold3'>Feature 01</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dolorum.</p>
            </div>
          </div>
        </div>
        <div className='witems'> 
           <div className="witem">
            <AiOutlineLineChart className="wicon"  />
             <div className="wside">
              <p className='textlg bold3'>Feature 01</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, assumenda.</p>
            </div>
          </div>
           <div className="witem">
           <AiOutlineAliyun className="wicon" />
            <div className="wside">
              <p className='textlg bold3'>Feature 01</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, possimus! </p>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className=''>
          <div className="footeright">
            <div className="dsec">
        <p className="headsm bold3">Download our app</p>
        <button className="btnlg icond">
            <FaGooglePlay className="downicon" />
            <div>
              <p className="text bold2 left">DOWNLOAD ON</p>
              <p className="textlg bold3 left">Play Store</p>
            </div>
        </button>
        <button className="btnlg icond">
            <BsApple className="downicon" />
            <div>
              <p className="text bold2 left">GET IT ON</p>
              <p className="textlg bold3 left">Apple Store</p>
            </div>
        </button> 
      </div>
          </div>
        </div>
       </div> 
    </div>
  )
}