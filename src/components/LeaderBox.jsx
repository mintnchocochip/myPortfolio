import AnimatedText from './text'

const LeaderBox = ({ teamName, teamPoints, ctfsSolved, number }) => {
  return (
    <div className="flex h-[calc(25vw)] w-[calc(33vw-3vw-1vw)] flex-col justify-between border-2 border-zinc-500 p-5 font-neuebit">
      <h3 className="mb-auto text-xl">
        <AnimatedText text={`NO.${number}`} className="mb-auto text-xl" />
      </h3>
      <h4 className="text-left text-2xl text-enigma-green">
        <AnimatedText text={teamName} />
      </h4>
      <hr className="my-0 h-0.5 border-none bg-zinc-600" />
      <div className="flex justify-between">
        <AnimatedText text={'TEAM POINTS'} />
        <AnimatedText
          text={teamPoints.toString()}
          className="text-enigma-green"
        />
      </div>
      <div className="flex justify-between">
        <AnimatedText text={'CTFS SOLVED'} />
        <AnimatedText
          text={ctfsSolved.toString()}
          className="text-enigma-green"
        />
      </div>
    </div>
  )
}
export default LeaderBox
