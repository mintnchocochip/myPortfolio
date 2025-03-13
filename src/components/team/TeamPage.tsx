import React, { useEffect, useState } from 'react'
import Header from '../Header'
import axios from 'axios'
import api from '../../utils/api'
import checkToken from '../../utils/checktoken'

interface User {
  id: Number
  tag: string
  name: string
  email: string
  phone_num: string
}

const TeamPage = () => {
  const [teamName, setTeamName] = useState('TEAM NAME')
  const [rank, setRank] = useState(0)
  const [teamMembers, setTeamMembers] = useState(['You', 'are', 'pwned'])
  const [points, setPoints] = useState(0)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!checkToken()) {
      window.location.href = `${window.location.origin}/teamLogin`
    }
    const fetchData = async () => {
      try {
        // console.log('TEAM')
        const response = await api.get('/team/me', {})
        // console.log(response)

        setTeamName(response.data.name)
        setPoints(response.data.points)
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          if (err.response) {
            setError(
              err.response.data.msg_code?.toString() ||
                "Can't fetch the name and points"
            )
          }
        } else {
          setError('An unknown error occurred')
        }
      }
    }

    const teamMemberData = async () => {
      try {
        const response = await api.get('/team/members', {})
        console.log('MEMBERS')
        console.log(response)
        const arr: string[] = []
        response.data.forEach((element: User) => {
          arr.push(element.name)
        })
        setTeamMembers(arr)
        console.log(arr)
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

    fetchData()
    teamMemberData()
  }, [])

  return (
    <div className="flex h-screen w-full flex-col">
      <Header
        links={[
          { text: 'Leaderboard', path: '/leaderboard' },
          { text: 'Challenges', path: '/challenge' },
          { text: 'Team', path: '#' }
        ]}
      />
      <div className="flex w-screen flex-grow justify-center px-16 font-neuebit text-8xl">
        <div className="flex h-full w-full flex-col gap-10">
          <div className="text-left text-[1.25ch] leading-none text-enigma-green md:text-[clamp(4ch,0.5vw,5ch)]">
            {teamName}
            <sup className="text-[clamp(2ch,0.5ch,3ch)] text-white">
              #{rank}
            </sup>
          </div>
          <div className="flex h-full w-full flex-col-reverse justify-center gap-5 py-5 md:flex-row md:gap-10">
            <div className="flex w-full flex-col-reverse gap-5 text-left md:w-5/6 md:flex-col md:gap-10">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="overflow-hidden overflow-ellipsis whitespace-nowrap border border-white p-2 px-5 text-[1ch] leading-none md:text-[clamp(2ch,0.5vw,3ch)]"
                >
                  {member}
                </div>
              ))}
              <div className="text-left text-[1ch] leading-none md:text-[clamp(2ch,0.5vw,3ch)]">
                TOTAL POINTS:{' '}
                <span className="text-enigma-green">{points}</span>
              </div>
            </div>
            <div className="h-[clamp(23rem,0.1rem,26rem)] w-auto border border-white p-2 md:w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamPage
