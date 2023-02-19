import {Badge, Flex, Heading} from '@chakra-ui/react'
import React from 'react'
import {colorsDD} from '../../ui/colors/colors'

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
        color={colorsDD.green}
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
          background={colorsDD.green20}
          color={colorsDD.green}
          padding={1}
          borderRadius={5}
        >
          Developpeur frontend
        </Badge>
        <Badge
          background={colorsDD.pink20}
          color={colorsDD.pink}
          padding={1}
          borderRadius={5}
        >
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
        <Badge
          background={colorsDD.pink20}
          color={colorsDD.pink}
          padding={1}
          borderRadius={5}
        >
          Three...
        </Badge>
      </Flex>
    </Flex>
  )
}
