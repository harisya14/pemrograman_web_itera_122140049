import { render, screen, fireEvent } from '@testing-library/react'
import BookList from "../components/BookList"


describe('BookList Component', () => {
  const books = [
    { id: 1, title: 'A', author: 'X', status: 'owned' },
    { id: 2, title: 'B', author: 'Y', status: 'reading' }
  ]
  const onEdit = vi.fn()
  const onDelete = vi.fn()

  beforeEach(() => {
    onEdit.mockReset()
    onDelete.mockReset()
  })

  it('shows empty message when no books', () => {
    render(<BookList books={[]} onEdit={onEdit} onDelete={onDelete} />)
    expect(screen.getByText('Belum ada buku.')).toBeInTheDocument()
  })

  it('renders correct number of items', () => {
    render(<BookList books={books} onEdit={onEdit} onDelete={onDelete} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })

  it('edit & delete callbacks work', () => {
    render(<BookList books={books} onEdit={onEdit} onDelete={onDelete} />)
    fireEvent.click(screen.getAllByText('Edit')[0])
    fireEvent.click(screen.getAllByText('Hapus')[1])
    expect(onEdit).toHaveBeenCalledWith(books[0])
    expect(onDelete).toHaveBeenCalledWith(2)
  })
})
