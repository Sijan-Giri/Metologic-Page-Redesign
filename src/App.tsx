import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './About'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>

    <Route
  path="/"
  element={
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <Link to="/about">
        <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 px-8 py-4 text-lg font-semibold text-white shadow-xl transition duration-300 ease-out hover:scale-105 hover:shadow-2xl">
          <span className="absolute inset-0 bg-gradient-to-r from-teal-400 via-cyan-500 to-teal-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          <span className="relative z-10 transition duration-300 group-hover:scale-105">
            Switch to About Page
          </span>
        </button>
      </Link>
    </div>
  }
/>

    <Route path='/about' element={<About />}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
