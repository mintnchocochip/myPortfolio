import React from 'react'
import InputField from './InputField'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add login logic here
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full">
        <InputField
          label="Username"
          type="text"
          placeholder="Username"
          required
        />
        <InputField
          label="Password"
          type="password"
          placeholder="Password"
          required
        />
        <button
          type="submit"
          className="mt-4 w-full rounded-lg border-2 border-[#1cd41c] bg-transparent px-4 py-3 font-medium uppercase tracking-wider text-[#1cd41c] transition-all duration-300 hover:-translate-y-1 hover:transform hover:bg-[#1cd41c] hover:text-white hover:shadow-[0_0_8px_2px_rgba(28,212,28,0.8),0_0_16px_4px_rgba(28,212,28,0.6)] focus:outline-none focus:ring-2 focus:ring-[#1cd41c] focus:ring-opacity-50"
        >
          Login
        </button>
      </form>
      <button
        type="button"
        onClick={() => navigate('/signup')}
        className="mt-6 rounded-lg border-2 border-gray-400 bg-transparent px-6 py-2 font-medium uppercase tracking-wider text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:transform hover:bg-gray-400 hover:text-white hover:shadow-[0_0_8px_2px_rgba(156,156,156,0.8)] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
      >
        Sign Up
      </button>
    </>
  )
}

export default LoginForm
