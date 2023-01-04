import React from 'react'
import williams from '../assets/williams.jpg'
import resume from '../assets/resume.pdf'

const Home = () => {
  return <>
    <section id='home' className='home'>
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
        <a type='button' href='#contact' style={{marginRight: '1rem'}}>
          Hire Me
        </a>
        <a type='button' href={resume} target='_blank' rel='noreferrer'>
          Resume
        </a>
      </article>
      <article className='home-profile'>
        <img src={williams} alt="" />
      </article>
    </section>
  </>
}

export default Home
