import {Flex, Heading} from '@chakra-ui/react'
import React from 'react'
import CardsPP from './3drocket/cardsPP'
import Prenom from './Prenom'

export default function Home() {
  return (
    <Flex
      h="100vh"
      w="100vw"
      m="0"
      p="0"
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Flex w={'1024px'}>
        <Flex
          w={'50%'}
          alignItems="center"
          justifyContent={'center'}
          h={'50vh'}
        >
          <CardsPP />
        </Flex>
        <Flex w={'50%'} alignItems="center" justifyContent={'center'}>
          <Prenom />
        </Flex>
      </Flex>
      <Heading variant={'dew'} fontSize={'25px'}>
        Votre développeur Front-end qui va propulser 🚀 votre projet{' '}
      </Heading>
    </Flex>
  )
}
