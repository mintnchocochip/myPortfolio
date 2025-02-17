import React from 'react'
import Header from '../Header'
import TeamCreation from './TeamCreation'

const TEAM_NAME = 'TEAM NAME TEAM NAME'
const Rank = '5'
const TeamMembers = [
  'Anaanananananana',
  'Anaanananananana2',
  'Anaanananananana3'
]
const points = 9000

const TeamPage = () => {
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
            {TEAM_NAME}
            <sup className="text-[clamp(2ch,0.5ch,3ch)] text-white">
              #{Rank}
            </sup>
          </div>
          <div className="flex h-full w-full flex-col-reverse justify-center gap-5 py-5 md:flex-row md:gap-10">
            <div className="flex w-full flex-col-reverse gap-5 text-left md:w-5/6 md:flex-col md:gap-10">
              {TeamMembers.map((member, index) => (
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
