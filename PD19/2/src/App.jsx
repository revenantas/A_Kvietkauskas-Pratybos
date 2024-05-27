import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   
        <button onClick={() => setCount((count) => count + 1)}>
         keiciasi skaicius ant paspaudimo {count}
        </button>      
  )
}

export default App
