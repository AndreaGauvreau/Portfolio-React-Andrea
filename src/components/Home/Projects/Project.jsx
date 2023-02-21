import {Flex, Heading} from '@chakra-ui/react'
import React from 'react'
import ButtonDD from '../../ui/ButtonDD/ButtonDD'
import {colorsDD} from '../../ui/colors/colors'
import Gradient from '../../ui/GradientBgElems/Gradient'
import CardMap from './floatingCards/CardsContent'

export default function Project() {
  return (
    <Flex
      minH="100vh"
      w="100%"
      m="0"
      p={{base: '20px', md: '10px', lg: '0px'}}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      bgSize="cover"
      boxSizing="border-box"
      position={'relative'}
    >
      <Flex
        w={{base: '100%', md: '100%', lg: '1024px'}}
        flexDirection={{base: 'column', md: 'column', lg: 'column'}}
        gap={0}
      >
        <Gradient colorG={colorsDD.pink} versionG={1} />
        <Heading
          variant={'dew'}
          color={'white'}
          textAlign="center"
          fontSize={{base: '27px', md: '30px', lg: '40px'}}
        >
          Projets après Projets
        </Heading>
        <Heading
          variant={'dd'}
          fontSize={{base: '13px', md: '15px', lg: '18px'}}
          textAlign={'center'}
          color={'white'}
        >
          Que de beaux projets ! <br></br>
          Peut-être serez-vous le prochain ?
        </Heading>
        <CardMap />
        <Flex w={'100%'} alignItems="center" justifyContent="center">
          <ButtonDD
            text={'Tous les projets'}
            link="/projets"
            colorThemeDD={'pink'}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
