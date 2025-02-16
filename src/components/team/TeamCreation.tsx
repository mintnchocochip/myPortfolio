import React, { useState, FormEvent } from 'react'
import AnimatedText from '../text'

const TeamCreation = () => {
  const [teamName, setTeamName] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
    if (teamName.trim()) {
      console.log('Team name submitted:', teamName)
      // Add your team creation logic here
    }
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <AnimatedText
        text={'CREATE A TEAM'}
        time={1}
        className="mb-8 font-neuebit text-7xl"
      />

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
          placeholder="Enter team name"
          className="w-full border border-white bg-transparent p-4 text-white transition-colors focus:border-blue-500 focus:outline-none"
          required
        />

        <button
          type="submit"
          className="mt-4 bg-white px-8 py-3 font-semibold text-black transition-colors hover:bg-gray-200"
        >
          Create Team
        </button>
      </form>
    </div>
  )
}

export default TeamCreation
