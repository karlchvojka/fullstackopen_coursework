// Framework Imports
import { useState } from 'react'

const Button = ({ onClick, text}) => <button onClick={onClick}>{text}</button>
const Display = ({ counter }) => <div>{counter}</div>

const App = () => {
  // Adds state to the component with the value of 0
  // Counter variable is assigned value of 0
  // setCounter is assigned a function that will modify the state
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />
      <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />
      <Button
        onClick={decreaseByOne}
        text='minus'
      />
    </div>
  )
}

export default App
