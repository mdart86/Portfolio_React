import React from 'react'
import "./styling/styling.scss"
import { useState } from 'react'

import NavBar from './components/NavBar'
import Menu from './components/Menu'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'


function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="areas">
          <Intro />
          <Portfolio />
          <Contact />
        </div>
    </div>
  );
}

export default App;
