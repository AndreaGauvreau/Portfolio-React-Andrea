import {ArrowBackIcon} from '@chakra-ui/icons'
import {Box, Button, Flex, Heading, Image, Text} from '@chakra-ui/react'
import React, {useContext} from 'react'
import {Link, useParams} from 'react-router-dom'
import Menu from '../Home/Menu/Menu'
import projetsdata from '../Home/Projects/floatingCards/FakeData'
import {colorsDD} from '../ui/colors/colors'
import Cursor from '../ui/cursor/Cursor'
import {CursorContext} from '../ui/cursor/CursorProvider'
import './gradient.css'
import {motion} from 'framer-motion' // Importer motion de framer-motion

export default function ProjetsId() {
  const {id} = useParams()
  const projet = projetsdata.find(projet => projet.id === parseInt(id))
  const [cursorData, setCursorData] = useContext(CursorContext)

  const handleMouseClick = () => {
    setCursorData(prevState => ({
      ...prevState,
      mouseEnter: 'SmFull',
      mouseText: '⬅️',
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
    <Box
      id="backgroundGradient"
      w={'100%'}
      padding={3}
      background={`linear-gradient(-45deg, ${colorsDD.pink}, ${colorsDD.green},${colorsDD.pink}, ${colorsDD.green})`}
      maxH={'100vh'}
    >
      <Flex
        id={'scrollsection'}
        bg={colorsDD.bgcolor}
        m={0}
        w={'100%'}
        flexDirection={'column'}
        alignItems={'center'}
        maxH={'calc(100vh - 23px)'}
        borderRadius={20}
        overflow={'scroll'}
      >
        <Menu />
        <Cursor />

        <Flex
          minH={'100vh'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'flex-start'}
          gap={5}
        >
          <Link
            to={`/`}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseClick}
          >
            <Button
              bgColor={colorsDD.pink20}
              color={colorsDD.pink}
              leftIcon={<ArrowBackIcon />}
              cursor={'none'}
            >
              ok
            </Button>
          </Link>
          <motion.div // Encapsuler les éléments dans une div avec motion pour ajouter l'animation
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.3, duration: 0.5}}
          >
            <Heading
              variant={'dew'}
              color={'white'}
              fontSize={{base: '27px', md: '30px', lg: '40px'}}
            >
              {projet.title}
            </Heading>
          </motion.div>
          <motion.div // Encapsuler les éléments dans une div avec motion pour ajouter l'animation
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.4, duration: 0.5}}
          >
            <Text
              color={'white'}
              display={{base: 'none', md: 'flex', lg: 'flex'}}
            >
              {projet.description}
            </Text>{' '}
          </motion.div>
        </Flex>
        <p>{projet.categories.join(', ')}</p>
        <Image src={projet.image} alt={projet.title} />
      </Flex>
    </Box>
  )
}
