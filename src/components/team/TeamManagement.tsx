import React, { useState, useEffect, FormEvent } from 'react'
import axios from 'axios'
import api from '../../utils/api'

interface User {
  id: number
  tag: string
  name: string
  email: string
  phone_num: string
}

interface Team {
  id: number
  name: string
  // Add other team properties as needed
}

const TeamManagement = () => {
  const [team, setTeam] = useState<Team | null>(null)
  const [members, setMembers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // New member form
  const [newMemberTag, setNewMemberTag] = useState('')
  const [newMemberName, setNewMemberName] = useState('')
  const [newMemberEmail, setNewMemberEmail] = useState('')
  const [newMemberPhone, setNewMemberPhone] = useState('')
  const [isAddingMember, setIsAddingMember] = useState(false)

  // Load team and members on component mount
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        setIsLoading(true)
        const teamResponse = await api.get('/team/me')
        const membersResponse = await api.get('/team/members')

        setTeam(teamResponse.data)
        setMembers(membersResponse.data)
      } catch (error) {
        console.error('Error fetching team data:', error)
        setError('Failed to load team data. Please try again later.')

        // If unauthorized, redirect to login
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          localStorage.removeItem('token')
          window.location.href = `${window.location.origin}/team-login`
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchTeamData()
  }, [])

  // Handle adding a new member
  const handleAddMember = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsAddingMember(true)
    setError('')
    setSuccess('')

    try {
      const response = await api.post('/team/add', {
        tag: newMemberTag.trim().toLowerCase(),
        name: newMemberName.trim(),
        email: newMemberEmail.trim(),
        phone_num: newMemberPhone.trim()
      })

      if (response.data.msg_code === 18) {
        // User added success code
        setSuccess('Team member added successfully!')

        // Refresh member list
        const membersResponse = await api.get('/team/members')
        setMembers(membersResponse.data)

        // Clear form
        setNewMemberTag('')
        setNewMemberName('')
        setNewMemberEmail('')
        setNewMemberPhone('')
      } else {
        setError(`Error: ${getErrorMessage(response.data.msg_code)}`)
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.response) {
          const errorCode = err.response.data.msg_code
          setError(getErrorMessage(errorCode))
        } else {
          setError('Network error. Please try again.')
        }
      } else {
        setError('An unknown error occurred.')
      }
    } finally {
      setIsAddingMember(false)
    }
  }

  // Handle removing a member
  const handleRemoveMember = async (tag: string) => {
    if (
      !confirm(`Are you sure you want to remove team member with tag ${tag}?`)
    ) {
      return
    }

    setIsLoading(true)
    setError('')
    setSuccess('')

    try {
      const response = await api.post('/team/remove', {
        tag: tag
      })

      if (response.data.msg_code === 19) {
        // User removed success code
        setSuccess('Team member removed successfully!')

        // Update members list by removing the deleted member
        setMembers(members.filter((member) => member.tag !== tag))
      } else {
        setError(`Error: ${getErrorMessage(response.data.msg_code)}`)
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.response) {
          const errorCode = err.response.data.msg_code
          setError(getErrorMessage(errorCode))
        } else {
          setError('Network error. Please try again.')
        }
      } else {
        setError('An unknown error occurred.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  // Helper function to get error message from code
  const getErrorMessage = (code: number): string => {
    switch (code) {
      case 0:
        return 'Database error'
      case 20:
        return 'User already in a team'
      case 21:
        return 'User not in your team'
      default:
        return `Unknown error (code ${code})`
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 font-neuebit">
      <h1 className="mb-8 text-6xl text-enigma-green">TEAM MANAGEMENT</h1>

      {isLoading && (
        <div className="text-2xl text-white">Loading team data...</div>
      )}

      {error && (
        <div className="mb-6 bg-red-800 p-4 text-xl text-white">{error}</div>
      )}
      {success && (
        <div className="mb-6 bg-green-800 p-4 text-xl text-white">
          {success}
        </div>
      )}

      {team && (
        <div className="mb-8 border border-enigma-green bg-black bg-opacity-50 p-6">
          <h2 className="mb-4 text-4xl text-enigma-green">TEAM: {team.name}</h2>
          <p className="text-xl text-white">Team ID: {team.id}</p>
          {/* Add other team info as needed */}
        </div>
      )}

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Team Members List */}
        <div className="border border-enigma-green bg-black bg-opacity-50 p-6">
          <h2 className="mb-6 text-4xl text-enigma-green">TEAM MEMBERS</h2>

          {members.length === 0 ? (
            <p className="text-xl text-white">No team members found.</p>
          ) : (
            <ul className="space-y-4">
              {members.map((member) => (
                <li
                  key={member.tag}
                  className="flex items-center justify-between border border-gray-700 p-3"
                >
                  <div className="text-white">
                    <p className="text-xl">{member.name}</p>
                    <p className="text-gray-400">Tag: {member.tag}</p>
                    <p className="text-gray-400">
                      Email: {member.email || 'N/A'}
                    </p>
                    <p className="text-gray-400">
                      Phone: {member.phone_num || 'N/A'}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemoveMember(member.tag)}
                    className="bg-red-800 px-4 py-2 text-white hover:bg-red-700"
                  >
                    REMOVE
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Add Member Form */}
        <div className="border border-enigma-green bg-black bg-opacity-50 p-6">
          <h2 className="mb-6 text-4xl text-enigma-green">ADD NEW MEMBER</h2>

          <form onSubmit={handleAddMember} className="space-y-4">
            <div>
              <label htmlFor="tag" className="mb-2 block text-xl text-white">
                Tag (Required)
              </label>
              <input
                type="text"
                id="tag"
                value={newMemberTag}
                onChange={(e) => setNewMemberTag(e.target.value)}
                required
                className="w-full border border-white bg-transparent p-3 text-xl text-white"
                placeholder="Enter member tag (e.g., registration number)"
              />
            </div>

            <div>
              <label htmlFor="name" className="mb-2 block text-xl text-white">
                Name (Required)
              </label>
              <input
                type="text"
                id="name"
                value={newMemberName}
                onChange={(e) => setNewMemberName(e.target.value)}
                required
                className="w-full border border-white bg-transparent p-3 text-xl text-white"
                placeholder="Enter member name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-xl text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={newMemberEmail}
                onChange={(e) => setNewMemberEmail(e.target.value)}
                className="w-full border border-white bg-transparent p-3 text-xl text-white"
                placeholder="Enter member email"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-xl text-white">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={newMemberPhone}
                onChange={(e) => setNewMemberPhone(e.target.value)}
                className="w-full border border-white bg-transparent p-3 text-xl text-white"
                placeholder="Enter member phone number"
              />
            </div>

            <button
              type="submit"
              disabled={isAddingMember}
              className={`mt-4 bg-white px-6 py-3 text-xl font-bold text-black hover:bg-enigma-green ${isAddingMember ? 'cursor-not-allowed opacity-50' : ''}`}
            >
              {isAddingMember ? 'ADDING...' : 'ADD MEMBER'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TeamManagement
