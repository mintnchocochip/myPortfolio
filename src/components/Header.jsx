import { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'
import AnimatedText from './text'
import { useGSAP } from '@gsap/react'

export default function Header({ links }, className) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useGSAP(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        width: '100%',
        duration: 0.5,
        ease: 'back.out(1.6)'
      })
    } else {
      gsap.to(menuRef.current, {
        width: 'auto',
        duration: 0.5,
        ease: 'back.out(1.6)'
      })
    }
  }, [isOpen])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  // For now, the Header is not absolute, make it absolute if you want later, but make sure to see other pages as well.
  return (
    <div
      className={`fixed flex w-full items-center justify-between px-16 py-8 font-neuebit text-3xl ${className}`}
    >
      <span>
        <Link to="/" onClick={handleLinkClick} className="text-3xl">
          ENIGMA
        </Link>
      </span>
      <div className="hidden sm:flex">
        <ul className="flex flex-1 justify-between gap-11 uppercase">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.path} onClick={handleLinkClick}>
                <AnimatedText
                  className="text-2xl text-white hover:bg-enigma-green hover:p-2 hover:text-black"
                  text={link.text}
                  customText="▂▄▆█"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        ref={menuRef}
        className={`flex flex-col justify-end bg-enigma-green font-neuebit uppercase text-black sm:hidden ${isOpen ? 'w-full' : 'w-auto'}`}
      >
        <div
          className="hamburger-icon flex cursor-pointer select-none items-center justify-end p-4 text-right text-2xl"
          onClick={toggleMenu}
        >
          <AnimatedText text="MENU" className="mr-2" />
          <span className="mt-1 text-xl">&#9776;</span> {/* Hamburger icon */}
        </div>
        {isOpen && (
          <div className="menu p-4 text-right text-3xl">
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} onClick={handleLinkClick}>
                    <AnimatedText
                      className="text-black hover:bg-white hover:text-black"
                      text={link.text}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

Header.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
}
