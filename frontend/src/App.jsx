import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <>
      <MovieCard movie={{title: "Dini's Film", release_date: "2024"}}/>
      <MovieCard movie={{title: "Roverdi's Film", release_date: "2020"}}/>
    </>
  )
}

export default App
