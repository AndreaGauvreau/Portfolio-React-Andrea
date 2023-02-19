import {Box, Flex, Heading} from '@chakra-ui/react'
import React from 'react'
import Canvas3d from '../Main/3drocket/Canva'
import ButtonDD from '../../ui/ButtonDD/ButtonDD'
import {colorsDD} from '../../ui/colors/colors'

export default function Contact() {
  return (
    <Flex
      h="100vh"
      justifyContent={'center'}
      alignItems={'center'}
      w={'100%'}
      position={'relative'}
    >
      <Flex
        w={'1024px'}
        h={'80%'}
        flexDirection={{base: 'column', md: 'row', lg: 'row'}}
        p={5}
        gap={10}
      >
        <Flex w={{base: '100%', md: '50%', lg: '50%'}}>
          <Box
            minH={'70vh'}
            w={'100%'}
            bgColor={colorsDD.pink}
            borderRadius={20}
            p={10}
          >
            <Heading>Échangeons autour d'un café</Heading>
            <Flex
              w={'100%'}
              alignItems="center"
              justifyContent={'center'}
              h={'50vh'}
            >
              <Canvas3d />
            </Flex>{' '}
          </Box>
        </Flex>
        <Flex
          w={{base: '100%', md: '50%', lg: '50%'}}
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
          gap={20}
        >
          <Flex display={{base: 'none', md: 'none', lg: 'flex'}}>
            <Box w={'50%'} borderRight={'5px solid white'} h={'15vh'}></Box>
            <Box w={'50%'}></Box>
          </Flex>
          <ButtonDD text={'Contactez-moi'} link={'#'} colorThemeDD={'light'} />
          <Flex display={{base: 'none', md: 'none', lg: 'flex'}}>
            <Box w={'50%'} borderRight={'5px solid white'} h={'15vh'}></Box>
            <Box w={'50%'}></Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
