import React from 'react';
import Header from './Header';

const TEAM_NAME = "TEAM NAME";
const Rank = "5";
const TeamMembers = [
    "Member 1",
    "Member 2",
    "Member 3"
];
const points = 9000

const TeamPage = () => {
  return (
        <div className='flex flex-col h-screen'>
            <Header
              links={[
                { text: 'Leaderboard', path: '/leaderboard' },
                { text: 'Challenges', path: '/challenge' },
                { text: 'Team', path: '#' }
              ]}
            />
            <div className="flex font-neuebit text-8xl justify-center w-screen flex-grow">
            <div className="flex flex-col w-full h-full gap-10">
              <div className="text-enigma-green text-[3ch] md:text-[5ch]">{TEAM_NAME}</div>
              <div className="flex w-full h-full justify-center gap-10 flex-col-reverse md:flex-row">
                  <div className='flex flex-col gap-1 text-left'>
                      <div className="border border-white p-2">{TeamMembers[0]}</div>
                      <div className="border border-white p-2">{TeamMembers[1]}</div>
                      <div className="border border-white p-2">{TeamMembers[2]}</div>
                      <div className="">TOTAL POINTS: <span className='text-enigma-green'>{points}</span></div>
                  </div>
                  <div className="border border-white p-2 w-full h-1/2 md:w-1/2"></div>
              </div>
            </div>
            </div>
        </div>

  )
}

export default TeamPage;