'use client'
import React, { useState } from 'react'
import AnimatedText from './text'

interface TeamData {
  team: string
  score: number
  solved: number
}

interface LeaderEntryProps {
  apiTeams?: TeamData[]
}

const RowEntry = ({ rank, team, score, solved }) => {
  return (
    <div className="group flex w-full border-b-2 border-zinc-500 bg-transparent p-2 px-3 text-white hover:bg-enigma-green md:px-6">
      <div className="w-1/6 text-left">
        <AnimatedText
          text={rank.toString()}
          className="text-xs text-white group-hover:text-black sm:text-sm md:text-base"
        />
      </div>
      <div className="w-1/2 text-left">
        <AnimatedText
          text={team}
          className="text-xs text-white group-hover:text-black sm:text-sm md:text-base"
        />
      </div>
      <div className="w-1/6 text-left">
        <AnimatedText
          text={score.toString()}
          className="text-xs text-white group-hover:text-black sm:text-sm md:text-base"
        />
      </div>
      <div className="w-1/6 text-left">
        <AnimatedText
          text={solved.toString()}
          className="text-xs text-white group-hover:text-black sm:text-sm md:text-base"
        />
      </div>
    </div>
  )
}

const LeaderEntry = ({ apiTeams }: LeaderEntryProps) => {
  const [searchTerm, setSearchTerm] = useState('')

  // api data else secret default data
  const [defaultTeams] = useState([
    { team: 'you', score: 860, solved: 6 },
    { team: 'have', score: 860, solved: 6 },
    { team: 'been', score: 860, solved: 6 },
    { team: 'pwned', score: 860, solved: 6 },
    { team: ' ', score: 860, solved: 6 },
    { team: 'to', score: 860, solved: 6 },
    { team: 'unpwn,', score: 860, solved: 6 },
    { team: 'solve', score: 860, solved: 6 },
    { team: 'the', score: 860, solved: 6 },
    { team: 'questions', score: 860, solved: 6 }
  ])

  const teams = apiTeams?.length ? apiTeams : defaultTeams

  const sortedTeams = [...teams].sort(
    (a, b) => b.score - a.score || b.solved - a.solved
  )

  const filteredTeams = sortedTeams.filter((team) =>
    team.team.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="mx-auto flex flex-col items-center border border-zinc-500 p-0">
      <div className="flex w-full cursor-text bg-transparent p-2 text-sm text-white">
        <input
          type="text"
          placeholder="TYPE TEAM NAME"
          className="w-full cursor-text bg-transparent text-center font-mono text-white placeholder-gray-400 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex w-full flex-row border border-zinc-500 bg-enigma-green p-1 px-3 text-xs text-white sm:text-sm md:px-6 md:text-base">
        <div className="w-1/6">
          <div className="w-fit bg-black text-left">RANK</div>
        </div>
        <div className="w-1/2">
          <div className="w-fit bg-black text-left">TEAM</div>
        </div>
        <div className="w-1/6">
          <div className="w-fit bg-black text-left">SCORE</div>
        </div>
        <div className="w-1/6">
          <div className="w-fit bg-black text-left">SOLVED</div>
        </div>
      </div>

      <div className="max-h-60 w-full overflow-y-scroll border-t border-gray-700 font-mono md:max-h-96">
        {filteredTeams.map((team) => {
          const originalRank =
            sortedTeams.findIndex((t) => t.team === team.team) + 1
          return (
            <RowEntry
              key={team.team}
              rank={originalRank}
              team={team.team}
              score={team.score}
              solved={team.solved}
            />
          )
        })}
      </div>
    </div>
  )
}

export default LeaderEntry
