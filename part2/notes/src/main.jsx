// Framework Imports
import ReactDOM from 'react-dom/client'

// Library Imports
import axios from 'axios'

// Component Imports
import App from './App'

axios
  .get('http://localhost:3001/notes')
  .then(response => {
    const notes = response.data
    ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
  })
