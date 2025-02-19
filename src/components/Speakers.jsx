import React from 'react'
import Speaker from './Speaker.jsx'
import AnimatedText from './text.jsx'

function Speakers() {
  return (
    <>
      <div className="z-20 px-10 text-left">
        <AnimatedText
          text="SPEAKERS"
          className="lg:9xl z-50 w-screen cursor-pointer text-left font-neuebit text-6xl uppercase md:text-8xl"
          customText="_-"
          time={2}
          preStyle="font-neuebit uppercase text-6xl md:text-8xl lg:9xl text-yellow-500 z-50 cursor-pointer text-left"
        />
      </div>
      <Speaker
        name="Yeyati Prasher"
        subname="Linux Basics"
        image="/cool-peeps/yeyati.jpg"
        values={{
          'Command Line Interface':
            'Master navigation, file manipulation, and shell fundamentals.',
          'Bash Scripting': 'Automate tasks using Bash commands and scripts.',
          'File System Hierarchy': 'Understand Linux directory structure.',
          'User & Group Management': 'Handle users and permissions.',
          'File Permissions': 'Control access with chmod and chown.'
        }}
      ></Speaker>
      <Speaker
        ct="👶"
        name="Sid Karnam"
        image="/cool-peeps/sid.jpg"
        subname="Binary Exploitation"
        values={{
          'Basics of Binary Exploitation':
            'Understanding and exploiting binary vulnerabilities',
          'Basic Tools for Analysis':
            'Using gdb, checksec, readelf, and ROPgadget',
          'Analyzing a Binary': 'Extracting insights using security tools',
          Overflows: 'Exploiting buffer, integer, and stack overflows',
          'Formatting Vulnerabilities':
            'Attacking printf-style format string bugs',
          'ROP & GOT Basics': 'Bypassing protections using ROP and GOT'
        }}
      ></Speaker>
      <Speaker
        ct="🦜"
        name="Goutham Rajeev"
        subname="Web"
        image="/cool-peeps/goutham.jpg"
        values={{
          'SQL Injection using OR/And Clause':
            'Bypass auth using OR/AND logic.',
          'Exploiting Where conditions': 'Manipulate WHERE to leak data.',
          'Union attacks': 'Merge queries using UNION.',
          'XSS Reflected attack': 'Immediate script reflection.',
          'XSS Stored attack': 'Stored scripts compromise users.',
          'XSS DOM attack': 'Inject scripts via DOM.',
          'File Upload Vulnerabilities': 'Weak upload checks risk systems.',
          'Uploading web shells': 'Hide scripts as files.',
          'Bypassing file restrictions': 'Circumvent file validations.',
          'Path traversal via File Upload': 'Exploit directory traversal.'
        }}
        customaudio="/sfx/parrots.wav"
      ></Speaker>
      <Speaker
        ct="🧏🤫"
        name="Preetham Pemmasani"
        image="/cool-peeps/preetham.jpg"
        subname="OSINT"
        values={{
          topic1: 'description1',
          topic2: 'description2',
          topic3: 'description3',
          topic4: 'description4',
          topic5: 'description5',
          topic6: 'description6',
          topic7: 'description7',
          topic8: 'description8'
        }}
      ></Speaker>
    </>
  )
}

export default Speakers
