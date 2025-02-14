import React from 'react'
import SignUpForm from './SignUpForm'
import { Terminal } from 'lucide-react'

const SignUpPage = () => {
  return (
    <div className="flex min-h-screen min-w-[320px] items-center justify-center bg-[#111111] font-['Orbitron'] text-white">
      <div className="relative flex w-[350px] animate-border flex-col items-center rounded-lg border-2 border-transparent bg-[#1a1a1a] p-8">
        <div className="mb-6 flex animate-float items-center gap-2">
          <Terminal className="h-8 w-8 text-[#1cd41c]" />
          <h2 className="animate-glow text-3xl font-bold tracking-wider text-[#1cd41c]">
            Enigma25
          </h2>
        </div>
        <SignUpForm />
      </div>
    </div>
  )
}

export default SignUpPage
