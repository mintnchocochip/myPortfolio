import React, { FormEvent, useState } from 'react'
import axios from 'axios'
import api from '../../utils/api'
import { Link } from 'react-router-dom'
import Header from '../Header'

const TeamCreation = () => {
  const [teamName, setTeamName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validate passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    // Validate required fields
    if (!teamName || !password) {
      setError('Team name and password are required')
      return
    }

    try {
      const response = await api.post('/auth/signup', {
        name: teamName,
        password: password,
        tags: []
      })

      console.log(response)

      if (response.status === 200 || response.status === 201) {
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', response.data.access_token)
          window.location.href = `${window.location.origin}/teamLogin`
        }
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.response) {
          setError(
            err.response.data.msg_code?.toString() || 'Failed to create team'
          )
        }
      } else {
        setError('An unknown error occurred')
      }
    }
  }

  return (
    <div>
      <Header
        links={[
          { text: 'Leaderboard', path: '/leaderboard' },
          { text: 'Challenges', path: '#' },
          { text: 'Team', path: '/team' }
        ]}
      />
      <div className="flex h-screen w-screen flex-col items-center justify-center font-neuebit">
        <div className="flex flex-row">
          <div className="mb-8 text-8xl text-enigma-green">CREATE A TEAM</div>
        </div>
        {error && <div className="mb-4 text-4xl text-red-500">{error}</div>}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-4 text-6xl"
        >
          <div className="flex justify-end gap-4">
            <label htmlFor="teamname" className="mr-2 cursor-text">
              TEAMNAME{' '}
            </label>
            <input
              type="text"
              name="teamname"
              id="teamname"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="border-1 border border-white"
            />
          </div>
          <div className="flex justify-end gap-4">
            <label htmlFor="password" className="mr-2 cursor-text">
              PASSWORD{' '}
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-1 border border-white"
            />
          </div>
          <div className="flex justify-end gap-4">
            <label htmlFor="confirmPassword" className="mr-2 cursor-text">
              CONFIRM PASSWORD{' '}
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border-1 border border-white"
            />
          </div>
          <div>
            <button
              type="submit"
              className="rounded-none bg-enigma-green p-4 text-black"
            >
              CREATE TEAM
            </button>
          </div>
          <div className="text-2xl">
            <Link to="/teamLogin" className="text-enigma-green">
              Already have a team? Join here.
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TeamCreation
