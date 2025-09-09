// Framework Imports
import { useState } from 'react'

const App = () => {
  // Adds state to the component with the value of 0
  // Counter variable is assigned value of 0
  // setCounter is assigned a function that will modify the state
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    // Updates the state by adding 1 to it
    () => setCounter(counter + 1),
    1000
  )

  return (
    <div>{counter}</div>
  )
}

export default App
