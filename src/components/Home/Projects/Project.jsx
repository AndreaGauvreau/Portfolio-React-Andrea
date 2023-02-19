import {Flex, Heading} from '@chakra-ui/react'
import React from 'react'
import ButtonDD from '../../ui/ButtonDD/ButtonDD'
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
        gap={5}
      >
        <Gradient />
        <Heading variant={'dd'} color={'white'} textAlign="center">
          Projets après Projets
        </Heading>
        <Heading
          variant={'dew'}
          fontSize={{base: '13px', md: '15px', lg: '20px'}}
          textAlign={'center'}
          color={'white'}
        >
          Que de beaux projets ! <br></br>
          Peut-être serez-vous le prochain ?{' '}
        </Heading>
        <CardMap />
        <Flex w={'100%'} alignItems="center" justifyContent="center">
          <ButtonDD text={'Tous les projets'} link="#" colorThemeDD={'pink'} />
        </Flex>
      </Flex>
    </Flex>
  )
}
