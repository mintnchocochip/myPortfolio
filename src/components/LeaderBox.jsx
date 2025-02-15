import AnimatedText from './text'

const LeaderBox = ({ teamName, teamPoints, ctfsSolved, number }) => {
  return (
    <div className="flex h-[calc(25vw)] w-[calc(33vw-3vw-1vw)] flex-col justify-between border-2 border-zinc-500 p-5 font-neuebit">
      <div className="mb-auto flex flex-row items-center justify-between">
        <img
          src="public/icons/hud left.png"
          alt="hud left"
          className="h-5 w-5"
        />
        <h3 className="text-xl">
          <AnimatedText text={`NO.${number}`} className="text-3xl" />
        </h3>
        <img
          src="public/icons/hud right.png"
          alt="hud right"
          className="h-5 w-5"
        />
      </div>
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
