import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthPage = () => {
  const navigate = useNavigate()
  const [isSignUp, setIsSignUp] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleSignup = () => {
    const users = JSON.parse(localStorage.getItem('users')) || []

    if (password !== confirmPassword) {
      return setError('Passwords do not match')
    }

    const emailExists = users.find((user) => user.email === email)
    if (emailExists) {
      return setError('Email already registered')
    }

    const newUser = { email, password }
    localStorage.setItem('users', JSON.stringify([...users, newUser]))
    localStorage.setItem('isAuthenticated', true)
    localStorage.setItem('currentUser', JSON.stringify(newUser))
    navigate('/dashboard')
  }

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || []

    const user = users.find((u) => u.email === email && u.password === password)
    if (!user) {
      return setError('Invalid email or password')
    }

    localStorage.setItem('isAuthenticated', true)
    localStorage.setItem('currentUser', JSON.stringify(user))
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4 text-center">{isSignUp ? 'Sign Up' : 'Login'}</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>

        {isSignUp && (
          <div className="mb-4">
            <label className="block mb-1">Confirm Password</label>
            <input
              type="password"
              className="w-full border px-3 py-2 rounded"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
          </div>
        )}

        <button
          className={`cursor-pointer w-full py-2 rounded ${
            isSignUp ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
          } text-white`}
          onClick={isSignUp ? handleSignup : handleLogin}
        >
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>

        <p className="text-center mt-4">
          {isSignUp ? (
            <>
              Already a member?{' '}
              <span
                onClick={() => {
                  setIsSignUp(false)
                  setError('')
                }}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Sign In
              </span>
            </>
          ) : (
            <>
              New member?{' '}
              <span
                onClick={() => {
                  setIsSignUp(true)
                  setError('')
                }}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Sign Up
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  )
}

export default AuthPage
