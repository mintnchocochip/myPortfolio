import React from 'react'
import Header from '../Header'
import TeamCreation from './TeamCreation'

const TEAM_NAME = 'TEAM NAME'
const Rank = '5'
const TeamMembers = [
  'Anaanananananana',
  'Anaanananananana2',
  'Anaanananananana3'
]
const points = 9000

const TeamPage = () => {
  return (
    <div className="flex h-screen flex-col">
      <Header
        links={[
          { text: 'Leaderboard', path: '/leaderboard' },
          { text: 'Challenges', path: '/challenge' },
          { text: 'Team', path: '#' }
        ]}
      />
      <TeamCreation />
      {/* <div className="flex w-screen flex-grow justify-center font-neuebit px-16 text-8xl">
        <div className="flex h-full w-full flex-col gap-10">
          <div className="text-[1.25ch] md:text-[clamp(2ch,0.5vw,3ch)] text-left text-enigma-green leading-none">
            {TEAM_NAME}<sup className='text-white text-[clamp(2ch,0.5ch,3ch)]'>#{Rank}</sup>
          </div>
          <div className="flex h-full w-full flex-col-reverse justify-center gap-5 md:gap-10 md:flex-row py-5">
            <div className="flex w-full md:w-5/6 flex-col-reverse gap-5 md:gap-1 text-left md:flex-col">
              {TeamMembers.map((member, index) => (
                <div key={index} className="border border-white p-2 px-5 text-[1.25ch] md:text-[clamp(2ch,0.5vw,3ch)] leading-none overflow-hidden whitespace-nowrap overflow-ellipsis">
                  {member}
                </div>
              ))}
              <div className="text-[1.25ch] md:text-[clamp(2ch,0.5vw,3ch)] leading-none text-left">
                TOTAL POINTS:{' '}
                <span className="text-enigma-green">{points}</span>
              </div>
            </div>
            <div className="h-[clamp(22rem,0.1rem,25rem)] w-auto border border-white p-2 md:w-1/2"></div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default TeamPage
