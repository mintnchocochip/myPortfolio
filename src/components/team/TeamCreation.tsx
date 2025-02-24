import React, { useState, FormEvent } from 'react';
import AnimatedText from '../text';

const TeamCreation = () => {
  const [teamName, setTeamName] = useState('');
  const [teamCode, setTeamCode] = useState('');
  const [showCode, setShowCode] = useState(false);
  const [joinCode, setJoinCode] = useState('');
  const [mode, setMode] = useState<'create' | 'join'>('create');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (teamName.trim()) {
      console.log('Team name submitted:', teamName);
      const generatedCode = Math.random().toString(36).substring(2, 8).toUpperCase();
      setTeamCode(generatedCode);
      setShowCode(true);
    }
  };

  const handleJoinSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (joinCode.trim()) {
      console.log('Joining team with code:', joinCode);
    }
  };

  const switchMode = () => {
    setMode(mode === 'create' ? 'join' : 'create');
    setShowCode(false);
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center font-neuebit">
      <div className="flex flex-row">
        <div className="mb-8 text-7xl text-enigma-green">
          {mode === 'create' ? 'CREATE A TEAM' : 'JOIN A TEAM'}
        </div>
      </div>

      {!showCode && (
        mode === 'create' ? (
          <>
            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-md flex-col items-center gap-4"
            >
              <input
                type="text"
                name="team_name"
                id="tname"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="ENTER TEAM NAME TO CREATE"
                className="w-full cursor-text border border-white bg-transparent p-4 text-2xl text-white transition-colors focus:border-blue-500 focus:outline-none"
                required
              />

              <div className="mt-4 flex gap-4">
                <button
                  type="submit"
                  className="rounded-none bg-white px-8 py-3 text-2xl font-semibold text-black transition-colors hover:bg-enigma-green"
                >
                  CREATE TEAM
                </button>
                <button
                  onClick={switchMode}
                  className="rounded-none bg-white px-8 py-3 text-2xl font-semibold text-black transition-colors hover:bg-enigma-green"
                >
                  JOIN TEAM
                </button>
              </div>
            </form>
          </>
        ) : (
          <form
            onSubmit={handleJoinSubmit}
            className="flex w-full max-w-md flex-col items-center gap-4"
          >
            <input
              type="text"
              name="join_code"
              id="jcode"
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value)}
              placeholder="ENTER TEAM CODE TO JOIN"
              className="w-full border border-white bg-transparent p-4 text-2xl text-white transition-colors focus:border-blue-500 focus:outline-none"
              required
            />

            <div className="mt-4 flex gap-4">
              <button
                type="submit"
                className="bg-white px-8 py-3 text-2xl font-semibold text-black transition-colors hover:bg-enigma-green"
              >
                JOIN TEAM
              </button>
              <button
                onClick={switchMode}
                className="bg-white px-8 py-3 text-2xl font-semibold text-black transition-colors hover:bg-enigma-green hover:text-black"
              >
                CREATE TEAM
              </button>
            </div>
          </form>
        )
      )}

      {showCode && (
        <div className="mt-8 text-white">
          <AnimatedText
            text={'TEAM CREATED! YOUR TEAM CODE IS: '}
            time={0.2}
            className="mb-8 text-5xl"
          />
          <p className="mb-8 text-6xl">{teamCode}</p>
        </div>
      )}
    </div>
  );
};

export default TeamCreation;