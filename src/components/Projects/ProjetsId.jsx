import {Box, Heading, Image} from '@chakra-ui/react'
import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import projetsdata from '../Home/Projects/floatingCards/FakeData'
import Cursor from '../ui/cursor/Cursor'
import {CursorContext} from '../ui/cursor/CursorProvider'

export default function ProjetsId() {
  const {id} = useParams()
  const projet = projetsdata.find(projet => projet.id === parseInt(id))
  const [cursorData, setCursorData] = useContext(CursorContext)

  const handleMouseClick = () => {
    setCursorData(prevState => ({
      ...prevState,
      mouseEnter: 'Lg',
      mouseText: '👆',
    }))
  }

  const handleMouseLeave = () => {
    setCursorData(prevState => ({
      ...prevState,
      mouseEnter: 'default',
      mouseText: '',
    }))
  }
  return (
    <Box bgColor="#0d0d12" padding={0} m={0} w={'100%'} overflow={'hidden'}>
      <Cursor />
      <Heading onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseClick}>
        {projet.title}
      </Heading>
      <p>{projet.description}</p>
      <p>{projet.categories.join(', ')}</p>
      <Image src={projet.image} alt={projet.title} />
    </Box>
  )
}
