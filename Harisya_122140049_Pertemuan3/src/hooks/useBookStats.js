import { useMemo } from 'react'

export default function useBookStats(books) {
  return useMemo(() => {
    const total = books.length
    const byStatus = books.reduce(
      (acc, b) => {
        acc[b.status] = (acc[b.status] || 0) + 1
        return acc
      },
      { owned: 0, reading: 0, wantToBuy: 0 }
    )
    return { total, ...byStatus }
  }, [books])
}
