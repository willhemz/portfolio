import React, {useRef} from 'react'
import gsap from 'gsap';
import {useIntersection} from 'react-use';

const About = () => {
  const leftContainer = useRef(null)
  const rightContainer = useRef(null)
  // aboutLeftSection Animation
  const leftAnim = useIntersection(leftContainer, {
      root: null,
      rootMargin: "0px",
      threshold: .5
  })
  const slideInLeft = (element) => {
      gsap.to(element, 2, {
          opacity: 1,
          x: '0px',
          y: '0px',
          ease: 'power4',
          stagger: {
              amount: 3
          }
      })
  }
  const slideOutLeft = (element) => {
      gsap.to(element, 2, {
          opacity: 0,
          x: '-100px',
          y: '-100px',
          ease: 'power4',
      })
  }
  leftAnim && leftAnim.intersectionRatio > .5 ? slideInLeft('.about-header'): slideOutLeft('.about-header')

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
          y: '0px',
          ease: 'power4',
          stagger: {
              amount: 3
          }
      })
  }

  const slideOutRight = (element) => {
      gsap.to(element, 2, {
          opacity: 0,
          x: '100px',
          y: '100px',
          ease: 'power4',
      })
  }
  
  rightAnim && rightAnim.intersectionRatio > .5 ? slideInRight('.about-footer'): slideOutRight('.about-footer')

  return <>
    <section id='about' className="about">
      <article ref={leftContainer} className="about-header">
        <h1>Our <span>goal</span> Our <span>mission</span></h1>
        <p>
          <span>Quality UI</span>
          <span>Super Functionality</span>
          <span>Excellent Business</span>
        </p>
      </article>
      <article ref={rightContainer} className="about-footer">
        <p>I'm a Frontend Developer with sound knowledge and application of JavaScript and its Libraries (React, Vue), and other frontend technologies.</p>
        <p>Also a Content/Graphics Designer with 9 years+ experience of using Graphics Design softwares to producing quality brand and content designs.</p>
      </article>
    </section>
  </>
}

export default About
