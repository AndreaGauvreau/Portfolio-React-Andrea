import {ArrowBackIcon, ArrowDownIcon} from '@chakra-ui/icons'
import {Badge, Box, Button, Flex, Heading, Image, Text} from '@chakra-ui/react'
import React, {useContext, useEffect, useRef, useState} from 'react'
import {Link, useLocation, useParams} from 'react-router-dom'
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
  const location = useLocation()
  const badgeRef = useRef(null)

  useEffect(() => {
    if (location.hash && badgeRef.current) {
      badgeRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }, [location.hash])
  return (
    <Box
      id="backgroundGradient"
      w={'100%'}
      padding={3}
      background={`linear-gradient(-45deg, ${projet.color1}, ${projet.color2},${projet.color1}, ${projet.color2})`}
      mawH={'100vh'}
    >
      <Menu color1={projet.color1} color2={projet.color2} blur={0} />
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
        overflowX={'hidden'}
      >
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
            w={{base: '90vw', md: '90vw', lg: '100%'}}
          >
            <Flex gap={2}>
              <Link
                to={'/#projets'}
                onMouseLeave={handleMouseLeave}
                onClick={handleMouseLeave}
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
              <Link
                to={'#badge'}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseClick}
                onClick={handleMouseLeave}
              >
                <Button
                  bgColor={projet.color1}
                  color={'white'}
                  leftIcon={<ArrowDownIcon />}
                  cursor={'none'}
                  className={'badge'}
                  ref={badgeRef}
                >
                  Découvrir
                </Button>
              </Link>
            </Flex>
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
                w={'75%'}
                ml={'auto'}
                mr={'auto'}
              >
                {projet.description}
              </Text>
            </motion.div>
          </Flex>
          <ImageProject image={projet.image} scale={scaleValue} />
        </Flex>
        <Flex
          minH={'20vh'}
          w={'100vw'}
          flexDirection={'row'}
          justifyContent="center"
          gap={2}
          alignItems={'center'}
        >
          {projet.categories.map((e, index) => {
            return (
              <Badge
                variant="subtle"
                colorScheme={projet.color1}
                key={index}
                backgroundColor={projet.color1}
                color={'white'}
                p={1}
                borderRadius={5}
              >
                {e}
              </Badge>
            )
          })}
        </Flex>
        <Flex
          minH={'100vh'}
          w={'100vw'}
          flexDirection={'row'}
          justifyContent="center"
          alignItems={'center'}
          gap={20}
        >
          {projet.categories.map((e, index) => {
            return (
              <Badge variant="subtle" key={index} p={20}>
                {e}
              </Badge>
            )
          })}
        </Flex>
      </Flex>
    </Box>
  )
}
