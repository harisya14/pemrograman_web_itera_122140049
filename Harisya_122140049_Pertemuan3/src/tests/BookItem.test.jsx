import { render, screen, fireEvent } from '@testing-library/react'
import BookItem from "../components/BookItem"


const book = { id: 1, title: 'T', author: 'A', status: 'owned' }

describe('BookItem', () => {
  it('shows title, author and status', () => {
    render(<BookItem book={book} onEdit={()=>{}} onDelete={()=>{}} />)
    expect(screen.getByText('T')).toBeInTheDocument()
    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.getByText('owned')).toBeInTheDocument()
  })

  it('calls onEdit and onDelete', () => {
    const e = vi.fn(), d = vi.fn()
    render(<BookItem book={book} onEdit={e} onDelete={d} />)
    fireEvent.click(screen.getByText('Edit'))
    fireEvent.click(screen.getByText('Hapus'))
    expect(e).toHaveBeenCalled()
    expect(d).toHaveBeenCalled()
  })
})
