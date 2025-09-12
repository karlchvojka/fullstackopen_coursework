// Framework Imports
import { useState } from 'react'

const Button = (props) => {
  <button onClick={props.onClick}>
    {props.text}
  </button>
}

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => () => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  // DONT DO THIS
  const Display = props => <div>{props.value}</div>

  return (
    <div>
      <Display value={value} />
      <Button onClick={() => setToValue(1000)} text="thousand" />
      <Button onClick={() => setToValue(0)} text="thousand" />
      <Button onClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}

export default App