import { render, screen, fireEvent } from '@testing-library/react'
import BookForm from '../components/BookForm'

describe('BookForm Component', () => {
  
  const onSubmit = vi.fn()

  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('renders all fields and button', () => {
    render(<BookForm onSubmit={onSubmit} />)
    expect(screen.getByPlaceholderText('Judul buku')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Penulis')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByText('Tambah Buku')).toBeInTheDocument()
  })

  it('calls onSubmit with correct data', () => {
    render(<BookForm onSubmit={onSubmit} />)
    fireEvent.change(screen.getByPlaceholderText('Judul buku'), { target: { value: 'A' } })
    fireEvent.change(screen.getByPlaceholderText('Penulis'), { target: { value: 'B' } })
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'reading' } })
    fireEvent.click(screen.getByText('Tambah Buku'))

    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ title: 'A', author: 'B', status: 'reading' })
    )
  })

  it('resets title field after submit', () => {
    render(<BookForm onSubmit={onSubmit} />)
    const titleInput = screen.getByPlaceholderText('Judul buku')
    fireEvent.change(titleInput, { target: { value: 'X' } })
    fireEvent.click(screen.getByText('Tambah Buku'))
    expect(titleInput.value).toBe('')
  })
})
