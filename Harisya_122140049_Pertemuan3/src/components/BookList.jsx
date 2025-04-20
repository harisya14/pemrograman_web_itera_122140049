import React from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem'

export default function BookList({ books, onEdit, onDelete }) {
  if (books.length === 0) {
    return <p className="text-center text-gray-600">Belum ada buku.</p>
  }
  return (
    <ul className="space-y-4">
      {books.map(book => (
        <BookItem
          key={book.id}
          book={book}
          onEdit={() => onEdit(book)}
          onDelete={() => onDelete(book.id)}
        />
      ))}
    </ul>
  )
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}
