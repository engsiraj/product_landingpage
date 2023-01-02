import './App.css'
import img1 from './assets/mainscr.png'
import img4 from './assets/screen2.png'
import img3 from './assets/screen3.png'
import img2 from './assets/cmptrscr.png'

function App() {

  return (
    <div className="topline">
        <Nav/>
        <Header />
        <Middle/>
    </div>
  )
}

export default App

function Nav() {
  return (
    <div className='container'>
    <div className='nav'>
    <p className="textlg bold3">Keliye</p>
      <button className="btn bold3">Download</button>
      </div>
    </div>
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