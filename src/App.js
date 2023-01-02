import React from 'react'
import { Loading, Navbar } from './components'
import { About, Contact, Home, Projects, Skills } from './pages'
import { useGenContext } from './context'

const App = () => {
  const { loading } = useGenContext()
  if (loading) {
    return <Loading />
  }

  return (
    <div className='container'>
      <Navbar />
      <div className='main'>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
