import {useState} from 'react'
import {ReactComponent as Dribble} from './dribble-icon.svg'

export const DribbleIcon = ({color, hoverColor, width, ...rest}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Dribble
      {...rest}
      fill={isHovered ? hoverColor : color}
      width={width}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  )
}
