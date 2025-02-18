import Hamburger from './components/hamburger'
import LeaderBox from './components/LeaderBox'
import LeaderEntry from './components/LeaderEntry'

function Leaderboard() {
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
        <LeaderBoxPanel />
        <LeaderEntry />
      </div>
    </div>
  )
}

const LeaderBoxPanel = ({ teams = [] }) => {
  const displayTeams =
    teams.length > 0
      ? teams
      : [
          { name: 'TEAM ALPHA', teamPoints: 0, ctfsSolved: 0 },
          { name: 'ONLYCTFS', teamPoints: 0, ctfsSolved: 0 },
          { name: 'ZETABYTES', teamPoints: 0, ctfsSolved: 0 }
        ]

  return (
    <div className="mb-[calc(1.5vw)] flex w-full gap-[calc(1.5vw)]">
      {displayTeams.map((team, index) => (
        <LeaderBox
          key={team.name}
          teamName={team.name}
          teamPoints={team.teamPoints}
          ctfsSolved={team.ctfsSolved}
          number={index + 1}
        />
      ))}
    </div>
  )
}

export default Leaderboard
