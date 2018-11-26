import React from 'react'
import Toggle from '../lib'

const App = () => (
  <div>
    <Toggle>
      {({ on, toggle }) => (
        <p onClick={toggle}>The light is {on ? 'on' : 'off'}</p>
      )}
    </Toggle>
  </div>
)

export default App
