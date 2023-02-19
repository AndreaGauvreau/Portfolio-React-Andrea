import {ArrowBackIcon, ArrowForwardIcon} from '@chakra-ui/icons'
import {Flex, IconButton} from '@chakra-ui/react'
import React, {useState, useCallback, useEffect} from 'react'
import Cards from './CardBox'
import sports from './FakeData'

export default function CardMap() {
  const [mainIndex, setMainIndex] = useState(0)
  const lengthArray = sports.length

  const navigateTo = useCallback(
    index => {
      const currentIndex = sports.findIndex(
        sport => sport.id === sports[mainIndex].id,
      )
      const diff = index - currentIndex
      const newIndex = (mainIndex + diff + sports.length) % sports.length
      setMainIndex(newIndex)
    },
    [mainIndex],
  )

  const previousSport = useCallback(() => {
    navigateTo(mainIndex + 1)
  }, [mainIndex, navigateTo])

  const nextSport = useCallback(() => {
    navigateTo(mainIndex - 1)
  }, [mainIndex, navigateTo])

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
        previousSport()
      } else if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
        nextSport()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [previousSport, nextSport])

  return (
    <Flex flexDirection={'column'} minH={'100vh'} position="relative">
      <Flex position={'relative'}>
        {sports.map((sport, index) => (
          <Cards
            key={index}
            datas={sport}
            currentIndex={mainIndex}
            length={lengthArray}
          />
        ))}
      </Flex>
      <IconButton
        position={'absolute'}
        colorScheme="dd"
        aria-label="Previous"
        onClick={previousSport}
        icon={<ArrowBackIcon />}
        top={'50vh'}
        left={'10%'}
      />
      <IconButton
        position={'absolute'}
        right={'10%'}
        top={'50vh'}
        colorScheme="dd"
        aria-label="Next"
        onClick={nextSport}
        icon={<ArrowForwardIcon />}
      />
    </Flex>
  )
}
