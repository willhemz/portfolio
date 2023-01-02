import React, { useState } from 'react'
import {HiMenuAlt3} from 'react-icons/hi'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState()
  const navLinks = React.useRef(null)
  const navContainer = React.useRef(null)

  React.useEffect(()=>{
    let height = navLinks.current.getBoundingClientRect().height
    showLinks ? navContainer.current.style.height = `${height}px` : navContainer.current.style.height = `${0}px`
  })
  return (
    <nav className='navbar'>
      <section className="nav-center">
        <a href='#home' className="nav-logo">W</a>
        <button onClick={()=>setShowLinks(!showLinks)} className={`${showLinks ? 'btn btnRotate' : 'btn'}`}>
          <HiMenuAlt3 />
        </button>
        <div className={`nav-container ${showLinks && 'nav-show'}`} ref={navContainer}>
          <div className={`nav-sections`} ref={navLinks}>
              <a type='button' href="#home">Home</a>
              <a href="#about">About Me</a>
              <a type='button' href="#skills">Skills</a>
              <a type='button' href="#projects">Projects</a>
              <a type='button' href="#contact">Contact Me</a>
          </div>
        </div>
      </section>
    </nav>
  )
}

export default Navbar
