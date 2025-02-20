import React, { useEffect } from 'react'
import Speakers from './components/Speakers'

const About = () => {
  useEffect(() => {
    const hasReloaded = localStorage.getItem('hasReloaded')
    if (!hasReloaded) {
      localStorage.setItem('hasReloaded', 'true')
      setTimeout(() => {
        window.location.reload()
      }, 1000)
    }
  }, [])

  return (
    <div className="">
      <Speakers />
    </div>
  )
}

export default About
