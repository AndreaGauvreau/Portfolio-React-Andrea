import {Flex, Heading} from '@chakra-ui/react'
import React from 'react'
import Canvas3d from './3drocket/Canva'
import Prenom from './Prenom'

export default function Main() {
  return (
    <Flex
      h="100vh"
      w="100%"
      m="0"
      p="0"
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      bgImage={'./images/path-background.svg'}
      bgSize="cover"
      boxSizing="border-box"
    >
      <Flex w={'1024px'}>
        <Flex
          w={'50%'}
          alignItems="center"
          justifyContent={'center'}
          h={'50vh'}
        >
          <Canvas3d />
        </Flex>
        <Flex w={'50%'} alignItems="center" justifyContent={'center'}>
          <Prenom />
        </Flex>
      </Flex>
      <Heading variant={'dew'} fontSize={'25px'} color={'white'}>
        Votre développeur Front-end qui va propulser 🚀 votre projet{' '}
      </Heading>
    </Flex>
  )
}
