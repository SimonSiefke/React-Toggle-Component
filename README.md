# React Toggle Component

## Demo

[![Edit react-toggle-component-demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/n74n5ypmj)

## Installation

```bash
npm install @simon-siefke/react-toggle-component
```

## Usage

```js
import Toggle from '@simon-siefke/react-toggle-component'

const LightSwitch = () => (
  <Toggle>
    {({ on, toggle }) => (
      <p onClick={toggle}>The light is {on ? 'on' : 'off'}</p>
    )}
  </Toggle>
)
```
