const LeaderBox = ({ teamName, teamPoints, ctfsSolved, number }) => {
  return (
    <div className="flex justify-around mt-10">
      <div className="border-2 border-white p-5 w-96 bg-black flex flex-col justify-between h-96">
        <h3 className="text-sm mb-auto">NO.{number}</h3>
        <h4 className="text-lime-500">{teamName}</h4>
        <hr className="border-none h-0.5 bg-lime-500 mx-2.5 my-0" />
        <div className="flex justify-between">
            <p>TEAM POINTS</p>
            <p>{teamPoints}</p>
        </div>
        <div className="flex justify-between">
            <p>CTFS SOLVED</p>
            <p>{ctfsSolved}</p>
        </div>
      </div>
    </div>
  );
};
export default LeaderBox;
