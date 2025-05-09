import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EmployeeForm = ({ employee, onSave, onCancel }) => {
  const [formData, setFormData] = useState({ name: '', email: '' })
  const navigate = useNavigate()
  useEffect(() => {
    if (employee) {
      setFormData({ name: employee.name, email: employee.email })
    } else {
      setFormData({ name: '', email: '' })
    }
  }, [employee])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim()) return
   
    const dataToSend = {
      ...employee,
      ...formData,
    }

    onSave(dataToSend)
    setFormData({ name: '', email: '' }) // 🔹 Clear input fields after submit
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="border px-3 py-2 w-full rounded"
        />
      </div>
      <div className="mb-2">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border px-3 py-2 w-full rounded"
        />
      </div>
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          {employee?.id ? 'Update' : 'Add'}
        </button>
        {employee && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 text-black px-4 py-2 rounded cursor-pointer"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  )
}

export default EmployeeForm
