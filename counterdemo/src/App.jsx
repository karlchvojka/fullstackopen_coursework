// Framework Imports
import { useState } from 'react'

const App = () => {
  // Adds state to the component with the value of 0
  // Counter variable is assigned value of 0
  // setCounter is assigned a function that will modify the state
  const [ counter, setCounter ] = useState(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
      <button onClick={() => setCounter(0)}>
        zero
      </button>
    </div>
  )
}

export default App
