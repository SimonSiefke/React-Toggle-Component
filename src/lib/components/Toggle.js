import useToggle from 'react-use-toggle'

const Toggle = ({children}) => {
  const [on, toggle] = useToggle(false)
  return children({on,toggle})
}

export default Toggle;
