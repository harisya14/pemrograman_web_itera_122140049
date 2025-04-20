import React, { useState } from 'react'
import { useBooks } from '../context/BookContext'
import useBookStats from '../hooks/useBookStats'
import BookForm from '../components/BookForm'
import BookFilter from '../components/BookFilter'
import BookList from '../components/BookList'

export default function Home() {
  const { books, dispatch } = useBooks()
  const [editing, setEditing] = useState(null)
  const [filter, setFilter] = useState('')
  const [search, setSearch] = useState('')

  const handleSubmit = book => {
    dispatch({ type: editing ? 'UPDATE_BOOK' : 'ADD_BOOK', payload: book })
    setEditing(null)
  }

  const filtered = books
    .filter(b => (filter ? b.status === filter : true))
    .filter(
      b =>
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.author.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div>
      <BookForm onSubmit={handleSubmit} editing={editing} />
      <BookFilter
        filter={filter}
        search={search}
        onFilterChange={setFilter}
        onSearchChange={setSearch}
      />
      <BookList
        books={filtered}
        onEdit={setEditing}
        onDelete={id => dispatch({ type: 'DELETE_BOOK', payload: id })}
      />
    </div>
  )
}
