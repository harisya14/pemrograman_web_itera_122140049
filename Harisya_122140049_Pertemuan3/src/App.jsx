import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { BookProvider } from './context/BookContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Stats from './pages/Stats'

function App() {
  return (
    <BookProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </main>
      </div>
    </BookProvider>
  )
}

export default App
