import {Box, Flex, Image} from '@chakra-ui/react'
import React from 'react'

export default function ImageProject({image}) {
  return (
    <>
      <Flex justifyContent={'center'} alignItems={'center'} w={'100vw'}>
        <Flex
          w={{base: '90vw', md: '90vw', lg: '1024px'}}
          position="relative"
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box
            backgroundImage={`url(${image})`}
            backgroundSize={'cover'}
            backgroundPosition={'center'}
            w={'calc(100% - 20px)'}
            h={{
              base: 'calc(40vh - 20px)',
              md: 'calc(50vh - 20px)',
              lg: 'calc(80vh - 20px)',
            }}
            borderRadius={20}
            position="absolute"
            top={'10px'}
            left={'10px'}
            filter="blur(10px)"
            p={10}
            zIndex={1}
          ></Box>{' '}
          <Box
            backgroundImage={`url(${image})`}
            backgroundSize={'cover'}
            backgroundPosition={'center'}
            w={'calc(100% - 20px)'}
            h={{
              base: 'calc(40vh - 20px)',
              md: 'calc(50vh - 20px)',
              lg: 'calc(80vh - 20px)',
            }}
            borderRadius={20}
            position="absolute"
            top={'10px'}
            left={'10px'}
            filter="blur(40px)"
            p={10}
            zIndex={1}
          ></Box>
          <Box
            backgroundImage={`url(${image})`}
            backgroundSize={'cover'}
            backgroundPosition={'center'}
            w={'calc(100% - 20px)'}
            h={{
              base: 'calc(40vh - 20px)',
              md: 'calc(50vh - 20px)',
              lg: 'calc(80vh - 20px)',
            }}
            borderRadius={20}
            zIndex={3}
            position="absolute"
            top={'10px'}
            left={'10px'}
          ></Box>
          <Box
            bg={'#ffffff20'}
            backdropFilter={'blur(10px)'}
            w={'100%'}
            h={{
              base: '40vh',
              md: '50vh',
              lg: '80vh ',
            }}
            borderRadius={20}
            position="absolute"
            top={0}
            left={0}
            zIndex={2}
            mixBlendMode="overlay"
          ></Box>
        </Flex>
      </Flex>
    </>
  )
}
