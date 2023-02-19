import {Badge, Box, Flex, Heading, Image, Text} from '@chakra-ui/react'
import React from 'react'
import {colorsDD} from '../../ui/colors/colors'
import CanvasEgg from './3dEgg/Canva'

export default function Competences() {
  return (
    <Flex
      h="100vh"
      w="100%"
      p={10}
      justifyContent="center"
      alignItems="center"
      gap={20}
    >
      <Flex w="500px" flexDirection={'column'} gap={10} position="relative">
        <Heading variant={'dd'} color={'white'}>
          Mes compétences pour vous aider à faire éclore votre projet
        </Heading>
        <Box p={5} borderRadius={20} bg={'#ffffff20'}>
          <Text color={'white'}>
            Mes compétences de frontend développeur vont <br></br>transformer
            vos idées en réalisations <br></br> solides et concrètes pour
            propulser <br></br> votre projet au sommet !
          </Text>
        </Box>
        <Flex gap={1}>
          <Badge colorScheme={'dew'} padding={1} borderRadius={5}>
            Developpeur frontend
          </Badge>
          <Badge colorScheme={'dd'} padding={1} borderRadius={5}>
            React
          </Badge>
          <Badge
            background={colorsDD.pink20}
            color={colorsDD.pink}
            padding={1}
            borderRadius={5}
          >
            Next
          </Badge>
          <Badge colorScheme={'dd'} padding={1} borderRadius={5}>
            Three...
          </Badge>
        </Flex>
        <Box
          position={'absolute'}
          bottom={'-40%'}
          right={'-50px'}
          w={'300px'}
          h={'300px'}
        >
          <CanvasEgg />
        </Box>
      </Flex>
      <Box w="500px">
        <Image src="./images/identite/andrea-light-think.png" />
      </Box>
    </Flex>
  )
}
