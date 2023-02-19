import {Badge, Flex, Heading} from '@chakra-ui/react'
import React from 'react'

export default function Prenom() {
  return (
    <Flex
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Heading
        size={'3xl'}
        textAlign="center"
        fontFamily={'dunkel-sans-glatt, sans-serif'}
        color={'#40FC79'}
      >
        andréa
      </Heading>
      <Heading
        mt={-2}
        mb={2}
        size={'3xl'}
        fontFamily={'dunkel-sans-glatt, sans-serif'}
        textAlign="center"
      >
        Gauvreau
      </Heading>
      <Flex gap={1}>
        <Badge
          background={'#40FC7920'}
          color={'#40FC79'}
          padding={1}
          borderRadius={5}
        >
          Developpeur frontend
        </Badge>
        <Badge
          background={'#FC3FFB20'}
          color={'#FC3FFB'}
          padding={1}
          borderRadius={5}
        >
          React
        </Badge>
        <Badge
          background={'#FC3FFB20'}
          color={'#FC3FFB'}
          padding={1}
          borderRadius={5}
        >
          Next
        </Badge>
        <Badge
          background={'#FC3FFB20'}
          color={'#FC3FFB'}
          padding={1}
          borderRadius={5}
        >
          Three...
        </Badge>
      </Flex>
    </Flex>
  )
}
