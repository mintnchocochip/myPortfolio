import React from 'react'
import { Link } from 'react-router-dom'
import AnimatedText from './text'
import JoinImg from '../assets/JoinBg.png'

export default function Join({ className }) {
  const today = new Date()
  const day = String(today.getDate()).padStart(2, '0') // Get day and pad with 0 if needed
  const month = String(today.getMonth() + 1).padStart(2, '0') // Get month (0-indexed) and pad
  const year = today.getFullYear()

  return (
    <a
      href="https://chat.whatsapp.com/E2SRTK0yLfZIpGka4DO3mG"
      className={className}
    >
      <img
        src={JoinImg}
        alt="JoinImg"
        className="fixed bottom-4 right-2 m-6 flex h-32 items-center justify-center rounded-none px-6 py-4 text-right md:bottom-4 md:right-0"
      />
      <div>
        <AnimatedText
          text="CHECK-IN"
          className="x-6 fixed bottom-16 right-[3.25rem] m-6 flex h-24 items-center justify-center rounded-none py-4 pt-2 text-right font-neuebit text-xl text-black md:bottom-14 md:right-10"
        />
        <AnimatedText
          text="JOIN NOW"
          className="x-6 h-22 fixed bottom-8 right-14 m-6 flex items-center justify-center rounded-none py-4 text-right font-neuebit text-6xl text-black md:bottom-8 md:right-10"
        />
        <p className="x-6 fixed bottom-0 right-16 z-50 m-6 flex h-24 items-center justify-center rounded-none py-4 text-right font-neuebit text-3xl text-black md:bottom-0">
          04 Mar 25
        </p>
      </div>
    </a>
  )
}
