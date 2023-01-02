import React from 'react'

const Home = () => {
  return (
    <section id='home' className='home'>
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
    </section>
  )
}

export default Home
