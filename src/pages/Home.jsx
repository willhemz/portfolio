import React, {useState, useRef, useEffect} from 'react'
import williams from '../assets/williams.jpg'

const Home = () => {
  const [visible, setVisible] = useState(true)
  const container = useRef()

  // const listenToScroll = () => {
  //   const size = container.current.getBoundingClientRect()
  //   const winscroll = document.body.scrollTop || document.documentElement.scrollTop
  //   if(winscroll > size.height || winscroll < 0) setVisible(true)
  //   else setVisible(false)
  // }

  // useEffect(()=>{
  //   window.addEventListener('scroll', listenToScroll)

  //   return () => window.removeEventListener('scroll', listenToScroll)
  // },[])
  return <>
    <section ref={container} id='home' className={`home ${visible && 'viewHome'}`}>
      <article>
        <p>Hello World! I am</p>
        <p className='my-name'>
          <span className='text-A'>WILLIAMS</span>
          <span className='text-B'>BALOGUN</span>
        </p>
        <p>I'm a Frontend Developer and Graphics Designer. </p>
        <p style={{ marginBottom: '3rem' }}>
          My goal is to leverage my skills and experience to help individuals,
          firms and businesses scale up and achieve their goals.
        </p>
        <a type='button' href='#contact'>
          Hire Me
        </a>
      </article>
      <article className='home-profile'>
        <img src={williams} alt="" />
      </article>
    </section>
  </>
}

export default Home
