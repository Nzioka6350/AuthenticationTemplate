import { useState } from 'react'
import './App.css'
import LoginRegister from './components/LoginRegister'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <LoginRegister/>
    </>
  )
}

export default App
