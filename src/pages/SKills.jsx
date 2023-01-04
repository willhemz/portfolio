import React, {useRef} from 'react'
import gsap from 'gsap';
import {useIntersection} from 'react-use';
import { data } from '../components/data'

const SKills = () => {
  const bottomContainer = useRef(null)

  // Animation
  const bottomAnim = useIntersection(bottomContainer, {
    root: null,
    rootMargin: "100px",
    threshold: .5
  })

  const slideInBottom = (element) => {
      gsap.to(element, 2, {
          opacity: 1,
          y: '0px',
          ease: 'power4',
          stagger: {
              amount: 3
          }
      })
  }

  const slideOutBottom = (element) => {
      gsap.to(element, 2, {
          opacity: 0,
          y: '100px',
          ease: 'power4',
      })
  }
  
  bottomAnim && bottomAnim.intersectionRatio > .5 ? slideInBottom('.skill'): slideOutBottom('.skill')

  return <>
    <section ref={bottomContainer} id="skills" className="skill">
      <article className="skill-header">
        <p className='sub-title'>Technologies I work with...</p>
        <h1 className='title'>My Skills</h1>
      </article>
      <article className="skill-footer">
        {data.map(item => {
          return <div className="stack" key={item.id}>
            <p>{item.icon}</p>
            <p>{item.name}</p>
          </div>
        })}
      </article>
    </section>
  </>
}

export default SKills
