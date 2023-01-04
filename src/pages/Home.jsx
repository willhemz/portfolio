import React, {useRef} from 'react'
import gsap from 'gsap';
import {useIntersection} from 'react-use';
import williams from '../assets/williams.jpg'
import resume from '../assets/resume.pdf'

const Home = () => {
  const leftContainer = useRef(null)
  const rightContainer = useRef(null)
  // left Animation
  const leftAnim = useIntersection(leftContainer, {
      root: null,
      rootMargin: "0px",
      threshold: .5
  })
  const slideInLeft = (element) => {
      gsap.to(element, 2, {
          opacity: 1,
          x: '0px',
          ease: 'power4',
          stagger: {
              amount: 3
          }
      })
  }
  const slideOutLeft = (element) => {
      gsap.to(element, 2, {
          opacity: 0,
          x: '100px',
          ease: 'power4',
      })
  }
  leftAnim && leftAnim.intersectionRatio > .5 ? slideInLeft('.home-header'): slideOutLeft('.home-header')

  // right
  const rightAnim = useIntersection(rightContainer, {
    root: null,
    rootMargin: "0px",
    threshold: .5
  })

  const slideInRight = (element) => {
      gsap.to(element, 2, {
          opacity: 1,
          x: '0px',
          ease: 'power4',
          stagger: {
              amount: 3
          }
      })
  }

  const slideOutRight = (element) => {
      gsap.to(element, 2, {
          opacity: 0,
          x: '-100px',
          ease: 'power4',
      })
  }
  
  rightAnim && rightAnim.intersectionRatio > .5 ? slideInRight('.home-profile'): slideOutRight('.home-profile')

  return <>
    <section id='home' className='home'>
      <article ref={leftContainer} className='home-header'>
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
      <article ref={rightContainer} className='home-profile'>
        <img src={williams} alt="" />
      </article>
    </section>
  </>
}

export default Home
