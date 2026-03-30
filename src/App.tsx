import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import ArtistsPage from './pages/ArtistsPage'
import TracksPage from './pages/TracksPage'

function App() {

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/tracks" element={<TracksPage />} />
          <Route path="/artists" element={<ArtistsPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
