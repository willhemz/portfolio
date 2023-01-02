import React, { useState } from 'react'
import {HiMenuAlt3} from 'react-icons/hi'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const navLinks = React.useRef(null)
  const navContainer = React.useRef(null)
 
  const handleClick = e => {
    e.preventDefault()
    navContainer.current.style.height = `${0}px`
    setShowLinks(false)
    const target = e.target.getAttribute('href')
    const location = document.querySelector(target).offsetTop
    window.scrollTo({
      left: 0,
      top: location + 30,
    })
  }

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
              <a type='button' href="#home" onClick={handleClick}>Home</a>
              <a type='button' href="#about" onClick={handleClick}>About Me</a>
              <a type='button' href="#skills" onClick={handleClick}>Skills</a>
              <a type='button' href="#projects" onClick={handleClick}>Projects</a>
              <a type='button' href="#contact" onClick={handleClick}>Contact Me</a>
          </div>
        </div>
      </section>
    </nav>
  )
}

export default Navbar
