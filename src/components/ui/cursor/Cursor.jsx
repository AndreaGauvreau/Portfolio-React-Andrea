import {useContext, useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import {CursorContext} from './CursorProvider'
import {colorsDD} from '../colors/colors'

export default function Cursor() {
  const [cursorData, setCursorData] = useContext(CursorContext)
  const [textCursor, setTextCursor] = useState('')
  useEffect(() => {
    const mouseMove = e => {
      setCursorData(prevState => ({
        ...prevState,
        position: {
          x: e.clientX,
          y: e.clientY,
        },
      }))
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [setCursorData])

  const variants = {
    default: {
      background: '#ffffff',
      x: cursorData.position.x - 16,
      y: cursorData.position.y - 16,
    },
    text: {
      height: 100,
      width: 100,
      background: '#ffffff',
      x: cursorData.position.x - 40,
      y: cursorData.position.y - 40,
    },
    pos: {
      height: 70,
      width: 70,
      background: '#ffffff80',
      x: cursorData.position.x - 40,
      y: cursorData.position.y - 40,
    },
    SmP: {
      height: 70,
      width: 70,
      background: colorsDD.pink,
      x: cursorData.position.x - 40,
      y: cursorData.position.y - 40,
    },
  }

  useEffect(() => {
    if (cursorData.mouseEnter === 'Lg') {
      setCursorData(prevState => ({
        ...prevState,
        variant: 'text',
        orientation: 0,
      }))
    } else if (cursorData.mouseEnter === 'Sm') {
      setCursorData(prevState => ({
        ...prevState,
        variant: 'pos',
        orientation: 0,
      }))
    } else if (cursorData.mouseEnter === 'SmP') {
      setCursorData(prevState => ({
        ...prevState,
        variant: 'SmP',
        orientation: 0,
      }))
    } else {
      setCursorData(prevState => ({
        ...prevState,
        variant: 'default',
        text: '',
        orientation: 90,
      }))
    }

    setTextCursor(cursorData.mouseText)
  }, [cursorData.mouseEnter, setCursorData])

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={cursorData.variant}
    >
      <span style={{transform: `rotate(${cursorData.orientation}deg)`}}>
        {textCursor}
      </span>
    </motion.div>
  )
}