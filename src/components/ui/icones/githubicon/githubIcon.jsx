import {useState} from 'react'
import {ReactComponent as GithubIcon} from './icone-github-andrea-1.svg'

export const GithIcon = ({color, hoverColor, width, ...rest}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <GithubIcon
      {...rest}
      fill={isHovered ? hoverColor : color}
      width={width}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  )
}
