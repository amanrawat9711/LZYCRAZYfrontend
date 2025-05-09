import React from 'react'

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp,index) => (
            
            <tr key={index}>
              <td className="border px-4 py-2">{emp.name}</td>
              <td className="border px-4 py-2">{emp.email}</td>
              <td className="border px-4 py-2 space-x-2">
                <button
                  className="cursor-pointer bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500"
                  onClick={() => onEdit(emp)}
                >
                  Edit
                </button>
                <button
                  className="cursor-pointer bg-red-600 px-2 py-1 rounded text-white hover:bg-red-700"
                  onClick={() => onDelete(emp.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeList