import AnimatedText from "./text";

const LeaderBox = ({ teamName, teamPoints, ctfsSolved, number }) => {
  return (
    <div className="flex">
      <div className="border-2 font-neuebit border-zinc-500 p-5 w-[calc(33vw-3vw-1vw)] flex flex-col justify-between h-[calc(25vw)]">
        <h3 className="text-xl mb-auto">
          <AnimatedText text={`NO.${number}`} className="text-xl mb-auto" />
        </h3>
        <h4 className="text-enigma-green text-left text-2xl">
          <AnimatedText text={teamName} />
        </h4>
        <hr className="border-none h-0.5 bg-zinc-600 my-0" />
        <div className="flex justify-between">
          <AnimatedText text={"TEAM POINTS"} />
          <AnimatedText
            text={teamPoints.toString()}
            className="text-enigma-green"
          />
        </div>
        <div className="flex justify-between">
          <AnimatedText text={"CTFS SOLVED"} />
          <AnimatedText
            text={ctfsSolved.toString()}
            className="text-enigma-green"
          />
        </div>
      </div>
    </div>
  );
};
export default LeaderBox;
