import { FormEvent } from 'react'
import SpecialDiv from './components/borderDiv.tsx'
import AnimatedText from './components/text'
import { Link } from 'react-router-dom'
import React from 'react'
import api from './utils/api'
import axios from 'axios'

const ChallengePage = ({
  ctfName = 'CTF NAME',
  ctfDescription = '',
  creator = 'MR.ROBOT',
  points = 0,
  tag,
  id,
  solved = 0
}) => {
  const [flag, setFlag] = React.useState('')
  const [error, setError] = React.useState('')
  const [success, setSuccess] = React.useState('')

  const handleFlagChange = (e) => {
    setFlag(e.target.value)
    setError('')
    setSuccess('')
  }

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault()

    try {
      setError('')
      setSuccess('')

      const trimmedFlag = flag.trim()
      console.log('Submitting flag:', trimmedFlag)

      if (!trimmedFlag) {
        setError('Flag cannot be empty')
        return
      }

      console.log(
        `Sending request to /ctf/${id}/flag with flag: ${trimmedFlag}`
      )

      const response = await api.post(`/ctf/${id}/flag`, {
        flag: trimmedFlag
      })

      console.log('API Response:', response)

      // successful response
      if (response.data) {
        console.log('Response data:', response.data)
        setSuccess('Flag submitted successfully!')
        setFlag('') // clear the flag? bwahahahaha!
      }
    } catch (err) {
      console.error('Error submitting flag:', err)

      if (axios.isAxiosError(err)) {
        if (err.response) {
          const errorMessage =
            err.response.data.msg_code?.toString() || "Can't post flag"
          console.error('API error response:', err.response.data)
          setError(errorMessage)
        } else if (err.request) {
          console.error('No response received:', err.request)
          setError('No response from server. Please try again.')
        } else {
          console.error('Error setting up request:', err.message)
          setError('Request failed. Please try again.')
        }
      } else {
        console.error('Unknown error:', err)
        setError('An unknown error occurred')
      }
    }
  }

  return (
    <div className="grid-rows-17 grid h-[100vh] w-[100vw] p-10 text-center font-neuebit">
      <SpecialDiv
        className="row-span-1 grid grid-cols-9 p-0 text-xl"
        url={null}
      >
        <SpecialDiv
          className="col-span-1 flex items-center justify-center text-4xl"
          url="/"
        >
          <Link to="/">
            <AnimatedText text="ENIGMA" />
          </Link>
        </SpecialDiv>
        <SpecialDiv
          className="col-span-5 flex items-center justify-center"
          url="#"
        ></SpecialDiv>
        <SpecialDiv
          className="col-span-1 flex items-center justify-center"
          url={null}
        >
          <a href="https://chat.whatsapp.com/E2SRTK0yLfZIpGka4DO3mG">
            <AnimatedText text="REPORT A BUG" />
          </a>
        </SpecialDiv>
        <SpecialDiv
          className="col-span-1 flex items-center justify-center"
          url={null}
        >
          <AnimatedText text="LEADERBOARD" />
        </SpecialDiv>
        <SpecialDiv
          className="col-span-1 flex items-center justify-center"
          url={null}
        >
          <AnimatedText text="TEAM INFO" />
        </SpecialDiv>
      </SpecialDiv>
      <SpecialDiv className="row-span-4 grid grid-cols-4 p-0" url={null}>
        <SpecialDiv className="col-span-1 grid grid-rows-2 text-4xl" url={null}>
          <SpecialDiv
            className="flex cursor-pointer items-center justify-center hover:bg-enigma-green hover:text-black"
            url={'/challenges'}
          >
            <AnimatedText text="BACK TO CTFs" />
          </SpecialDiv>
          <SpecialDiv className="flex items-center justify-center" url={null}>
            {creator}
          </SpecialDiv>
        </SpecialDiv>
        <SpecialDiv
          className="line col-span-3 flex items-center justify-center text-9xl leading-none text-enigma-green"
          url={null}
        >
          <AnimatedText text={ctfName} />
        </SpecialDiv>
      </SpecialDiv>
      <SpecialDiv className="row-span-12 grid grid-cols-4 text-4xl" url={null}>
        <SpecialDiv className="col-span-3 p-10 text-start" url={null}>
          {ctfDescription}
        </SpecialDiv>
        <SpecialDiv className="col-span-1 grid grid-rows-6" url={null}>
          <div id="div" className="row-span-2 cursor-pointer">
            <SpecialDiv
              className="flex h-full w-full flex-col items-center justify-center bg-enigma-green text-black"
              url={null}
            >
              <AnimatedText text="DOWNLOAD" />
              <AnimatedText text="CHALLENGE" />
              <AnimatedText text="FILES" />
            </SpecialDiv>
          </div>
          <SpecialDiv
            className="row-span-2 flex flex-col items-center justify-center"
            url={null}
          >
            <div className="flex gap-2">
              <span className="text-enigma-green">
                <AnimatedText text={`${points}`} />
              </span>{' '}
              <AnimatedText text="POINTS" />
            </div>
            <div className="flex gap-2">
              <AnimatedText text={`${solved}`} />{' '}
              <span className="text-enigma-green">
                <AnimatedText text="SOLVED" />
              </span>
            </div>
          </SpecialDiv>
          <SpecialDiv
            className="row-span-1 flex items-center justify-center text-enigma-green"
            url={null}
          >
            <input
              type="text"
              name="flag"
              id="flag"
              value={flag}
              onChange={handleFlagChange}
              placeholder={'enigma{FLaG_gOeS_hErE}'}
              className="h-full w-full cursor-text bg-black px-6 text-2xl"
            />
          </SpecialDiv>
          {error && (
            <div className="absolute -bottom-8 left-0 text-lg text-red-500">
              {error}
            </div>
          )}
          {success && (
            <div className="absolute -bottom-8 left-0 text-lg text-enigma-green">
              {success}
            </div>
          )}
          <SpecialDiv
            onClick={handleSubmit}
            className="row-span-1 flex cursor-pointer items-center justify-center hover:bg-enigma-green hover:text-black"
            url={null}
          >
            <AnimatedText text="SUBMIT" />
          </SpecialDiv>
        </SpecialDiv>
      </SpecialDiv>
    </div>
  )
}

export default ChallengePage
