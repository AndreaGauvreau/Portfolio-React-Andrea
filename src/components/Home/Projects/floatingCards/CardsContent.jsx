import {ArrowBackIcon, ArrowForwardIcon} from '@chakra-ui/icons'
import {Flex, IconButton} from '@chakra-ui/react'
import React, {useState, useCallback, useEffect} from 'react'
import {colorsDD} from '../../../ui/colors/colors'
import Cards from './CardBox'
import projetsdatas from './FakeData.jsx'

export default function CardMap() {
  const [mainIndex, setMainIndex] = useState(0)
  const lengthArray = projetsdatas.length

  const navigateTo = useCallback(
    index => {
      const currentIndex = projetsdatas.findIndex(
        projet => projet.id === projetsdatas[mainIndex].id,
      )
      const diff = index - currentIndex
      const newIndex =
        (mainIndex + diff + projetsdatas.length) % projetsdatas.length
      setMainIndex(newIndex)
    },
    [mainIndex],
  )

  const previousprojet = useCallback(() => {
    navigateTo(mainIndex + 1)
  }, [mainIndex, navigateTo])

  const nextprojet = useCallback(() => {
    navigateTo(mainIndex - 1)
  }, [mainIndex, navigateTo])

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
        previousprojet()
      } else if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
        nextprojet()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [previousprojet, nextprojet])

  return (
    <Flex
      flexDirection={'column'}
      h={{base: '50vh', md: '70vh', lg: '70vh'}}
      position="relative"
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Flex position={'relative'}>
        {projetsdatas.map((projet, index) => (
          <Cards
            key={index}
            datas={projet}
            currentIndex={mainIndex}
            length={lengthArray}
          />
        ))}
      </Flex>
      <IconButton
        position={'absolute'}
        bgColor={{
          base: colorsDD.pink,
          md: colorsDD.pink,
          lg: colorsDD.pink20,
        }}
        _hover={{bgColor: colorsDD.pink}}
        color="white"
        aria-label="Previous"
        onClick={previousprojet}
        icon={<ArrowBackIcon />}
        top={{base: '25vh', md: '35vh', lg: '35vh'}}
        left={'10px'}
        zIndex={'10'}
      />
      <IconButton
        position={'absolute'}
        bgColor={{
          base: colorsDD.pink,
          md: colorsDD.pink,
          lg: colorsDD.pink20,
        }}
        _hover={{bgColor: colorsDD.pink}}
        right={'10px'}
        top={{base: '25vh', md: '35vh', lg: '35vh'}}
        zIndex={'10'}
        color="white"
        aria-label="Next"
        onClick={nextprojet}
        icon={<ArrowForwardIcon />}
      />
    </Flex>
  )
}
