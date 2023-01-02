import React from 'react'
import { data } from '../components/data'

const SKills = () => {
  return <>
    <section id="skill" className="skill">
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
