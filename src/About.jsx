import React, { useEffect } from 'react'
import Speakers from './components/Speakers'
import { useNavigate } from 'react-router'

const About = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      const someCondition = false // Replace with your actual condition
      if (someCondition) {
        navigate(0)
      }
    }, 1000) // Adjust the interval time as needed

    return () => clearInterval(interval) // Cleanup the interval on component unmount
  }, [navigate])

  return (
    <div>
      <Speakers />
    </div>
  )
}

export default About
