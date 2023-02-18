import {Box, Flex, Heading, Image, Text} from '@chakra-ui/react'
import React from 'react'
import CanvasEgg from './3dEgg/Canva'

export default function Competences() {
  return (
    <Flex
      h="100vh"
      w="100vw"
      p={10}
      justifyContent="center"
      alignItems="center"
      gap={20}
    >
      <Flex w="500px" flexDirection={'column'} gap={10} position="relative">
        <Heading variant={'dd'}>
          Mes compétences pour vous aider à faire éclore votre projet
        </Heading>
        <Box p={5} borderRadius={20} bg={'#ffffff20'}>
          <Text>
            Mes compétences de frontend développeur<br></br> vont transformer
            vos idées <br></br>en réalisations solides et concrètes <br></br>
            Pour propulser votre projet au sommet !
          </Text>
        </Box>
        <Box position={'absolute'} bottom={'-50px'} right={'-50px'}>
          <CanvasEgg />
        </Box>
      </Flex>
      <Box w="500px">
        <Image src="./images/identite/andrea-light-think.png" />
      </Box>
    </Flex>
  )
}
