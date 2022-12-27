import './App.css'

function App() {

  return (
    <div className="topline">
    <div className='container'>
       <Nav/>
       <Header/>
    </div>
    </div>
  )
}

export default App

function Nav() {

  return (
    <div className='nav'>
    <p className="textlg bold3">Keliye</p>
      <button className="btn bold3">Download</button>
    </div>
  )
}

function Header() {
  return (
    <div className='header'>
      <div className='header_left'>
        <p className="headsm bold3">Manage your <br/>Business Better.</p>
        <p className="textsm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, velit reiciendis tenetur omnis aut dolore</p>
        <button className="btn bold3 textsm">Download</button>
      </div>
       <img className='header_right' src="" alt="" />
    </div>
  )
}