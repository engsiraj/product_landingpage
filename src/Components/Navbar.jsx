import React from 'react'
import { GiPerfumeBottle } from "react-icons/gi";
import { SiAwesomewm } from "react-icons/si";
const Navbar = () => {
    return (
        <>
              <nav>
                <div className="nav-body ms">
                    <a href="/"><SiAwesomewm size={30} style={{ fill:'#00402F' }}/></a>
                     <a href="/"><GiPerfumeBottle  size={25} style={{ fill:'#00402F' }}/></a>
                </div>
              </nav>
        </>
    )
}

export default Navbar
