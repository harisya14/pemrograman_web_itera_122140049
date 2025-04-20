import { render, screen } from '@testing-library/react'
import Stats from '../pages/Stats'

// pakai vi.mock() untuk mocking module
vi.mock('../context/BookContext', () => ({
  useBooks: () => ({
    books: [
      { id: 1, status: 'owned' },
      { id: 2, status: 'reading' },
      { id: 3, status: 'reading' }
    ]
  })
}))

describe('Stats Page', () => {
  it('menampilkan statistik yang benar', () => {
    render(<Stats />)
    expect(screen.getByText('Total Buku: 3')).toBeInTheDocument()
    expect(screen.getByText('Milik: 1')).toBeInTheDocument()
    expect(screen.getByText('Sedang Dibaca: 2')).toBeInTheDocument()
    expect(screen.getByText('Ingin Dibeli: 0')).toBeInTheDocument()
  })
})
