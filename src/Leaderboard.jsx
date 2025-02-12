import Hamburger from "./components/hamburger";
import LeaderBox from "./components/LeaderBox";
import LeaderEntry from "./components/LeaderEntry";

function Leaderboard() {
  return (
    <div className="py-2 w-screen h-screen">
      <nav className="sticky top-0 flex justify-between w-full px-10 py-5 z-20">
        <div className="text-5xl font-neuebit text-left pt-1">ENIGMA</div>
        <Hamburger className="fixed right-0" />
      </nav>
      <h1 className="font-neuebit text-9xl">LEADERBOARD</h1>
      <LeaderBoxPanel />
      <LeaderEntry />
    </div>
  );
}

const LeaderBoxPanel = ({ teams = [] }) => {
  const displayTeams = teams.length > 0 ? teams : [
    { name: 'TEAM ALPHA', teamPoints: 0, ctfsSolved: 0 },
    { name: 'ONLYCTFS', teamPoints: 0, ctfsSolved: 0 },
    { name: 'ZETABYTES', teamPoints: 0, ctfsSolved: 0 }
  ];

  return (
    <div className="flex gap-4 p-4">
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
  );
};

export default Leaderboard;
