const LeaderBox = ({ teamName, teamPoints, ctfsSolved, number }) => {
  return (
    <div className="border border-green-500 bg-black text-green-500 w-64 h-96 p-4 relative">
      <div className="absolute top-4 right-4 text-white">NO.{number}</div>
      <div className="h-full flex flex-col justify-between">
        <div className="text-center text-2xl font-mono uppercase">
          {teamName}
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>TEAM POINTS</span>
            <span>{teamPoints}</span>
          </div>
          <div className="flex justify-between">
            <span>CTFS SOLVED</span>
            <span>{ctfsSolved}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeaderBox;
