import React, { useState, FormEvent } from 'react'
import AnimatedText from '../text'

const TeamCreation = () => {
  const [teamName, setTeamName] = useState('')
  const [teamCode, setTeamCode] = useState('')
  const [showCode, setShowCode] = useState(false)
  const [joinCode, setJoinCode] = useState('')
  const [mode, setMode] = useState<'create' | 'join'>('create')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (teamName.trim()) {
      console.log('Team name submitted:', teamName)
      // team creation logic goes here
      const generatedCode = Math.random().toString(36).substring(2, 8).toUpperCase()
      setTeamCode(generatedCode)
      setShowCode(true)
    }
  }

  const handleJoinSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (joinCode.trim()) {
      console.log('Joining team with code:', joinCode)
      // team joining logic goes here
    }
  }

  const switchMode = () => {
    setMode(mode === 'create' ? 'join' : 'create')
    setShowCode(false)
    setTeamName('')
    setJoinCode('')
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center w-screen font-neuebit">
      <div className="flex flex-row">
        <div className='mb-8 text-7xl text-enigma-green'>{mode === 'create' ? 'CREATE A TEAM' : 'JOIN A TEAM'}</div>
      </div>

      {mode === 'create' ? (
        <>
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md flex-col items-center gap-4"
          >
            <input
              type="text"
              name="team_name"
              id="tname"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="ENTER TEAM NAME TO CREATE"
              className="w-full text-2xl border border-white bg-transparent p-4 text-white transition-colors focus:border-blue-500 focus:outline-none cursor-text"
              required
            />

            <button
              type="submit"
              className="mt-4 bg-white px-8 py-3 rounded-none font-semibold text-black transition-colors hover:bg-gray-200 text-2xl"
            >
              CREATE TEAM
            </button>
          </form>

          {showCode && (
            <div className="mt-8 text-white">
              <AnimatedText
                text={'TEAM CREATED! YOUR TEAM CODE IS: '}
                time={0.2}
                className="mb-8 text-5xl"
              />
              <p className='mb-8 text-6xl'>{teamCode}</p>
            </div>
          )}
        </>
      ) : (
        <form
          onSubmit={handleJoinSubmit}
          className="flex w-full max-w-md flex-col items-center gap-4"
        >
          <input
            type="text"
            name="join_code"
            id="jcode"
            value={joinCode}
            onChange={(e) => setJoinCode(e.target.value)}
            placeholder="ENTER TEAM CODE TO JOIN"
            className="w-full border text-2xl border-white bg-transparent p-4 text-white transition-colors focus:border-blue-500 focus:outline-none"
            required
          />

          <button
            type="submit"
            className="bg-white px-8 py-3 font-semibold text-black transition-colors hover:bg-gray-200 text-2xl"
          >
            JOIN TEAM
          </button>
        </form>
      )}

      <button
        onClick={switchMode}
        className="mt-12 text-white text-2xl underline uppercase hover:text-gray-300 transition-colors"
      >
        {mode === 'create' ? 'Want to join a team instead?' : 'Want to create a team instead?'}
      </button>
    </div>
  )
}

export default TeamCreation