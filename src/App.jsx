import './App.css'
import { WeatherProvider } from './contexts/WeatherContext'
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay'

function App() {

  return (
    <WeatherProvider>
      <WeatherDisplay />
    </WeatherProvider>
  )
}

export default App
