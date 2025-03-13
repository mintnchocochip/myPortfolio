import React from 'react'
import AnimatedText from './text'

const LeaderBox = ({ teamName, teamPoints, ctfsSolved = 0, number }) => {
  return (
    <div className="flex w-full flex-col justify-between border-2 border-zinc-500 p-4 font-neuebit md:h-[calc(25vw)] md:w-[calc(33vw-3vw-1vw)] md:p-5">
      <div className="mb-auto flex flex-row items-center justify-between">
        <img
          src="/icons/hud left.png"
          alt="hud left"
          className="h-4 w-4 md:h-5 md:w-5"
        />
        <h3 className="text-lg md:text-xl">
          <AnimatedText
            text={`NO.${number}`}
            className="text-2xl md:text-3xl"
          />
        </h3>
        <img
          src="/icons/hud right.png"
          alt="hud right"
          className="h-4 w-4 md:h-5 md:w-5"
        />
      </div>
      <h4 className="text-left text-xl text-enigma-green md:text-2xl">
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
