import {Box, Flex, Heading} from '@chakra-ui/react'
import React from 'react'
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
      <Flex w={'1024px'} h={'80%'}>
        <Flex w="50%">
          <Box
            h={'100%'}
            w={'100%'}
            bgColor={colorsDD.pink}
            borderRadius={20}
            p={10}
          >
            <Heading>Échangeons autour d'un café</Heading>
          </Box>
        </Flex>
        <Flex
          w="50%"
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
          gap={20}
        >
          <Flex>
            <Box w={'50%'} borderRight={'5px solid white'} h={'15vh'}></Box>
            <Box w={'50%'}></Box>
          </Flex>
          <ButtonDD text={'Contactez-moi'} link={'#'} colorThemeDD={'light'} />
          <Flex>
            <Box w={'50%'} borderRight={'5px solid white'} h={'15vh'}></Box>
            <Box w={'50%'}></Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
