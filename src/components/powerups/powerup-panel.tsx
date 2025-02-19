import React, { useState, useCallback, useMemo } from 'react'
import PixelatedDropdown from './pixelated-dropdown'
import './pixelated.css'
import AnimatedText from '../text'

// Types
interface Powerup {
  name: string
  description: string
  points: number
  count: number
}

interface LayoutProps {
  children: React.ReactNode
}

// Constants
const INITIAL_POWERUPS: Powerup[] = [
  {
    name: 'SABOTAGE',
    description: "Sabotage your rivals' defenses.",
    points: 500,
    count: 1
  },
  {
    name: 'POINT_SIPHON',
    description: 'Steal enemy points over time.',
    points: 300,
    count: 3
  },
  {
    name: 'UPGRADE',
    description: 'Upgrade your questions.',
    points: 200,
    count: 3
  }
]

const TEAM_NAME = 'TEAM-meow'

// Sub-components
const PowerupItem: React.FC<{
  powerup: Powerup
  isSelected: boolean
  onSelect: (powerup: Powerup) => void
  onHover: (powerup: Powerup | null) => void
}> = React.memo(({ powerup, isSelected, onSelect, onHover }) => (
  <div
    className={`m-5 mx-0 flex w-64 cursor-pointer items-center justify-center border-2 p-5 text-4xl transition-colors duration-200 ${
      isSelected
        ? 'bg-enigma-green text-black'
        : 'hover:bg-enigma-green hover:text-black'
    }`}
    onClick={() => onSelect(powerup)}
    onMouseEnter={() => onHover(powerup)}
    onMouseLeave={() => onHover(null)}
  >
    {powerup.name} [{powerup.count}]
  </div>
))

const PowerupDetails: React.FC<{
  selectedPowerup: Powerup | null
  hoveredPowerup: Powerup | null
}> = React.memo(({ selectedPowerup, hoveredPowerup }) => (
  <div className="m-5 flex items-center justify-center border-2 p-5 text-center">
    <div>
      <span
        className={`text-7xl ${hoveredPowerup ? 'animate-gradient' : ''} font-neuebit uppercase`}
      >
        {selectedPowerup?.name || 'Select a power-up to see what it does.'}
      </span>
      <br />
      <span className="font-neuebit text-5xl uppercase">
        {selectedPowerup?.description || ''}
      </span>
      <br />
      {selectedPowerup && (
        <span className="font-neuebit text-4xl text-enigma-green">
          (POINTS: {selectedPowerup.points})
        </span>
      )}
    </div>
  </div>
))

const PowerupActions: React.FC<{
  selectedPowerup: Powerup | null
  onUsePowerup: () => void
}> = React.memo(({ selectedPowerup, onUsePowerup }) => (
  <div className="md-0 mx-0 mt-5 flex h-full flex-col items-center justify-between border-2 p-9 pb-5 text-center">
    <div className="my-5 h-full p-2 font-neuebit">
      {selectedPowerup?.name === 'SHIELD' ? (
        <span>Team: {TEAM_NAME}</span>
      ) : (
        <>
          <span className="text-5xl">CHOOSE TEAM</span> <br />
          <PixelatedDropdown />
        </>
      )}
    </div>
    <button
      className="hover-gradient-bg my-5 border-2 p-2 font-neuebit text-5xl transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"
      onClick={onUsePowerup}
      disabled={!selectedPowerup || selectedPowerup.count === 0}
    >
      USE POWERUP
    </button>
  </div>
))

// Main Layout Component
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPowerup, setSelectedPowerup] = useState<Powerup | null>(null)
  const [hoveredPowerup, setHoveredPowerup] = useState<Powerup | null>(null)
  const [isLightMode, setIsLightMode] = useState(false)
  const [powerups, setPowerups] = useState(INITIAL_POWERUPS)

  const handleModalToggle = useCallback(() => {
    setIsModalOpen((prev) => !prev)
  }, [])

  const handleLightModeToggle = useCallback(() => {
    setIsLightMode((prev) => !prev)
  }, [])

  const handleUsePowerup = useCallback(() => {
    if (selectedPowerup?.count && selectedPowerup.count > 0) {
      setPowerups((currentPowerups) =>
        currentPowerups.map((powerup) =>
          powerup.name === selectedPowerup.name
            ? { ...powerup, count: powerup.count - 1 }
            : powerup
        )
      )
      setSelectedPowerup((prev) =>
        prev ? { ...prev, count: prev.count - 1 } : null
      )
    }
  }, [selectedPowerup])

  const points = useMemo(
    () =>
      powerups.reduce(
        (total, powerup) => total + powerup.points * powerup.count,
        0
      ),
    [powerups]
  )

  // Early return for closed modal state
  if (!isModalOpen) {
    return (
      <button
        className="rounded bg-enigma-green p-2 font-neuebit text-white transition-colors duration-200 hover:bg-enigma-yellow"
        onClick={handleModalToggle}
      >
        Powerups
      </button>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={handleModalToggle}
      />
      <div className="bg-sweetgrey relative z-50 flex h-full w-full flex-col border-2 border-white p-5">
        <header className="flex items-center justify-between gap-x-4 border-2 p-5 font-neuebit text-white">
          <div className="flex flex-col text-center">
            <h1 className="select-none text-left text-5xl text-enigma-green">
              POWER-UPS
            </h1>
            <h2 className="text-left text-2xl uppercase text-white">
              Spend your points to shield your defenses or launch a fierce
              attack on your rivals
            </h2>
          </div>
          <div className="flex flex-col text-2xl">
            <div
              className="text-shadow-glow hover:text-shadow-glow-hover cursor-pointer text-right transition-all duration-200"
              onClick={handleLightModeToggle}
            >
              {isLightMode ? "WELL WE DON'T DO THAT HERE" : 'LIGHT MODE'}
            </div>
            <div className="text-right">{points} PTS</div>
            <div className="text-right text-enigma-green">
              TEAM NAME: {TEAM_NAME}
            </div>
          </div>
        </header>

        <main className="flex flex-grow flex-col font-neuebit text-white">
          <div className="flex w-full flex-row justify-between">
            <div className="flex flex-col">
              {powerups.map((powerup) => (
                <PowerupItem
                  key={powerup.name}
                  powerup={powerup}
                  isSelected={selectedPowerup?.name === powerup.name}
                  onSelect={setSelectedPowerup}
                  onHover={setHoveredPowerup}
                />
              ))}
              {children}
            </div>

            <PowerupDetails
              selectedPowerup={selectedPowerup}
              hoveredPowerup={hoveredPowerup}
            />

            <PowerupActions
              selectedPowerup={selectedPowerup}
              onUsePowerup={handleUsePowerup}
            />
          </div>
        </main>

        <footer className="border-2 p-5 text-center font-neuebit text-white">
          © 2025 lugvitc
        </footer>
      </div>
    </div>
  )
}

export default Layout
