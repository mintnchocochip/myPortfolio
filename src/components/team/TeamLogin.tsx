import React, { FormEvent, useEffect, useState } from 'react'
import axios from 'axios'
import api from '../../utils/api'
import { Link } from 'react-router-dom'

const TeamLogin = () => {
  const [teamName, setTeamName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      window.location.href = `${window.location.origin}/team`
    }
  }, [])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validate required fields
    if (!teamName || !password) {
      setError('Team name and password are required')
      return
    }

    try {
      const response = await api.post('/auth/login', {
        name: teamName,
        password: password
      })

      console.log(response)

      if (response.status === 200 || response.status === 201) {
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', response.data.access_token)
          window.location.href = `${window.location.origin}/team`
        }
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.response) {
          setError(err.response.data.msg_code?.toString() || 'Login failed')
        }
      } else {
        setError('An unknown error occurred')
      }
    }
  }

  return (
    <div>
      <div className="flex h-screen w-screen flex-col items-center justify-center font-neuebit">
        <div className="flex flex-row">
          <div className="mb-8 text-8xl text-enigma-green">TEAM LOGIN</div>
        </div>
        {error && <div className="mb-4 text-4xl text-red-500">{error}</div>}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-4 text-6xl"
        >
          <div>
            <label htmlFor="teamname">TEAMNAME </label>
            <input
              type="text"
              name="teamname"
              id="teamname"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="border-1 border border-white"
            />
          </div>
          <div>
            <label htmlFor="password">PASSWORD </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-1 border border-white"
            />
          </div>
          <div>
            <button
              type="submit"
              className="rounded-none bg-enigma-green p-4 text-black"
            >
              LOGIN
            </button>
          </div>
          <div className="text-2xl">
            <Link to="/teamSignUp" className="text-enigma-green">
              Don't have a team yet? Create one here.
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TeamLogin
