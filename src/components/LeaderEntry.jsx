'use client'
import React, { useState } from 'react'
import AnimatedText from './text'

const RowEntry = ({ rank, team, score, solved }) => {
  return (
    <div className="group flex w-full border-b-2 border-zinc-500 bg-transparent p-2 px-6 text-white hover:bg-enigma-green">
      <div className="w-1/6 text-left">
        <AnimatedText
          text={rank.toString()}
          className="text-white group-hover:text-black"
        />
      </div>
      <div className="w-1/2 text-left">
        <AnimatedText
          text={team}
          className="text-white group-hover:text-black"
        />
      </div>
      <div className="w-1/6 text-left">
        <AnimatedText
          text={score.toString()}
          className="text-white group-hover:text-black"
        />
      </div>
      <div className="w-1/6 text-left">
        <AnimatedText
          text={solved.toString()}
          className="text-white group-hover:text-black"
        />
      </div>
    </div>
  )
}

const LeaderEntry = () => {
  const [teams] = useState([
    { team: 'gammawarriors', score: 860, solved: 6 },
    { team: '0xdeadbeef', score: 860, solved: 6 },
    { team: 'ANANTos', score: 860, solved: 6 },
    { team: 'RE-JUVENATE', score: 860, solved: 6 },
    { team: 'Triple-A BATTERY', score: 860, solved: 6 },
    { team: 'n00ch', score: 860, solved: 6 },
    { team: 'poppy', score: 860, solved: 6 },
    { team: 'FeatherTap', score: 860, solved: 6 },
    { team: 'The_Default', score: 860, solved: 6 },
    { team: 'Xenos', score: 860, solved: 6 }
  ])

  const sortedTeams = [...teams].sort(
    (a, b) => b.score - a.score || b.solved - a.solved
  )

  return (
    <div className="mx-auto flex flex-col items-center border border-zinc-500 p-0">
      <div className="flex w-full bg-transparent p-2 text-sm text-white">
        <div className="w-full text-center">TYPE TEAMNAME</div>
      </div>

      <div className="flex w-full flex-row border border-zinc-500 bg-enigma-green p-1 px-6 text-sm text-white">
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

      <div className="max-h-96 w-full overflow-y-scroll border-t border-gray-700 font-mono">
        {sortedTeams.map((team, index) => (
          <RowEntry
            key={index}
            rank={index + 1}
            team={team.team}
            score={team.score}
            solved={team.solved}
          />
        ))}
      </div>
    </div>
  )
}

export default LeaderEntry
