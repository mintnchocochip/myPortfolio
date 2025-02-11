import React from 'react'
import Speaker from './Speaker.jsx';
import AnimatedText from './text.jsx';

function Speakers() {
  return (
    <>  
        <div className="text-left px-10 z-20">
        <AnimatedText
            text="SPEAKERS"
            className="font-neuebit uppercase text-9xl z-50 cursor-pointer w-screen text-left"
            customText='_-'
            time={2}
            preStyle='font-neuebit uppercase text-9xl text-yellow-500 z-50 cursor-pointer text-left'
            />
        </div>
        <Speaker name="Yeyati Prasher" subname="Linux Basics" values={{topic1: "description1", topic2: "description2", topic3: "description3", topic4: "description4", topic5: "description5", topic6: "description6", topic7: "description7", topic8: "description8",}} ></Speaker>
        <Speaker ct="👶" name="Sid Karnam" subname="Binary Exploitation" values={{topic1: "description1", topic2: "description2", topic3: "description3", topic4: "description4", topic5: "description5", topic6: "description6", topic7: "description7", topic8: "description8",}} ></Speaker>
        <Speaker ct="🦜" name="Goutham Rajeev" subname="Web" values={{topic1: "description1", topic2: "description2", topic3: "description3", topic4: "description4", topic5: "description5", topic6: "description6", topic7: "description7", topic8: "description8",}} ></Speaker>
        <Speaker ct="🧏🤫" name="Preetham Pemmasani" subname="OSINT" values={{topic1: "description1", topic2: "description2", topic3: "description3", topic4: "description4", topic5: "description5", topic6: "description6", topic7: "description7", topic8: "description8",}} ></Speaker>
    </>
  )
}

export default Speakers