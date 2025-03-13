import React, { useEffect, useState } from 'react'
import Hamburger from './components/hamburger'
import LeaderBox from './components/LeaderBox'
import LeaderEntry from './components/LeaderEntry'
import api from './utils/api'
import axios from 'axios'

const refreshrate = 30 // in seconds (cuz screw ms)

interface Team {
  name: string
  tpoints: number
}

function Leaderboard() {
  const [teams, setTeams] = useState<Team[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await api.get('/leaderboard')
        if (response.status === 200) {
          setTeams(response.data)
          setError('')
        }
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          if (err.response) {
            setError(
              err.response.data.msg_code?.toString() ||
                'Error fetching leaderboard data'
            )
          } else {
            setError('Network error occurred')
          }
        } else {
          setError('An unknown error occurred')
        }
        console.error('Error fetching leaderboard data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
    const intervalId = setInterval(fetchData, refreshrate * 1000)

    return () => clearInterval(intervalId)
  }, [])

  // default top 3 teams
  const getTopTeams = () => {
    if (!teams.length) {
      return [
        { name: 'y̵̛̬͉͚̗̪̆̆̀͝ö̶͓́u̸̹̩̥̟̿͘͝͠ͅ', tpoints: 0 },
        { name: 'a̵̩̙̥̼̓̌r̶̰̣̼̙̟̈͗̏͊e̵̮͉͑̂', tpoints: 0 },
        { name: 'ṕ̵̳̝̍w̸͚̰̝̣̒̂̂ͅn̶͙̲͙̺̟̆e̵͙̍̃͋̀͋d̸̘͕̰̀̏͆ͅ', tpoints: 0 }
      ]
    }

    const sortedTeams = [...teams].sort((a, b) => b.tpoints - a.tpoints)

    // top 3 teams padding
    if (sortedTeams.length >= 3) {
      return sortedTeams.slice(0, 3)
    } else {
      const defaultTeams = [
        { name: 'y̵̛̬͉͚̗̪̆̆̀͝ö̶͓́u̸̹̩̥̟̿͘͝͠ͅ', tpoints: 0 },
        { name: 'a̵̩̙̥̼̓̌r̶̰̣̼̙̟̈͗̏͊e̵̮͉͑̂', tpoints: 0 },
        { name: 'ṕ̵̳̝̍w̸͚̰̝̣̒̂̂ͅn̶͙̲͙̺̟̆e̵͙̍̃͋̀͋d̸̘͕̰̀̏͆ͅ', tpoints: 0 }
      ]
      return [...sortedTeams, ...defaultTeams.slice(sortedTeams.length)]
    }
  }

  const topTeams = getTopTeams()

  // leader entry format
  const transformedTeams = teams.map((team) => ({
    team: team.name,
    score: team.tpoints,
    solved: team.tpoints
  }))

  return (
    <div className="w-screen py-2">
      <nav className="sticky top-0 z-20 flex w-full justify-between px-10 py-5">
        <div className="pt-1 text-left font-neuebit text-5xl">ENIGMA</div>
        <Hamburger className="fixed right-0" />
      </nav>
      <div className="mx-auto mb-10 w-[90%] items-center">
        <h1 className="text-center font-neuebit text-[calc(18.25vw)]">
          LEADERBOARD
        </h1>

        {/* top 3 teams */}
        <div className="mb-[calc(1.5vw)] hidden w-full flex-col gap-[calc(1.5vw)] md:flex md:flex-row">
          {loading && !topTeams.length ? (
            <div className="w-full text-center font-neuebit text-2xl">
              Loading leaderboard data...
            </div>
          ) : (
            topTeams.map((team, index) => (
              <LeaderBox
                key={`${team.name}-${index}`}
                teamName={team.name}
                teamPoints={team.tpoints}
                ctfsSolved={team.tpoints}
                number={index + 1}
              />
            ))
          )}
        </div>

        {error && <div className="mb-4 text-center text-red-500">{error}</div>}

        {/* full leaderboard */}
        <LeaderEntry apiTeams={transformedTeams} />
      </div>
    </div>
  )
}

export default Leaderboard
