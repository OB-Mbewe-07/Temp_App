import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(0);
  return(
    <div>
      <input type="text" value={value}/>
      <input type="text" />
    </div>
  )
}

export default App
