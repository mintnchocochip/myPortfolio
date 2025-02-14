"use client";
import React, { useState } from "react";
import AnimatedText from "./text";

const RowEntry = ({ rank, team, score, solved }) => {
  return (
    <div className="group flex w-full p-2 border-b-2 hover:bg-enigma-green border-zinc-500 px-6 text-white bg-transparent">
      <div className="w-1/6 text-left">
        <AnimatedText text={rank.toString()} className="text-white group-hover:text-black" />
      </div>
      <div className="w-1/2 text-left">
        <AnimatedText text={team} className="text-white group-hover:text-black" />
      </div>
      <div className="w-1/6 text-left">
        <AnimatedText text={score.toString()} className="text-white group-hover:text-black" />
      </div>
      <div className="w-1/6 text-left">
        <AnimatedText text={solved.toString()} className="text-white group-hover:text-black" />
      </div>
    </div>
  );
};


const LeaderEntry = () => {
  const [teams] = useState([
    { team: "gammawarriors", score: 860, solved: 6 },
    { team: "0xdeadbeef", score: 860, solved: 6 },
    { team: "ANANTos", score: 860, solved: 6 },
    { team: "RE-JUVENATE", score: 860, solved: 6 },
    { team: "Triple-A BATTERY", score: 860, solved: 6 },
    { team: "n00ch", score: 860, solved: 6 },
    { team: "poppy", score: 860, solved: 6 },
    { team: "FeatherTap", score: 860, solved: 6 },
    { team: "The_Default", score: 860, solved: 6 },
    { team: "Xenos", score: 860, solved: 6 },
  ]);

  const sortedTeams = [...teams].sort((a, b) => b.score - a.score || b.solved - a.solved);

  return (
    <div className="flex flex-col items-center mx-auto border border-zinc-500 p-0">

      <div className="flex w-full text-white text-sm bg-transparent p-2">
        <div className="w-full text-center">TYPE TEAMNAME</div>
      </div>

      <div className="flex flex-row w-full text-white text-sm bg-enigma-green border border-zinc-500 p-1 px-6">
        <div className="w-1/6"><div className="w-fit bg-black text-left ">RANK</div></div>
        <div className="w-1/2"><div className="w-fit bg-black text-left ">TEAM</div></div>
        <div className="w-1/6"><div className="w-fit bg-black text-left ">SCORE</div></div>
        <div className="w-1/6"><div className="w-fit bg-black text-left ">SOLVED</div></div>
      </div>

      <div className="w-full max-h-96 font-mono overflow-y-scroll border-t border-gray-700">
        {sortedTeams.map((team, index) => (
          <RowEntry key={index} rank={index + 1} team={team.team} score={team.score} solved={team.solved} />
        ))}
      </div>
    </div>
  );
};

export default LeaderEntry;
