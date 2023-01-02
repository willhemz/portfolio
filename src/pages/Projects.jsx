import React from 'react'
import { projects } from '../components/data'

const Projects = () => {
  const [list, setList] = React.useState(projects.filter(project => project.type === 'web'))
  return <>
    <section className="project" id="projects">
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
