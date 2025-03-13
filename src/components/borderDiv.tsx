import React from 'react'
import { Link } from 'react-router-dom'

const SpecialDiv = ({
  children,
  className = '',
  url = null,
  onClick
}: {
  children: React.ReactNode
  className?: string
  url?: string | null
  onClick?: () => void
}) => {
  const Wrapper = url ? Link : 'div'
  const wrapperProps = url ? { to: url } : {}

  if (onClick) {
    wrapperProps.onClick = onClick
  }

  return (
    <Wrapper
      {...wrapperProps}
      className={`relative flex outline outline-1 outline-[#3f3f3f] ${className} p-0`}
    >
      <span className="absolute left-[-0.125rem] top-[-0.125rem] z-20 h-1 w-1 bg-enigma-green"></span>
      <span className="absolute right-[-0.125rem] top-[-0.125rem] z-20 h-1 w-1 bg-enigma-green"></span>
      <span className="absolute bottom-[-0.125rem] left-[-0.125rem] z-20 h-1 w-1 bg-enigma-green"></span>
      <span className="absolute bottom-[-0.125rem] right-[-0.125rem] z-20 h-1 w-1 bg-enigma-green"></span>
      {children}
    </Wrapper>
  )
}

export default SpecialDiv
