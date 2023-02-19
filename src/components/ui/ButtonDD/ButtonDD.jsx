import React, {useState} from 'react'
import {useEffect} from 'react'
import {colorsDD} from '../colors/colors'
import './Button.css'

export default function ButtonDD({text, link, colorThemeDD}) {
  const [color, setColor] = useState('white')
  const [bgColor, setBgColor] = useState('pink')

  useEffect(() => {
    if (colorThemeDD === 'pink') {
      setColor(colorsDD.bgcolor)
      setBgColor(colorsDD.pink)
    } else if (colorThemeDD === 'green') {
      setColor(colorsDD.bgcolor)
      setBgColor(colorsDD.green)
    } else if (colorThemeDD === 'light') {
      setColor(colorsDD.bgcolor)
      setBgColor('white')
    } else {
      setColor('white')
      setBgColor('gray')
    }
  }, [colorThemeDD])

  return (
    <a id="linkofbutton" href={link}>
      <button
        id="actionBtn"
        style={{backgroundColor: `${bgColor}`, color: `${color}`}}
      >
        {text}
      </button>
      <div id="btnTopLeft" style={{borderLeftColor: `${bgColor}`}}></div>
      <div id="btnBotRight" style={{borderLeftColor: `${bgColor}`}}></div>
    </a>
  )
}
