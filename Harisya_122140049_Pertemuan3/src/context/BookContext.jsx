import React, { createContext, useContext, useReducer } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const BookContext = createContext()

const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload]
    case 'UPDATE_BOOK':
      return state.map(b => (b.id === action.payload.id ? action.payload : b))
    case 'DELETE_BOOK':
      return state.filter(b => b.id !== action.payload)
    default:
      return state
  }
}

export function BookProvider({ children }) {
  const [stored, setStored] = useLocalStorage('books', [])
  const [books, dispatch] = useReducer(bookReducer, stored)

  // sync ke localStorage
  React.useEffect(() => {
    setStored(books)
  }, [books, setStored])

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  )
}

export function useBooks() {
  const ctx = useContext(BookContext)
  if (!ctx) throw new Error('useBooks must be inside BookProvider')
  return ctx
}
