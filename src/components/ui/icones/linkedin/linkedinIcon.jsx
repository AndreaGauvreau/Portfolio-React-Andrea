import {useState} from 'react'
import {ReactComponent as LinkdIcon} from './andrea-linkedin.svg'

export const LinkdinIcon = ({color, hoverColor, width, ...rest}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <LinkdIcon
      {...rest}
      fill={isHovered ? hoverColor : color}
      width={width}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  )
}
