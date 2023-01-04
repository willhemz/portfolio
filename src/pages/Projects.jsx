import React from 'react'
import gsap from 'gsap';
import {useIntersection} from 'react-use';
import { projects } from '../components/data'

const Projects = () => {
  const topContainer = React.useRef()
  const [list, setList] = React.useState(projects.filter(project => project.type === 'web'))

  // Animation
  const topAnim = useIntersection(topContainer, {
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
  
  topAnim && topAnim.intersectionRatio > .5 ? slideInBottom('.project'): slideOutBottom('.project')
  return <>
    <section ref={topContainer} className="project" id="projects">
      <article className="project-header">
        <p className="sub-title">Quality build, Quality development</p>
        <h1>My Projects</h1>
      </article>
      <article className="project-buttons">
        <button className='btn skill-btn' onClick={()=>setList(projects.filter(project => project.type === 'web'))}>Web</button>
        <button className='btn skill-btn' onClick={()=>setList(projects.filter(project => project.type === 'graphics'))}>Graphics</button>
      </article>
      <article className="project-footer">
        {list.map(item => {
          return <div key={item.id} className='project-item'>
              <div className="web">
                <a type='button' href={item.link}>
                  <div>
                    <h1>{item.title.toUpperCase()}</h1>
                    <p>{item.desc}</p>
                    <p className='logo'>{item.web}</p>
                  </div>
                  <p className='technologies'>
                    Technologies: {item.technologies.map((item, index) => {
                      return <span className='tech' key={index}>{item}</span>
                    })}
                  </p>
                </a>
              </div>
              <div className="github">
                <a type='button' href={item.github}>
                  <img src={item.image} alt={item.title} />
                  <p className='logo'>{item.icon}</p>
                </a>
              </div>
          </div>
        })}
      </article>
    </section>
  </>
}

export default Projects
