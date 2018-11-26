import React from 'react'
import Toggle from '../lib'

const App = () => (
  <Toggle>
    {({ on, toggle }) => (
      <p onClick={toggle}>The light is {on ? 'on' : 'off'}</p>
    )}
  </Toggle>
)

export default App
