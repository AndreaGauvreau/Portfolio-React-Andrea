import {ArrowBackIcon} from '@chakra-ui/icons'
import {Box, Button, Flex, Heading, Image, Text} from '@chakra-ui/react'
import React, {useContext, useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import Menu from '../Home/Menu/Menu'
import projetsdata from '../Home/Projects/floatingCards/FakeData'
import {colorsDD} from '../ui/colors/colors'
import Cursor from '../ui/cursor/Cursor'
import {CursorContext} from '../ui/cursor/CursorProvider'
import './gradient.css'
import {motion} from 'framer-motion' // Importer motion de framer-motion
import ImageProject from './ImageProject'
import Gradient from '../ui/GradientBgElems/Gradient'

export default function ProjetsId() {
  const {id} = useParams()
  const projet = projetsdata.find(projet => projet.id === parseInt(id))
  const [cursorData, setCursorData] = useContext(CursorContext)

  const [scrollY, setScrollY] = useState(1)
  const [scaleValue, setScaleValue] = useState(1)

  function handleScroll() {
    const scrollSection = document.getElementById('scrollsection')
    setScrollY(scrollSection.scrollTop)
  }

  const maxScroll = 100 - window.innerHeight

  useEffect(() => {
    const scrollSection = document.getElementById('scrollsection')
    scrollSection.addEventListener('scroll', handleScroll)
    return () => {
      scrollSection.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (scrollY === 0) {
      setScaleValue(1)
    } else if (scrollY < 0.5) {
      setScaleValue(0.5)
    } else {
      const newScaleValue = 1 + (scrollY / maxScroll) * 1.5
      setScaleValue(Math.max(0.5, newScaleValue))
    }
  }, [scrollY, maxScroll])

  // Utilisez la valeur de scrollY ici pour vos besoins

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
      background={`linear-gradient(-45deg, ${projet.color1}, ${projet.color2},${projet.color1}, ${projet.color2})`}
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
        <Menu color1={projet.color1} color2={projet.color2} />
        <Cursor />
        <Flex
          minH={'100vh'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={5}
          position="relative"
        >
          <Gradient colorG={projet.color1} versionG={1} indexG={0} />
          <Flex
            h={{base: '50vh', md: '50vh', lg: '70vh'}}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={{
              base: 'flex-start',
              md: 'flex-start',
              lg: 'center',
            }}
            gap={10}
          >
            <Link
              to={'/#projets'}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseClick}
            >
              <Button
                bgColor={projet.color1}
                color={'white'}
                leftIcon={<ArrowBackIcon />}
                cursor={'none'}
              >
                retour
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
                colorBl
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
                display="flex"
                pl={5}
                pr={5}
                textAlign="center"
                w={'70%'}
                ml={'auto'}
                mr={'auto'}
              >
                {projet.description}
              </Text>
            </motion.div>
          </Flex>
          <ImageProject image={projet.image} scale={scaleValue} />
        </Flex>
        <Flex minH={'100vh'} w={'100vw'}>
          <p>{projet.categories.join(', ')}</p>
        </Flex>
      </Flex>
    </Box>
  )
}
