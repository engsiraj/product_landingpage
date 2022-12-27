import './App.css'

function App() {

  return (
    <div className='container'>
       <Nav/>
       <Header/>
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
    <p className="headsm bold3">Lorem ipsum dolor sit amet.</p>
    <p className="textsm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, velit reiciendis tenetur omnis aut dolore</p>
      <button className="btn bold3 textsm">Download</button>
    </div>
  )
}