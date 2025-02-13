const LeaderBox = ({ teamName, teamPoints, ctfsSolved, number }) => {
  return (
    <div className="flex mt-10">
      <div className="border-2 font-neuebit border-zinc-500 p-5 w-96 flex flex-col justify-between h-96">
        <h3 className="text-xl mb-auto">NO.{number}</h3>
        <h4 className="text-enigma-green text-left text-2xl">{teamName}</h4>
        <hr className="border-none h-0.5 bg-zinc-600 my-0" />
        <div className="flex justify-between">
            <p>TEAM POINTS</p>
            <p className="text-enigma-green">{teamPoints}</p>
        </div>
        <div className="flex justify-between">
            <p>CTFS SOLVED</p>
            <p className="text-enigma-green">{ctfsSolved}</p>
        </div>
      </div>
    </div>
  );
};
export default LeaderBox;
