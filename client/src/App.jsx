import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [status, setStatus] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then(setStatus)
      .catch((err) => setError(err.message))
  }, [])

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>FinalCountdown</h1>
      <p>React + Express + MySQL</p>

      <h2>Estado del backend</h2>
      {error && <p style={{ color: 'crimson' }}>Error: {error}</p>}
      {!error && !status && <p>Cargando...</p>}
      {status && (
        <ul>
          <li>API: {status.api}</li>
          <li>Base de datos: {status.database}</li>
        </ul>
      )}
    </main>
  )
}

export default App
