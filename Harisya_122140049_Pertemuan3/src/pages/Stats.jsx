import React from 'react'
import { useBooks } from '../context/BookContext'
import useBookStats from '../hooks/useBookStats'

export default function Stats() {
  const { books } = useBooks()
  const stats = useBookStats(books)

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Statistik Buku</h2>
      <p>Total Buku: {stats.total}</p>
      <p>Milik: {stats.owned}</p>
      <p>Sedang Dibaca: {stats.reading}</p>
      <p>Ingin Dibeli: {stats.wantToBuy}</p>
    </div>
  )
}
