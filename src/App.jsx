import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import AuthPage from './components/Auth/AuthPage.jsx'
import Dashboard from './components/Dashboard/Dashboards.jsx'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated') === 'true'
    setIsAuthenticated(auth)
  }, [location.pathname]) // Check auth status on every route change

  return (
    <Routes>
      <Route
        path="/auth"
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <AuthPage />}
      />
      <Route
        path="/dashboard"
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/auth" />}
      />
      <Route
        path="*"
        element={<Navigate to={isAuthenticated ? '/dashboard' : '/auth'} />}
      />
    </Routes>
  )
}

export default App
