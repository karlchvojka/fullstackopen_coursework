// Framework Imports
import { useState } from 'react'

const App = () => {
  // Adds state to the component with the value of 0
  // Counter variable is assigned value of 0
  // setCounter is assigned a function that will modify the state
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)

  const setToZero = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}>
        zero
      </button>
    </div>
  )
}

export default App
