import React from 'react'
import { Routes, Route } from 'react-router'
import Homepage from './pages/Homepage'
import Createpage from './pages/Createpage'
import NoteDetailPage from './pages/NoteDetailPage'

const App = () => {
  return (
    <div className='relative h-full w-full'>
      <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-25 [background:radial-gradient(125%_125%_at_50%_10%,#000_55%,#00A8FF40_100%)]' />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Createpage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App