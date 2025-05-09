import React from 'react'

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  return (
    <div className="mt-4">
      {/* Table view for larger screens */}
      <div className="hidden sm:block">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
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

      {/* Card-like view for small screens */}
      <div className="sm:hidden">
        {employees.map((emp, index) => (
          <div key={index} className="bg-white p-4 my-2 border border-gray-200 rounded-lg shadow-md">
            <div className="flex justify-between">
              <div className="text-lg font-semibold">{emp.name}</div>
              <div className="flex space-x-2">
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
              </div>
            </div>
            <div className="text-gray-600">{emp.email}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EmployeeList
