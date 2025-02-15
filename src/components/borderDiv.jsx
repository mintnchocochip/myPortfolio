const SpecialDiv = ({ children, className = '' }) => {
  return (
    <div
      className={`relative flex outline outline-1 outline-[#3f3f3f] ${className} p-0`}
    >
      <span className="absolute left-[-0.125rem] top-[-0.125rem] z-20 h-1 w-1 bg-enigma-green"></span>
      <span className="absolute right-[-0.125rem] top-[-0.125rem] z-20 h-1 w-1 bg-enigma-green"></span>
      <span className="absolute bottom-[-0.125rem] left-[-0.125rem] z-20 h-1 w-1 bg-enigma-green"></span>
      <span className="absolute bottom-[-0.125rem] right-[-0.125rem] z-20 h-1 w-1 bg-enigma-green"></span>
      {children}
    </div>
  )
}

export default SpecialDiv
