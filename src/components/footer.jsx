import React from 'react'
import AnimatedText from './text'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center p-4">
      <div className="grid w-full grid-cols-1 gap-10 py-4 text-left font-montreal-book uppercase text-white md:grid-cols-3">
        <div className="text-left">
          <h3 className="font-montreal-medium font-bold text-enigma-green">
            <AnimatedText text="ENIGMA" />
          </h3>
          <ul>
            <li>
              <a
                className="text-gray-300 no-underline hover:text-green-500 hover:underline"
                href="https://lugvitc.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedText text="LUGVITC" />
              </a>
            </li>
            <li>
              <a
                className="text-gray-300 no-underline hover:text-green-500 hover:underline"
                href="https://type.lugvitc.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedText text="LUGTYPE" />
              </a>
            </li>
            <li>
              <AnimatedText text="Contact" />
            </li>
          </ul>
        </div>
        <div className="text-left">
          <h3 className="font-montreal-medium font-bold text-enigma-green">
            <AnimatedText text="Socials" />
          </h3>
          <ul>
            <li>
              <a
                className="text-gray-300 no-underline hover:text-green-500 hover:underline"
                href="https://instagram.com/lugvitc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedText text="Instagram" />
              </a>
            </li>
            <li>
              <a
                className="text-gray-300 no-underline hover:text-green-500 hover:underline"
                href="https://github.com/lugvitc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedText text="GitHub" />
              </a>
            </li>
          </ul>
        </div>
        <div className="text-left">
          <h3 className="font-montreal-medium font-bold text-enigma-green">
            <AnimatedText text="VIT Chennai" />
          </h3>
          <ul>
            <li>
              <AnimatedText text="Kelambakkam - Vandalur Rd" />
            </li>
            <li>
              <AnimatedText text="Rajan Nagar, Chennai, Tamil Nadu" />
            </li>
            <li>
              <AnimatedText text="India" />
            </li>
          </ul>
        </div>
      </div>
      <div className="line my-4 w-full"></div>
      <p className="responsive-text font-calcio text-big-phone-xl text-white lg:text-big-desktop-xl">
        <AnimatedText
          text="ENIGMA"
          time={2}
          customText="▂▄▆█"
          preStyle="text-enigma-green"
        />
      </p>
    </footer>
  )
}
