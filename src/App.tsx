import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import ArtistsPage from './pages/ArtistsPage'
import TracksPage from './pages/TracksPage'
import NavBar from './components/NavBar'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/tracks" element={<TracksPage />} />
          <Route path="/artists" element={<ArtistsPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
