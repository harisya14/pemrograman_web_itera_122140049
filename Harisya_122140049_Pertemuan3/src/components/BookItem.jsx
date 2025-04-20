import React from 'react'
import PropTypes from 'prop-types'

export default function BookItem({ book, onEdit, onDelete }) {
  const statusColors = {
    owned: 'bg-green-200 text-green-800',
    reading: 'bg-yellow-200 text-yellow-800',
    wantToBuy: 'bg-blue-200 text-blue-800',
  }
  return (
    <li className="flex justify-between items-center border px-4 py-3 rounded shadow">
      <div>
        <h3 className="font-semibold">{book.title}</h3>
        <p className="text-sm text-gray-600">{book.author}</p>
      </div>
      <div className="flex items-center space-x-3">
        <span className={`px-2 py-1 rounded text-xs ${statusColors[book.status]}`}>{book.status}</span>
        <button onClick={onEdit} className="text-blue-600 hover:underline text-sm">Edit</button>
        <button onClick={onDelete} className="text-red-600 hover:underline text-sm">Hapus</button>
      </div>
    </li>
  )
}

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}
