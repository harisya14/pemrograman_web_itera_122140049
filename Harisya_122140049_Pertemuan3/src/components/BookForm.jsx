import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export default function BookForm({ onSubmit, editing }) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [status, setStatus] = useState('owned')

  useEffect(() => {
    if (editing) {
      setTitle(editing.title)
      setAuthor(editing.author)
      setStatus(editing.status)
    }
  }, [editing])

  const handle = e => {
    e.preventDefault()
    if (!title.trim() || !author.trim()) return
    const book = {
      id: editing ? editing.id : Date.now(),
      title: title.trim(),
      author: author.trim(),
      status,
    }
    onSubmit(book)
    if (!editing) {
      setTitle('')
      setAuthor('')
      setStatus('owned')
    }
  }

  return (
    <form onSubmit={handle} className="mb-6 space-y-3">
      <div>
        <input
          className="w-full border px-3 py-2 rounded"
          type="text"
          placeholder="Judul buku"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          className="w-full border px-3 py-2 rounded"
          type="text"
          placeholder="Penulis"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <select
          className="w-full border px-3 py-2 rounded"
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          <option value="owned">Milik</option>
          <option value="reading">Sedang Dibaca</option>
          <option value="wantToBuy">Ingin Dibeli</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {editing ? 'Update Buku' : 'Tambah Buku'}
      </button>
    </form>
  )
}

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  editing: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    status: PropTypes.string,
  }),
}
