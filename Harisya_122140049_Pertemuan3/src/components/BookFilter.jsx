import React from 'react'
import PropTypes from 'prop-types'

export default function BookFilter({ filter, search, onFilterChange, onSearchChange }) {
  return (
    <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
      <input
        className="flex-grow border px-3 py-2 rounded mb-4 md:mb-0"
        type="text"
        placeholder="Cari judul atau penulis..."
        value={search}
        onChange={e => onSearchChange(e.target.value)}
      />
      <select
        className="border px-3 py-2 rounded"
        value={filter}
        onChange={e => onFilterChange(e.target.value)}
      >
        <option value="">Semua Status</option>
        <option value="owned">Milik</option>
        <option value="reading">Sedang Dibaca</option>
        <option value="wantToBuy">Ingin Dibeli</option>
      </select>
    </div>
  )
}

BookFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
}
