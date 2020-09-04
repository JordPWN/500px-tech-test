import React from 'react'
import ReactDOM from 'react-dom'
import Main from './views/Main'

require('dotenv').config()

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
)
