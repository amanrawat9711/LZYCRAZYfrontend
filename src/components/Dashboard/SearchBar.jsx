import React from 'react'

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value)
  }

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search employees..."
        className="w-full border px-3 py-2 rounded"
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBar