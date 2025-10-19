import React from 'react'
import { BrowserRouter, Link } from "react-router-dom";
// import ReactDOM from "react-dom/client";


/* <Route path="/" element={<Home />} />
       <Route path="/hobby" element={<Hobby />} />
       <Route path="/omnie" element={<OMnie />} />
       <Route path="/miekkie" element={<Miekkie />} />
       <Route path="/kontakt" element={<Kontakt />} />
       <Route path="/projekty" element={<Projekty />} />
       <Route path="/umiejetnosci" element={<Umiejetnosci />} /> */

function Header() {
  return (
    <header className="naglowek">
                <h1 className="tytul">Tomasz — Portfolio</h1>
                    
                        <nav className='nawigacja'>
                            <Link to="/">Główna</Link>
                            <Link to="/omnie">O Mnie</Link>
                            <Link to="/hobby">Hobby</Link>
                            <Link to="/umiejetnosci">Umiejętności techniczne</Link>
                            <Link to="/miekkie">Umiejętności miękkie</Link>
                            <Link to="/projekty">Projekty</Link>
                            <Link to="/kontakt">Kontakt</Link>
                        </nav>
                    

    </header>
  )
}

export default Header