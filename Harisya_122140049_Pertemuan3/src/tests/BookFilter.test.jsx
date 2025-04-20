import { render, screen, fireEvent } from '@testing-library/react'
import BookFilter from '../components/BookFilter'

describe('BookFilter', () => {
  it('changes search and filter', () => {
    const fs = vi.fn(), ss = vi.fn()
    render(<BookFilter filter="" search="" onFilterChange={fs} onSearchChange={ss} />)
    fireEvent.change(screen.getByPlaceholderText(/cari/i), { target: { value: 'xyz' } })
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'reading' } })
    expect(ss).toHaveBeenCalledWith('xyz')
    expect(fs).toHaveBeenCalledWith('reading')
  })
})
