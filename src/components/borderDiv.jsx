const SpecialDiv = ({ children, className = "" }) => {
    return (
        <div className={`relative flex outline outline-1 outline-[#3f3f3f] ${className} p-0`}>
            <span className="absolute top-[-0.125rem] left-[-0.125rem] w-1 h-1 bg-enigma-green z-20"></span>
            <span className="absolute top-[-0.125rem] right-[-0.125rem] w-1 h-1 bg-enigma-green z-20"></span>
            <span className="absolute bottom-[-0.125rem] left-[-0.125rem] w-1 h-1 bg-enigma-green z-20"></span>
            <span className="absolute bottom-[-0.125rem] right-[-0.125rem] w-1 h-1 bg-enigma-green z-20"></span>
            {children}
        </div>
    );
};

export default SpecialDiv;
