// src/components/Dashboard.jsx
import React, { useState, useEffect } from 'react'
import api from '../../utils/api'
import EmployeeList from './EmployeeList'
import EmployeeForm from './EmployeeForm'
import SearchBar from './SearchBar'

const Dashboard = () => {
  const [employees, setEmployees] = useState([])
  const [filteredEmployees, setFilteredEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingEmployee, setEditingEmployee] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchEmployees()
  }, [])

  const fetchEmployees = async () => {
    setLoading(true)
    try {
      const res = await api.get('/users')
      setEmployees(res.data)
      setFilteredEmployees(res.data)
    } catch (err) {
      console.error('Error fetching employees:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
    const filtered = employees.filter((emp) =>
      emp.name.toLowerCase().includes(term.toLowerCase()) ||
      emp.email.toLowerCase().includes(term.toLowerCase())
    )
    setFilteredEmployees(filtered)
  }

  const handleAddOrUpdate = async (employee) => {
    if (employee.id) {
      // Update
      try {
        await api.put(`/users/${employee.id}`, employee)
        const updated = employees.map((emp) =>
          emp.id === employee.id ? { ...emp, ...employee } : emp
        )
        setEmployees(updated)
        setFilteredEmployees(updated) // ⬅️ add this
      } catch (err) {
        console.error('Update failed:', err)
      }
    } else {
      // Create
      try {
        const res = await api.post('/users', employee)
        const updated = [...employees, res.data]
        setEmployees(updated)
        setFilteredEmployees(updated) // ⬅️ add this
      } catch (err) {
        console.error('Add failed:', err)
      }
    }
    setEditingEmployee(null)
  }
  

  const handleDelete = async (id) => {
    try {
      await api.delete(`/users/${id}`)
      const updated = employees.filter((emp) => emp.id !== id)
      setEmployees(updated)
      setFilteredEmployees(updated) // ⬅️ add this
    } catch (err) {
      console.error('Delete failed:', err)
    }
  }
  

  return (
    <div className="p-4 max-w-3xl mx-auto relative">
      {/* Header with title and logout */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Employee Dashboard</h1>
        <button
          onClick={() => {
            localStorage.removeItem('isAuthenticated')
            localStorage.removeItem('currentUser')
            window.location.href = '/auth'
          }}
          className="cursor-pointer bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
  
      <SearchBar onSearch={handleSearch} />
      <EmployeeForm
        employee={editingEmployee}
        onSave={handleAddOrUpdate}
        onCancel={() => setEditingEmployee(null)}
      />
  
      {loading ? (
        <p>Loading...</p>
      ) : (
        <EmployeeList
          employees={filteredEmployees}
          onEdit={setEditingEmployee}
          onDelete={handleDelete}
        />
      )}
    </div>
  )
  
}

export default Dashboard
